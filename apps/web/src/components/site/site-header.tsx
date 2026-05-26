"use client";
import { BookingLink } from "@/components/site/booking-link";
import { SocialIconLinks } from "@/components/site/social-icon-links";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/ongs", label: "ONGs" },
  { href: "/eventos", label: "Programas" },
  { href: "/servicios", label: "Servicios" },
  { href: "/investigacion", label: "Investigaci\u00f3n" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/descargar", label: "App" },
  { href: "/nosotros", label: "Equipo" },
  { href: "/colabora", label: "Colabora" },
  { href: "/kit", label: "Kit" },
  { href: "/faq", label: "FAQ" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7dedf] bg-[#f7f4ed]/92 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-5 px-6">
        <Link
          className="text-[15px] font-semibold tracking-[-0.025em] text-[#10233f] transition hover:text-[#1b365f]"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          Puente Impacto
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "text-[#10233f]"
                    : "text-[#60738c] hover:text-[#10233f]"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
                    <BookingLink variant="header" />
          <SocialIconLinks />
<Link
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#10233f] px-4 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            href="/contacto"
          >
            Solicitar
          </Link>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/70 text-[#10233f] lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[#d7dedf] bg-[#f7f4ed] px-6 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1.5">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-white text-[#10233f]"
                      : "text-[#60738c] hover:bg-white/70 hover:text-[#10233f]"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-[#10233f] px-4 text-sm font-medium text-white transition hover:bg-[#1b365f]"
              href="/contacto"
              onClick={() => setMenuOpen(false)}
            >
              Solicitar
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}