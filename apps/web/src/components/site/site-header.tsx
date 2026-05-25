"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/voluntariado", label: "Voluntariado" },
  { href: "/ongs", label: "ONG's" },
  { href: "/eventos", label: "Eventos" },
  { href: "/recursos", label: "Recursos" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7dedf]/80 bg-[#f7f4ed]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link className="group flex min-w-0 items-center gap-3" href="/">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#10233f]/20 bg-white/75 text-sm font-semibold text-[#10233f] shadow-sm">
            P
          </span>
          <span className="truncate text-base font-semibold tracking-[0.22em] text-[#10233f] sm:text-lg">
            PUENTE
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#d7dedf] bg-white/55 p-1 text-sm text-[#334866] lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                className={`rounded-full px-4 py-2 transition ${
                  active
                    ? "bg-[#10233f] text-white"
                    : "text-[#425875] hover:bg-white hover:text-[#10233f]"
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
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white/70 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
            href="/contacto"
          >
            Contacto
          </Link>

          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            href="/ongs"
          >
            Solicitar apoyo
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          className="inline-flex size-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 text-[#10233f] shadow-sm lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-x-0 top-[69px] z-50 border-b border-[#d7dedf] bg-[#f7f4ed] px-4 pb-5 pt-2 shadow-xl lg:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  className={`rounded-2xl border px-4 py-4 text-base font-medium transition ${
                    active
                      ? "border-[#10233f] bg-[#10233f] text-white"
                      : "border-[#d7dedf] bg-white/75 text-[#10233f]"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 grid gap-2">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f]"
              href="/contacto"
            >
              Contacto
            </Link>

            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white"
              href="/ongs"
            >
              Solicitar apoyo
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}