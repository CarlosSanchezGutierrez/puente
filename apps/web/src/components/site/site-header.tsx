import Link from "next/link";
import { BookingLink } from "@/components/site/booking-link";
import { MobileMenu } from "@/components/site/mobile-menu";
import { SocialIconLinks } from "@/components/site/social-icon-links";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/ongs", label: "ONGs" },
  { href: "/eventos/puente-vocacional-2026", label: "Vocacional" },
  { href: "/eventos", label: "Programas" },
  { href: "/recursos", label: "Recursos" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/colabora", label: "Colabora" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

const secondaryNavItems = [
  { href: "/kit", label: "Kit" },
  { href: "/descargar", label: "App" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d7dedf] bg-[#f7f4ed]/92 backdrop-blur">
      <div className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link className="min-w-0 text-sm font-semibold tracking-[-0.02em] text-[#10233f]" href="/">
          Puente Impacto
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-[#425875] transition hover:text-[#10233f]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}

          <details className="group relative">
            <summary className="list-none cursor-pointer text-sm font-medium text-[#425875] transition hover:text-[#10233f]">
              Más
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 min-w-40 rounded-2xl border border-[#d7dedf] bg-[#f7f4ed] p-2 shadow-xl">
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

        <div className="hidden items-center gap-2 lg:flex">
          <BookingLink variant="header" />
          <SocialIconLinks />
        </div>

        <MobileMenu navItems={navItems} secondaryItems={secondaryNavItems} />
      </div>
    </header>
  );
}
