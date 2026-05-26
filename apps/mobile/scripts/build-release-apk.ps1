$ErrorActionPreference = "Stop"
$Version = "0.1.0"
$MobileRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$RepoRoot = Resolve-Path (Join-Path $MobileRoot "..\..")
$AndroidDir = Join-Path $MobileRoot "android"
$DownloadsDir = Join-Path $RepoRoot "apps\web\public\downloads"
$KeystoreDir = Join-Path $MobileRoot "keystores"
$KeystorePath = Join-Path $KeystoreDir "puente-impacto-release.jks"
$Alias = "puente-impacto"
$VersionedApk = Join-Path $DownloadsDir "puente-impacto-0.1.0.apk"
$AliasApk = Join-Path $DownloadsDir "puente-impacto-beta.apk"

if (-not (Test-Path $AndroidDir)) { throw "No existe apps/mobile/android." }
if (-not $env:ANDROID_HOME) { $env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk" }
if (-not (Test-Path $env:ANDROID_HOME)) { throw "ANDROID_HOME no existe: $env:ANDROID_HOME" }

$BuildTools = Get-ChildItem -Path (Join-Path $env:ANDROID_HOME "build-tools") -Directory | Sort-Object Name -Descending | Select-Object -First 1
if (-not $BuildTools) { throw "No encontre Android build-tools." }

$ZipAlign = Join-Path $BuildTools.FullName "zipalign.exe"
$ApkSigner = Join-Path $BuildTools.FullName "apksigner.bat"
if (-not (Test-Path $ZipAlign)) { throw "No encontre zipalign.exe" }
if (-not (Test-Path $ApkSigner)) { throw "No encontre apksigner.bat" }

$KeyTool = Join-Path $env:JAVA_HOME "bin\keytool.exe"
if (-not (Test-Path $KeyTool)) { $KeyTool = "keytool.exe" }

New-Item -ItemType Directory -Force -Path $KeystoreDir | Out-Null
New-Item -ItemType Directory -Force -Path $DownloadsDir | Out-Null

$Password = $env:PUENTE_KEYSTORE_PASSWORD
if (-not $Password) {
  $Password = Read-Host "Password del keystore. Usa una clave que puedas guardar"
}
if (-not $Password) { throw "Falta password del keystore." }

if (-not (Test-Path $KeystorePath)) {
  Write-Host "Creando keystore release. Guardalo bien: $KeystorePath" -ForegroundColor Yellow
  & $KeyTool -genkeypair -v -keystore $KeystorePath -storepass $Password -keypass $Password -alias $Alias -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Puente Impacto, OU=Puente Impacto, O=Puente Impacto, L=Monterrey, ST=Nuevo Leon, C=MX"
}

Push-Location $AndroidDir
try {
  .\gradlew.bat clean assembleRelease
} finally {
  Pop-Location
}

$UnsignedCandidates = @(
  (Join-Path $AndroidDir "app\build\outputs\apk\release\app-release-unsigned.apk"),
  (Join-Path $AndroidDir "app\build\outputs\apk\release\app-release.apk")
)

$UnsignedApk = $UnsignedCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $UnsignedApk) { throw "No encontre APK release generado." }

$AlignedApk = Join-Path $DownloadsDir "puente-impacto-0.1.0-aligned.apk"
if (Test-Path $AlignedApk) { Remove-Item -Force $AlignedApk }
if (Test-Path $VersionedApk) { Remove-Item -Force $VersionedApk }

& $ZipAlign -p -f 4 $UnsignedApk $AlignedApk

& $ApkSigner sign --ks $KeystorePath --ks-key-alias $Alias --ks-pass "pass:$Password" --key-pass "pass:$Password" --out $VersionedApk $AlignedApk
& $ApkSigner verify --verbose $VersionedApk

Copy-Item -Force $VersionedApk $AliasApk
Remove-Item -Force $AlignedApk -ErrorAction SilentlyContinue

$SizeMb = [math]::Round((Get-Item $VersionedApk).Length / 1MB, 2)
Write-Host "APK release lista: $VersionedApk ($SizeMb MB)" -ForegroundColor Green
Write-Host "Alias actualizado: $AliasApk" -ForegroundColor Green
