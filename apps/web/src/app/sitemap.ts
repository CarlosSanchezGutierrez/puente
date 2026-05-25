import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/biblioteca", priority: 0.95, changeFrequency: "daily" },
  { path: "/ongs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/voluntariado", priority: 0.85, changeFrequency: "monthly" },
  { path: "/eventos", priority: 0.8, changeFrequency: "daily" },
  { path: "/recursos", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contacto", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terminos", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}