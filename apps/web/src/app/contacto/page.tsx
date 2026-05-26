import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  HeartHandshake,
  Mail,
  Microscope,
  RadioTower,
} from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contacto",
  description:
    "Contacto de Puente Impacto para organizaciones, programas, servicios de campo e investigación aplicada.",
};

const contactPaths = [
  {
    title: "ONGs",
    description:
      "Para organizaciones que quieren ordenar procesos, registros, reportes o herramientas digitales.",
    href: "/ongs",
    cta: "Ver enfoque",
    icon: HeartHandshake,
  },
  {
    title: "Programas",
    description:
      "Para escuelas, estudiantes o aliados interesados en orientación vocacional, talleres o eventos.",
    href: "/eventos/puente-vocacional-2026/registro",
    cta: "Registrar interés",
    icon: GraduationCap,
  },
  {
    title: "Servicios",
    description:
      "Para solicitar apoyo audiovisual, revisión técnica básica, documentación o apoyo de campo.",
    href: "/servicios/solicitud",
    cta: "Solicitar servicio",
    icon: RadioTower,
  },
  {
    title: "Investigación",
    description:
      "Para explorar reportes, prototipos, evidencia, colaboración académica o investigación aplicada.",
    href: "/investigacion",
    cta: "Ver líneas",
    icon: Microscope,
  },
];

export default function ContactoPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.18),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Contacto
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Cuéntanos qué necesitas.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Podemos revisar el contexto de una organización, escuela, evento o proyecto para entender
              si Puente puede apoyar con tecnología, documentación, servicios de campo o investigación aplicada.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-[#60738c]">
              La idea es empezar con una conversación clara: qué problema existe, quién lo atiende,
              qué alcance sería razonable y qué siguiente paso tiene sentido.
            </p>

            <a
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
              href="mailto:carlossg132004@gmail.com?subject=Puente Impacto - Contacto"
            >
              Escribir por correo
              <Mail className="ml-2 size-4" />
            </a>
          </div>

          <Card className="border-[#d7dedf] bg-white/82 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#10233f]">
                  <BookOpenCheck className="size-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    Rutas de contacto
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#60738c]">
                    Elige la ruta más cercana a lo que necesitas. Si no encaja perfecto, usa correo.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {contactPaths.map((path) => (
                  <Link
                    className="grid gap-4 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4 transition hover:bg-white md:grid-cols-[44px_1fr_auto]"
                    href={path.href}
                    key={path.title}
                  >
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-white">
                      <path.icon className="size-5 text-[#10233f]" />
                    </div>

                    <div>
                      <p className="font-semibold text-[#10233f]">{path.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#60738c]">{path.description}</p>
                    </div>

                    <div className="flex items-center text-sm font-semibold text-[#10233f]">
                      {path.cta}
                      <ArrowRight className="ml-2 size-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[2rem] border border-[#d7dedf] bg-white/80 p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c]">
                Antes de empezar
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
                Revisamos alcance, responsables y necesidad real.
              </h2>
            </div>

            <p className="leading-8 text-[#425875]">
              Para cuidar el tiempo de todos, buscamos entender primero el problema, la disponibilidad
              para colaborar, la información existente y el tipo de apoyo que realmente sería útil.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}