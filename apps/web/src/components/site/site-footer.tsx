import Link from "next/link";
import { ContactLinks } from "@/components/site/contact-links";

const mainLinks = [
  { href: "/ongs", label: "ONG" },
  { href: "/eventos", label: "Programas" },
  { href: "/servicios", label: "Servicios" },
  { href: "/investigacion", label: "Investigacion" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/descargar", label: "App" },
  { href: "/nosotros", label: "Equipo" },
];

const legalLinks = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Terminos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/kit", label: "Kit" },
  { href: "/faq", label: "FAQ" },
  { href: "/colabora", label: "Colabora" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d7dedf] bg-[#f7f4ed]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-lg font-semibold tracking-[-0.03em] text-[#10233f]">
            Puente Impacto
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#526981]">
            Tecnologia, educacion e investigacion aplicada para organizaciones, comunidades y proyectos con impacto social.
          </p>
          <ContactLinks />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Secciones
            </p>
            <div className="mt-4 grid gap-2">
              {mainLinks.map((item) => (
                <Link
                  className="text-sm font-medium text-[#425875] transition hover:text-[#10233f]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Legal
            </p>
            <div className="mt-4 grid gap-2">
              {legalLinks.map((item) => (
                <Link
                  className="text-sm font-medium text-[#425875] transition hover:text-[#10233f]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d7dedf]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs leading-6 text-[#526981] sm:flex-row sm:items-center sm:justify-between">
          <p>{"\u00a9"} {new Date().getFullYear()} Puente Impacto.</p>
          <p>Proyecto en construccion y mejora continua.</p>
        </div>
      </div>
    </footer>
  );
}
