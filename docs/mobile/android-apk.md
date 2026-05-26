# Android APK
Ruta publica: /descargar
Archivo esperado: apps/web/public/downloads/puente-impacto-beta.apk
La app Android usa Capacitor y carga https://puenteimpacto.org
Comandos:
pnpm --dir apps/mobile exec cap sync android
pnpm --dir apps/mobile run apk:debug
