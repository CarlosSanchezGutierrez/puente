import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "org.puenteimpacto.app",
  appName: "Puente Impacto",
  webDir: "www",
  server: {
    url: "https://puenteimpacto.org",
    cleartext: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 900,
      backgroundColor: "#F7F4ED",
      androidScaleType: "CENTER_INSIDE",
      showSpinner: false
    }
  }
};

export default config;
