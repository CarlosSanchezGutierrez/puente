"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  navItems: NavItem[];
  secondaryItems?: NavItem[];
};

export function MobileMenu({ navItems, secondaryItems = [] }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const menuId = useId();
  const moreId = useId();

  useEffect(() => {
    if (!open) {
      document.body.removeAttribute("data-pi-mobile-menu-open");
      return;
    }

    document.body.setAttribute("data-pi-mobile-menu-open", "true");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMoreOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.removeAttribute("data-pi-mobile-menu-open");
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  return (
    <div className="xl:hidden">
      <button
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex size-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 text-[#10233f] shadow-sm backdrop-blur transition hover:bg-white"
        onClick={() => {
          setOpen((current) => !current);
          setMoreOpen(false);
        }}
        type="button"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <>
          <button
            aria-label="Cerrar menú"
            className="fixed inset-0 z-50 bg-[#10233f]/20 backdrop-blur-sm"
            onClick={closeMenu}
            type="button"
          />

          <nav
            aria-label="Menú móvil"
            className="fixed left-4 right-4 top-20 z-[60] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[1.5rem] border border-[#d7dedf] bg-[#f7f4ed] p-4 shadow-2xl"
            id={menuId}
          >
            <div className="mb-3 border-b border-[#d7dedf] pb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
                Puente Impacto
              </p>
              <p className="mt-1 text-sm leading-6 text-[#425875]">
                Tecnología social para proyectos reales.
              </p>
            </div>

            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  className="flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#10233f] transition hover:bg-white"
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>

            {secondaryItems.length ? (
              <div className="mt-3 rounded-[1rem] border border-[#d7dedf] bg-white/50 p-2">
                <button
                  aria-controls={moreId}
                  aria-expanded={moreOpen}
                  className="flex min-h-11 w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#526981] transition hover:bg-white/80"
                  onClick={() => setMoreOpen((current) => !current)}
                  type="button"
                >
                  <span>Más opciones</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-4 shrink-0 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {moreOpen ? (
                  <div className="mt-1 grid gap-1" id={moreId}>
                    {secondaryItems.map((item) => (
                      <Link
                        className="flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#425875] transition hover:bg-white hover:text-[#10233f]"
                        href={item.href}
                        key={item.href}
                        onClick={closeMenu}
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="mt-4 grid gap-2 border-t border-[#d7dedf] pt-4">
              <Link
                className="flex min-h-11 items-center justify-center rounded-full bg-[#10233f] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                href="/contacto"
                onClick={closeMenu}
              >
                Contacto
              </Link>

              <a
                className="flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white px-4 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white/80"
                href="https://calendly.com/contacto-puenteimpacto/30min"
                onClick={closeMenu}
                rel="noreferrer"
                target="_blank"
              >
                Agendar reunión
              </a>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
