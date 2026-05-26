"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/ongs", label: "ONGs" },
  { href: "/eventos", label: "Programas" },
  { href: "/servicios", label: "Servicios" },
  { href: "/investigacion", label: "InvestigaciÃ³n" },
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/nosotros", label: "Equipo" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#d7dedf] bg-[#f7f4ed]/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link
          className="group inline-flex flex-col justify-center"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-base font-semibold tracking-[-0.03em] text-[#10233f] transition group-hover:text-[#1b365f]">
            Puente Impacto
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#60738c]">
            TecnologÃ­a social
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-[#10233f] shadow-sm"
                    : "text-[#60738c] hover:bg-white/70 hover:text-[#10233f]"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#10233f] px-4 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            href="/contacto"
          >
            Solicitar
          </Link>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label="Abrir menÃº"
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 text-[#10233f] lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[#d7dedf] bg-[#f7f4ed] px-6 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-white text-[#10233f] shadow-sm"
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