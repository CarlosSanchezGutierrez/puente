const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Puente Impacto",
  alternateName: "Puente Impacto",
  url: "https://puenteimpacto.org",
  logo: "https://puenteimpacto.org/brand/puente_impacto_face.png",
  email: "contacto@puenteimpacto.org",
  telephone: "+52 833 367 4769",
  description:
    "Iniciativa de tecnologia social enfocada en apoyar organizaciones, escuelas, estudiantes y comunidades mediante herramientas digitales, documentacion, servicios de campo, programas educativos e investigacion aplicada.",
  sameAs: [
    "https://www.instagram.com/puenteimpacto/",
    "https://www.facebook.com/share/18cFjnZfPg/",
    "https://www.linkedin.com/company/puente-impacto/",
    "https://www.youtube.com/@PuenteImpacto",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Puente Impacto",
  url: "https://puenteimpacto.org",
  publisher: {
    "@type": "Organization",
    name: "Puente Impacto",
  },
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
