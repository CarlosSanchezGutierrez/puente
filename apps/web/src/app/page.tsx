import { ArrowRight, Braces, GraduationCap, HeartHandshake, Microscope, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteShell } from "@/components/site/site-shell";
import { siteConfig } from "@/lib/site";

const modules = [
  {
    icon: Braces,
    name: "Puente Systems",
    description:
      "Desarrollamos software, apps y herramientas abiertas para organizaciones sociales, comunidades y proyectos con propósito público.",
  },
  {
    icon: Microscope,
    name: "Puente Lab",
    description:
      "Exploramos datos, investigación aplicada, prototipos y estudios relacionados con educación, salud, seguridad y ODS.",
  },
  {
    icon: GraduationCap,
    name: "Puente Comunidad",
    description:
      "Impulsamos círculos de lectura, talleres, mentorías, cursos gratuitos, grupos de estudio y aprendizaje técnico.",
  },
  {
    icon: PlayCircle,
    name: "Puente Media",
    description:
      "Creamos historias, entrevistas, videos documentales y contenido educativo con una narrativa humana y sobria.",
  },
];

const actions = [
  { label: "Solicitar apoyo para una ONG", href: "/ongs" },
  { label: "Aplicar como voluntario", href: "/voluntariado" },
  { label: "Solicitar un libro", href: "/biblioteca" },
  { label: "Unirse a talleres y eventos", href: "/eventos" },
  { label: "Contribuir a proyectos open source", href: "/recursos" },
  { label: "Proponer una investigación o guía", href: "/recursos" },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div className="flex flex-col justify-center">
          <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/70 px-4 py-1 text-[#10233f]">
            Tecnología, comunidad e infraestructura social
          </Badge>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[#10233f] md:text-7xl">
            Construimos puentes entre tecnología, conocimiento y proyectos sociales.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#425875]">
            Puente es una plataforma de tecnología cívica para crear software social,
            fortalecer comunidades de aprendizaje, impulsar investigación aplicada y
            facilitar colaboración entre estudiantes, profesionales y organizaciones.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-[#10233f] px-6 py-6 text-white hover:bg-[#1b365f]">
              <Link href="/voluntariado">
                Quiero participar
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#c7d2df] bg-white/70 px-6 py-6 text-[#10233f] hover:bg-white"
            >
              <Link href="/ongs">Solicitar apoyo</Link>
            </Button>
          </div>
        </div>

        <Card className="border-[#d7dedf] bg-white/75 shadow-sm backdrop-blur">
          <CardContent className="p-8">
            <div className="rounded-3xl border border-[#d7dedf] bg-[#10233f] p-8 text-white">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Puente
                </span>
                <HeartHandshake className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="text-2xl font-medium leading-9">
                Un sistema bien diseñado puede facilitar y multiplicar la capacidad de ayudar.
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              {actions.slice(0, 4).map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center justify-between rounded-2xl border border-[#e1e5e8] bg-[#fbfaf7] px-4 py-3 text-sm text-[#334866]"
                >
                  <span>{action.label}</span>
                  <ArrowRight className="size-4" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#60738c]">
              Qué es Puente
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Una plataforma para conectar intención, conocimiento y ejecución.
            </h2>
          </div>

          <div className="text-lg leading-8 text-[#425875]">
            <p>
              Puente no busca ser solo una consultora, una comunidad o un laboratorio.
              Es un ecosistema modular para desarrollar herramientas, recursos,
              investigaciones y experiencias educativas que ayuden a personas y
              organizaciones a trabajar mejor.
            </p>
            <p className="mt-6">
              Empezamos con software para organizaciones sociales, biblioteca comunitaria,
              talleres, recursos gratuitos y proyectos open source. Cada iniciativa puede
              crecer, madurar y convertirse en su propio proyecto.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#60738c]">
            Áreas
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Cuatro formas de construir.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <Card key={module.name} className="border-[#d7dedf] bg-white/75 shadow-sm">
                <CardContent className="p-7">
                  <Icon className="mb-8 size-7 text-[#10233f]" />
                  <h3 className="text-2xl font-semibold tracking-[-0.02em]">{module.name}</h3>
                  <p className="mt-4 leading-7 text-[#425875]">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#60738c]">
            Principios
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Ideas que guían cómo construimos.
          </h2>
        </div>

        <div className="grid gap-4">
          {siteConfig.principles.map((principle) => (
            <Card key={principle.title} className="border-[#d7dedf] bg-white/75 shadow-sm">
              <CardContent className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:items-center">
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="text-lg leading-8 text-[#425875]">“{principle.text}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
