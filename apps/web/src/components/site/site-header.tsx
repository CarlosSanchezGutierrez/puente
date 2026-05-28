import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { BookingLink } from "@/components/site/booking-link";
import { MobileMenu } from "@/components/site/mobile-menu";
import { SocialIconLinks } from "@/components/site/social-icon-links";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/ongs", label: "ONG" },
  { href: "/eventos/puente-vocacional-2026", label: "Vocacional" },
  { href: "/nosotros", label: "Equipo" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/contacto", label: "Contacto" },
];

const secondaryNavItems = [
  { href: "/eventos", label: "Programas" },
  { href: "/recursos", label: "Recursos" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/faq", label: "FAQ" },
  { href: "/kit", label: "Kit" },
  { href: "/descargar", label: "App" },
];

const mobileQuickItems = [
  { href: "/ongs", label: "ONG" },
  { href: "/eventos/puente-vocacional-2026", label: "Vocacional" },
  { href: "/nosotros", label: "Equipo" },
];

const mobileMenuItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/recursos", label: "Recursos" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/contacto", label: "Contacto" },
];

const mobileMoreItems = [
  { href: "/eventos", label: "Programas" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/faq", label: "FAQ" },
  { href: "/kit", label: "Kit" },
  { href: "/descargar", label: "App" },
];

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-[#d7dedf] bg-[#f7f4ed]/96">
      <div className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link className="min-w-0 text-sm font-semibold tracking-[-0.02em] text-[#10233f]" href="/">
          Puente Impacto
        </Link>

        <nav className="hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-full px-3.5 py-2 text-sm font-medium text-[#425875] transition hover:bg-white hover:text-[#10233f]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}

          <details className="group relative">
            <summary className="inline-flex list-none cursor-pointer items-center gap-1.5 rounded-full border border-[#d7dedf] bg-white/70 px-3.5 py-2 text-sm font-semibold text-[#10233f] transition hover:bg-white">
              Más
              <ChevronDown className="size-4 transition group-open:rotate-180" />
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 min-w-48 rounded-2xl border border-[#d7dedf] bg-[#f7f4ed] p-2 shadow-xl">
              <p className="px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#526981]">
                Más opciones
              </p>
              {secondaryNavItems.map((item) => (
                <Link
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[#425875] transition hover:bg-white hover:text-[#10233f]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <BookingLink variant="header" />
          <SocialIconLinks />
        </div>

        <MobileMenu navItems={mobileMenuItems} secondaryItems={mobileMoreItems} />
      </div>

      <nav aria-label="Accesos rápidos móviles" className="border-t border-[#d7dedf]/70 px-4 pb-3 xl:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pt-2">
          {mobileQuickItems.map((item) => (
            <Link
              className="shrink-0 rounded-full border border-[#d7dedf] bg-white/75 px-3.5 py-2 text-xs font-semibold text-[#10233f] shadow-sm transition hover:bg-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}

          <a
            className="shrink-0 rounded-full bg-[#10233f] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1b365f]"
            href="https://calendly.com/contacto-puenteimpacto/30min"
            rel="noreferrer"
            target="_blank"
          >
            Agendar
          </a>
        </div>
      </nav>
    </header>
  );
}
