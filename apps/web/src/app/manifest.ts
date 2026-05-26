import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Puente Impacto",
    short_name: "Puente",
    description:
      "Tecnologia social, educacion e investigacion aplicada para organizaciones, estudiantes y comunidades.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F7F4ED",
    theme_color: "#10233F",
    orientation: "portrait",
    icons: [
      {
        src: "/brand/puente_impacto_face.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
