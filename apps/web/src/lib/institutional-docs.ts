export const institutionalDocs = [
  {
    key: "inicio",
    title: "Presentacion inicial",
    label: "Inicio",
    description:
      "Una introduccion breve a Puente Impacto, sus lineas de trabajo y formas de contacto.",
    href: "/docs/presentacion-inicio-puente-impacto.pdf",
    audience: "Aliados, escuelas, ONGs, mentores y contactos generales.",
  },
  {
    key: "ongs",
    title: "Kit para ONGs",
    label: "ONGs",
    description:
      "Servicios, capacidades y esquemas de colaboracion para organizaciones sociales.",
    href: "/docs/ongs-puente-impacto.pdf",
    audience: "ONGs, asociaciones civiles, fundaciones y proyectos sociales.",
  },
  {
    key: "vocacional",
    title: "Puente Vocacional",
    label: "Vocacional",
    description:
      "Presentacion del programa Puente Vocacional 2026 para escuelas, mentores y aliados.",
    href: "/docs/puente-vocacional.pdf",
    audience: "Preparatorias, orientadores, mentores, estudiantes y familias.",
  },
  {
    key: "recursos",
    title: "Recursos",
    label: "Recursos",
    description:
      "Biblioteca comunitaria, cobertura audiovisual, clinica tecnica y herramientas de campo.",
    href: "/docs/recursos-puente-impacto.pdf",
    audience: "Organizaciones, escuelas, eventos, brigadas y comunidades.",
  },
  {
    key: "programas",
    title: "Programas",
    label: "Programas",
    description:
      "Actividades formativas, comunidad, lectura, CV, LinkedIn y grupos de estudio.",
    href: "/docs/programas-puente-impacto.pdf",
    audience: "Estudiantes, mentores y comunidad universitaria.",
  },
] as const;

export type InstitutionalDocKey = (typeof institutionalDocs)[number]["key"];

export function getInstitutionalDoc(key: InstitutionalDocKey) {
  return institutionalDocs.find((doc) => doc.key === key);
}
