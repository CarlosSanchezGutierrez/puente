$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path "docs\performance" | Out-Null
New-Item -ItemType Directory -Force -Path ".lighthouse-tmp" | Out-Null
$ChromeFlags = "--headless=new --disable-gpu --no-sandbox --disable-dev-shm-usage --user-data-dir=$((Resolve-Path '.lighthouse-tmp').Path)"
pnpm dlx lighthouse https://puenteimpacto.org --output=html --output=json --output-path=docs/performance/lighthouse-home --chrome-flags="$ChromeFlags"
Write-Host "Reportes creados:" -ForegroundColor Green
Write-Host "docs/performance/lighthouse-home.html"
Write-Host "docs/performance/lighthouse-home.report.json"
