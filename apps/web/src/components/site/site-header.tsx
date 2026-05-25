import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/biblioteca", label: "Biblioteca" },
  { href: "/voluntariado", label: "Voluntariado" },
  { href: "/ongs", label: "ONG's" },
  { href: "/eventos", label: "Eventos" },
  { href: "/recursos", label: "Recursos" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d7dedf]/70 bg-[#f7f4ed]/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link className="group flex items-center gap-3" href="/">
          <span className="flex size-9 items-center justify-center rounded-full border border-[#10233f]/20 bg-white/70 text-sm font-semibold text-[#10233f]">
            P
          </span>
          <span className="text-lg font-semibold tracking-[0.22em] text-[#10233f]">
            PUENTE
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#334866] lg:flex">
          {navItems.map((item) => (
            <Link
              className="transition hover:text-[#10233f]"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="rounded-full bg-[#10233f] px-5 text-white hover:bg-[#1b365f]">
          <Link href="/contacto">
            Contacto
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}