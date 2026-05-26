$ErrorActionPreference = "Stop"
$MobileRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$RepoRoot = Resolve-Path (Join-Path $MobileRoot "..\..")
$AndroidDir = Join-Path $MobileRoot "android"
$ApkSource = Join-Path $AndroidDir "app\build\outputs\apk\debug\app-debug.apk"
$DownloadsDir = Join-Path $RepoRoot "apps\web\public\downloads"
$ApkDest = Join-Path $DownloadsDir "puente-impacto-beta.apk"
if (-not (Test-Path $AndroidDir)) { throw "No existe apps/mobile/android. Ejecuta primero: pnpm --dir apps/mobile exec cap add android" }
Push-Location $AndroidDir
try {
  if (Test-Path ".\gradlew.bat") {
    .\gradlew.bat assembleDebug
  } else {
    throw "No existe gradlew.bat. Reinstala la plataforma Android de Capacitor."
  }
} finally {
  Pop-Location
}
if (-not (Test-Path $ApkSource)) { throw "No se encontro el APK generado en: $ApkSource" }
New-Item -ItemType Directory -Force -Path $DownloadsDir | Out-Null
Copy-Item -Force -Path $ApkSource -Destination $ApkDest
Write-Host "APK copiada a: $ApkDest" -ForegroundColor Green
