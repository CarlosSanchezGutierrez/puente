import {
  ArrowLeft,
  BookOpen,
  Compass,
  HeartHandshake,
  Home,
  Search,
} from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const routes = [
  {
    href: "/",
    label: "Volver al inicio",
    description: "Regresar a la pagina principal de Puente.",
    icon: Home,
  },
  {
    href: "/biblioteca",
    label: "Explorar biblioteca",
    description: "Ver el catalogo comunitario de libros.",
    icon: BookOpen,
  },
  {
    href: "/voluntariado",
    label: "Participar",
    description: "Conocer formas de colaborar con Puente.",
    icon: HeartHandshake,
  },
];

export default function NotFound() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
            Error 404
          </Badge>

          <div className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
                Ruta no encontrada
              </p>

              <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
                Esta p&aacute;gina no existe.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
                La direcci&oacute;n puede estar incompleta, haber cambiado o no formar parte de la plataforma.
                Puedes volver al inicio o entrar a una secci&oacute;n activa de Puente.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                  href="/"
                >
                  <ArrowLeft className="mr-2 size-4" />
                  Volver al inicio
                </Link>

                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                  href="/contacto"
                >
                  Reportar problema
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
              <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                    Navegacion
                  </span>
                  <Compass className="size-6 text-[#d7e7f6]" />
                </div>

                <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                  Si algo no se encuentra, la ruta correcta debe ser facil de recuperar.
                </p>

                <div className="mt-10 grid gap-3">
                  {routes.map((route) => (
                    <Link
                      className="grid grid-cols-[40px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4 transition hover:bg-white/15"
                      href={route.href}
                      key={route.href}
                    >
                      <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                        <route.icon className="size-5 text-[#d7e7f6]" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{route.label}</p>
                        <p className="mt-1 text-sm leading-6 text-[#c9d8e8]">
                          {route.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Card className="mt-12 border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="grid gap-4 p-6 md:grid-cols-[56px_1fr] md:items-center">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                <Search className="size-6 text-[#10233f]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                  Sugerencia
                </h2>
                <p className="mt-2 leading-7 text-[#425875]">
                  Si llegaste aqu&iacute; desde un enlace interno, conviene reportarlo para corregir la ruta.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}