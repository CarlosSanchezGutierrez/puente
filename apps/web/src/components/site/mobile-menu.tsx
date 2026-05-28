"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { ActiveNavLink } from "@/components/site/active-nav-link";

type NavItem = {
  href: string;
  label: string;
  exact?: boolean;
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
  const rootRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => {
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
        closeMenu();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (target instanceof Node && rootRef.current && !rootRef.current.contains(target)) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.body.removeAttribute("data-pi-mobile-menu-open");
    };
  }, [open]);

  return (
    <div className="relative xl:hidden" ref={rootRef}>
      <button
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex size-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white text-[#10233f] shadow-sm transition hover:bg-white/90"
        onClick={() => {
          setOpen((current) => !current);
          setMoreOpen(false);
        }}
        type="button"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <nav
          aria-label="Menú móvil"
          className="fixed left-4 right-4 top-[7.15rem] z-50 max-h-[min(64svh,28rem)] overflow-y-auto overflow-x-hidden overscroll-contain rounded-[1.25rem] border border-[#d7dedf] bg-[#f7f4ed] p-3 shadow-xl"
          id={menuId}
        >
          <div className="mb-2 border-b border-[#d7dedf] pb-2">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#526981]">
              Menú
            </p>
          </div>

          <div className="grid gap-1">
            {navItems.map((item) => (
              <ActiveNavLink
                activeClassName="bg-white text-[#10233f] shadow-sm"
                className="flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                exact={item.exact}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">→</span>
              </ActiveNavLink>
            ))}
          </div>

          {secondaryItems.length ? (
            <div className="mt-2 rounded-[1rem] border border-[#d7dedf] bg-white/55 p-2">
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
                    <ActiveNavLink
                      activeClassName="bg-white text-[#10233f] shadow-sm"
                      className="flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#425875] transition hover:bg-white hover:text-[#10233f]"
                      exact={item.exact}
                      href={item.href}
                      key={item.href}
                      onClick={closeMenu}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true">→</span>
                    </ActiveNavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </nav>
      ) : null}
    </div>
  );
}