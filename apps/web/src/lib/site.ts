import { puenteAreas, puenteBrand, puentePrinciples } from "@puente/brand";

export const siteConfig = {
  name: puenteBrand.name,
  description: puenteBrand.description,
  url: puenteBrand.url,
  areas: puenteAreas.map((area) => ({
    title: area.shortTitle,
    description: area.description,
  })),
  principles: puentePrinciples,
};
