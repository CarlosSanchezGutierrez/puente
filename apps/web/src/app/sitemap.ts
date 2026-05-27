import type { MetadataRoute } from "next";

const baseUrl = "https://puenteimpacto.org";

const routes = [
  "",
  "/ongs",
  "/eventos",
  "/eventos/puente-vocacional-2026",
  "/recursos",
  "/biblioteca",
  "/servicios",
  "/colabora",
  "/kit",
  "/faq",
  "/contacto",
  "/compartir",
  "/descargar",
  "/nosotros",
  "/investigacion",
  "/privacidad",
  "/terminos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/ongs" || route === "/eventos/puente-vocacional-2026" ? 0.9 : 0.7,
  }));
}
