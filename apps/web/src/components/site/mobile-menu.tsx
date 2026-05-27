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
};

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Cerrar menu" : "Abrir menu"}
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
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
