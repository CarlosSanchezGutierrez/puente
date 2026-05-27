import Link from "next/link";
import { BookingLink } from "@/components/site/booking-link";
import { MobileMenu } from "@/components/site/mobile-menu";
import { SocialIconLinks } from "@/components/site/social-icon-links";

const navItems = [
  { href: "/ongs", label: "ONGs" },
  { href: "/eventos/puente-vocacional-2026", label: "Vocacional" },
  { href: "/eventos", label: "Programas" },
  { href: "/recursos", label: "Recursos" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/colabora", label: "Colabora" },
  { href: "/kit", label: "Kit" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d7dedf] bg-[#f7f4ed]/92 backdrop-blur">
      <div className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link className="min-w-0 text-sm font-semibold tracking-[-0.02em] text-[#10233f]" href="/">
          Puente Impacto
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-[#425875] transition hover:text-[#10233f]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <BookingLink variant="header" />
          <SocialIconLinks />
        </div>

        <MobileMenu navItems={navItems} />
      </div>
    </header>
  );
}
