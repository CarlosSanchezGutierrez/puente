import Link from "next/link";

const footerGroups = [
  {
    title: "Plataforma",
    links: [
      { href: "/nosotros", label: "Nosotros" },
 { href: "/biblioteca", label: "Biblioteca" },
      { href: "/voluntariado", label: "Voluntariado" },
      { href: "/ongs", label: "ONG's" },
      { href: "/eventos", label: "Eventos" },
      { href: "/recursos", label: "Recursos" },
    ],
  },
  {
    title: "Proyecto",
    links: [
      { href: "/contacto", label: "Contacto" },
      { href: "/admin", label: "Administracion" },
      { href: "https://github.com/CarlosSanchezGutierrez/puente", label: "GitHub" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacidad", label: "Privacidad" },
      { href: "/terminos", label: "Terminos" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-[#d7dedf] bg-[#f3efe6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-16">
        <div>
          <Link className="text-lg font-semibold tracking-[0.22em] text-[#10233f]" href="/">
            PUENTE
          </Link>

          <p className="mt-5 max-w-sm leading-7 text-[#425875]">
            Tecnolog&iacute;a, comunidad e infraestructura social para conectar conocimiento,
            colaboraci&oacute;n y proyectos con utilidad p&uacute;blica.
          </p>

          <div className="mt-6 rounded-[1.25rem] border border-[#d7dedf] bg-white/55 p-4">
            <p className="text-sm font-semibold text-[#10233f]">Proyecto en desarrollo</p>
            <p className="mt-2 text-sm leading-6 text-[#60738c]">
              Uso comunitario, educativo y social. Algunas funciones pueden cambiar conforme
              avance la plataforma.
            </p>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#60738c]">
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
        <p>&copy; 2026 Puente.</p>
        <p>Software, lectura, aprendizaje e impacto social.</p>
      </div>
    </footer>
  );
}