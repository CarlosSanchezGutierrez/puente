import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[#60738c] md:flex-row md:items-center md:justify-between">
      <p>© 2026 Puente. Tecnología, comunidad e infraestructura social.</p>
      <div className="flex gap-5">
        <Link href="#">GitHub</Link>
        <Link href="#">LinkedIn</Link>
        <Link href="#">Contacto</Link>
      </div>
    </footer>
  );
}
