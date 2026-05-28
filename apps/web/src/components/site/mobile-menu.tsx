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

  const close = () => {
    setOpen(false);
    setMoreOpen(false);
  };

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

  return (
    <div className="xl:hidden">
      <button
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="pi-mobile-menu-button inline-flex size-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 text-[#10233f] shadow-sm backdrop-blur transition hover:bg-white"
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
            className="fixed inset-0 z-[80] bg-[#10233f]/20 backdrop-blur-sm"
            onClick={close}
            type="button"
          />

          <div
            aria-label="Menú principal"
            aria-modal="true"
            className="pi-mobile-menu-panel fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] top-[calc(4.75rem+env(safe-area-inset-top))] z-[90] overflow-y-auto overflow-x-hidden overscroll-contain rounded-[1.5rem] border border-[#d7dedf] bg-[#f7f4ed]/98 shadow-2xl backdrop-blur"
            id={menuId}
            role="dialog"
          >
            <nav className="px-4 py-4 pb-6">
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
                    className="pi-mobile-menu-link flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#10233f] transition hover:bg-white"
                    href={item.href}
                    key={item.href}
                    onClick={close}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>

              {secondaryItems.length ? (
                <div className="mt-3 rounded-[1rem] border border-[#d7dedf] bg-white/45 p-2">
                  <button
                    aria-controls={moreId}
                    aria-expanded={moreOpen}
                    className="flex min-h-11 w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#526981] transition hover:bg-white/70"
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
                          className="pi-mobile-menu-link flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#425875] transition hover:bg-white hover:text-[#10233f]"
                          href={item.href}
                          key={item.href}
                          onClick={close}
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
                  onClick={close}
                >
                  Contacto
                </Link>

                <a
                  className="flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white px-4 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white/80"
                  href="https://calendly.com/contacto-puenteimpacto/30min"
                  onClick={close}
                  rel="noreferrer"
                  target="_blank"
                >
                  Agendar reunión
                </a>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
