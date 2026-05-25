import { ArrowRight, BookOpen, Braces, GraduationCap, HeartHandshake, Microscope, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  "Solicitar apoyo para una ONG",
  "Aplicar como voluntario",
  "Solicitar un libro",
  "Unirse a talleres y eventos",
  "Contribuir a proyectos open source",
  "Proponer una investigación o guía",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#10233f]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a className="text-xl font-semibold tracking-[0.22em]" href="#">
          PUENTE
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#334866] md:flex">
          <a href="#que-es">Qué es</a>
          <a href="#areas">Áreas</a>
          <a href="#principios">Principios</a>
          <a href="#participar">Participar</a>
        </nav>

        <Button className="rounded-full bg-[#10233f] px-5 text-white hover:bg-[#1b365f]">
          Contacto
        </Button>
      </header>

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
            <Button className="rounded-full bg-[#10233f] px-6 py-6 text-white hover:bg-[#1b365f]">
              Quiero participar
              <ArrowRight className="ml-2 size-4" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-[#c7d2df] bg-white/70 px-6 py-6 text-[#10233f] hover:bg-white"
            >
              Ver proyectos
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
                <div
                  key={action}
                  className="flex items-center justify-between rounded-2xl border border-[#e1e5e8] bg-[#fbfaf7] px-4 py-3 text-sm text-[#334866]"
                >
                  <span>{action}</span>
                  <ArrowRight className="size-4" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="que-es" className="mx-auto max-w-7xl px-6 py-16">
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

      <section id="areas" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#60738c]">
              Áreas
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Cuatro formas de construir.
            </h2>
          </div>
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

      <section id="principios" className="mx-auto max-w-7xl px-6 py-16">
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

      <section id="participar" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#10233f] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#b7c8dc]">
                Participar
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                El primer paso es conectar personas con formas concretas de ayudar.
              </h2>
            </div>

            <div className="grid gap-3">
              {actions.map((action) => (
                <div
                  key={action}
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-[#edf5ff]"
                >
                  <span>{action}</span>
                  <ArrowRight className="size-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[#60738c] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Puente. Tecnología, comunidad e infraestructura social.</p>
        <div className="flex gap-5">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contacto</a>
        </div>
      </footer>
    </main>
  );
}
