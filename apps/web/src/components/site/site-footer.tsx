import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[#60738c] md:flex-row md:items-center md:justify-between">
      <p>© 2026 Puente. Tecnología, comunidad e infraestructura social.</p>
      <div className="flex flex-wrap gap-5">
        <Link href="https://github.com/CarlosSanchezGutierrez/puente">GitHub</Link>
        <Link href="/contacto">Contacto</Link>
        <Link href="/privacidad">Privacidad</Link>
        <Link href="/terminos">Términos</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </footer>
  );
}