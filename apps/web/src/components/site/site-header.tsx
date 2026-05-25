import Link from "next/link";
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
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <Link className="text-xl font-semibold tracking-[0.22em]" href="/">
        PUENTE
      </Link>

      <nav className="hidden items-center gap-8 text-sm text-[#334866] md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Button className="rounded-full bg-[#10233f] px-5 text-white hover:bg-[#1b365f]">
        Contacto
      </Button>
    </header>
  );
}
