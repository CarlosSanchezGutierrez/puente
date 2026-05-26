import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Puente Impacto",
    short_name: "Puente",
    description: "Tecnologia social, programas, servicios de campo e investigacion aplicada.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F7F4ED",
    theme_color: "#10233F",
    orientation: "portrait",
    icons: [
      {
        src: "/pwa/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: "/pwa/maskable-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
