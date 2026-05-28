"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex size-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 text-[#10233f]"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 rounded-[1.25rem] border border-[#d7dedf] bg-[#f7f4ed] p-3 shadow-xl">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href={item.href}
                key={item.href}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}

            {secondaryItems.length ? (
              <div className="mt-2 border-t border-[#d7dedf] pt-2">
                <p className="px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#526981]">
                  Más
                </p>
                <div className="grid gap-1">
                  {secondaryItems.map((item) => (
                    <Link
                      className="rounded-xl px-4 py-3 text-sm font-medium text-[#425875] transition hover:bg-white hover:text-[#10233f]"
                      href={item.href}
                      key={item.href}
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
