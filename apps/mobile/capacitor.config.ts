import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "org.puenteimpacto.app",
  appName: "Puente Impacto",
  webDir: "www",
  server: {
    url: "https://puenteimpacto.org",
    cleartext: false,
  },
};

export default config;
