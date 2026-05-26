export const siteContact = {
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
};

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/puenteimpacto/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18cFjnZfPg/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/puente-impacto/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@PuenteImpacto",
  },
] as const;
