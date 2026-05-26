export const siteContact = {
  siteUrl: "https://puenteimpacto.org",
  email: "contacto@puenteimpacto.org",
  phoneDisplay: "+52 833 367 4769",
  phoneE164: "528333674769",
  whatsappMessage:
    "Hola, Puente Impacto. Me gustaria conocer mas sobre sus servicios o proyectos.",
};

const whatsappText = encodeURIComponent(siteContact.whatsappMessage);
const emailSubject = encodeURIComponent("Contacto desde puenteimpacto.org");
const emailBody = encodeURIComponent(
  "Hola Puente Impacto, me gustaria conocer mas sobre sus servicios o proyectos."
);

export const contactLinks = {
  email: `mailto:${siteContact.email}?subject=${emailSubject}&body=${emailBody}`,
  whatsapp: `https://wa.me/${siteContact.phoneE164}?text=${whatsappText}`,
  share: "/compartir",
};

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/puenteimpacto/",
    color: "#E4405F",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18cFjnZfPg/",
    color: "#1877F2",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/puente-impacto/",
    color: "#0A66C2",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@PuenteImpacto",
    color: "#FF0000",
  },
] as const;
