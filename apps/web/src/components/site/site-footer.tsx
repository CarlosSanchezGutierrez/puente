import Link from "next/link";

const footerGroups = [
  {
    title: "Plataforma",
    links: [
      { href: "/biblioteca", label: "Biblioteca" },
      { href: "/voluntariado", label: "Voluntariado" },
      { href: "/ongs", label: "ONG's" },
      { href: "/eventos", label: "Eventos" },
      { href: "/recursos", label: "Recursos" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { href: "/contacto", label: "Contacto" },
      { href: "/privacidad", label: "Privacidad" },
      { href: "/terminos", label: "Términos" },
      { href: "/admin", label: "Admin" },
    ],
  },
  {
    title: "Código",
    links: [
      { href: "https://github.com/CarlosSanchezGutierrez/puente", label: "GitHub" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d7dedf] bg-[#f3efe6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link className="text-lg font-semibold tracking-[0.22em] text-[#10233f]" href="/">
            PUENTE
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-[#425875]">
            Tecnología, comunidad e infraestructura social para conectar conocimiento,
            colaboración y proyectos con utilidad pública.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#60738c]">
              {group.title}
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[#425875]">
              {group.links.map((link) => (
                <Link className="transition hover:text-[#10233f]" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#d7dedf] px-6 py-5 text-sm text-[#60738c] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Puente.</p>
        <p>Proyecto en desarrollo. Uso comunitario, educativo y social.</p>
      </div>
    </footer>
  );
}