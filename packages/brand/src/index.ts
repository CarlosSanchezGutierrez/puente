export const puenteBrand = {
  name: "Puente",
  description:
    "Una plataforma de tecnología cívica para software social, comunidad, aprendizaje e investigación.",
  englishDescription:
    "A civic technology platform for social software, open-source tools, community learning, and research projects.",
  url: "https://puente.org",
  colors: {
    background: "#f7f4ed",
    navy: "#10233f",
    navyHover: "#1b365f",
    text: "#10233f",
    muted: "#425875",
    softMuted: "#60738c",
    border: "#d7dedf",
    lightBorder: "#e1e5e8",
    white: "#ffffff",
    card: "rgba(255,255,255,0.75)",
    cream: "#fbfaf7",
    paleBlue: "#b7c8dc",
  },
  typography: {
    wordmarkTracking: "0.22em",
    labelTracking: "0.24em",
  },
} as const;

export const puenteAreas = [
  {
    key: "systems",
    title: "Puente Systems",
    shortTitle: "Systems",
    description:
      "Software, aplicaciones, herramientas open source e infraestructura digital para organizaciones sociales.",
  },
  {
    key: "lab",
    title: "Puente Lab",
    shortTitle: "Lab",
    description:
      "Investigación, prototipos, estudios orientados a ODS, datos y análisis aplicado.",
  },
  {
    key: "community",
    title: "Puente Comunidad",
    shortTitle: "Comunidad",
    description:
      "Libros, círculos de lectura, mentorías, talleres, pláticas y grupos de aprendizaje.",
  },
  {
    key: "media",
    title: "Puente Media",
    shortTitle: "Media",
    description:
      "Historias humanas, entrevistas, documentales, campañas y contenido educativo.",
  },
] as const;

export const puentePrinciples = [
  {
    title: "Utilidad",
    text: "Aportar valor real y consistente vale más que destacar.",
  },
  {
    title: "Criterio",
    text: "La responsabilidad, constancia y prudencia importan tanto como la capacidad técnica.",
  },
  {
    title: "Continuidad",
    text: "Los buenos sistemas ayudan a que el trabajo útil pueda sostenerse en el tiempo.",
  },
  {
    title: "Escalabilidad",
    text: "Un sistema bien diseñado puede facilitar y multiplicar la capacidad de ayudar.",
  },
  {
    title: "Impacto humano",
    text: "Me motiva trabajar en tecnología que pueda contribuir, incluso de forma pequeña, a mejorar la salud, seguridad o bienestar de las personas.",
  },
] as const;

export const puenteActions = [
  {
    label: "Solicitar apoyo para una ONG",
    href: "/ongs",
  },
  {
    label: "Aplicar como voluntario",
    href: "/voluntariado",
  },
  {
    label: "Solicitar un libro",
    href: "/biblioteca",
  },
  {
    label: "Unirse a talleres y eventos",
    href: "/eventos",
  },
  {
    label: "Contribuir a proyectos open source",
    href: "/recursos",
  },
  {
    label: "Proponer una investigación o guía",
    href: "/recursos",
  },
] as const;

export const puenteBookCategories = [
  "Tecnología, software y datos",
  "Idiomas",
  "Desarrollo personal y finanzas",
  "Narrativa, novelas e historias",
  "Ciencia, historia y exploración",
] as const;

export type PuenteArea = (typeof puenteAreas)[number]["key"];
export type PuenteBookCategory = (typeof puenteBookCategories)[number];
