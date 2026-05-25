export const APP_NAME = "Puente";

export const APP_DESCRIPTION =
  "A civic technology platform for social software, open-source tools, community learning, and research projects.";

export const AREAS = [
  "systems",
  "lab",
  "community",
  "media",
  "open-source",
] as const;

export type PuenteArea = (typeof AREAS)[number];
