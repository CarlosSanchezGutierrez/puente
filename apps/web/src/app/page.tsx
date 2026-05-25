import {
  ArrowRight,
  BookOpen,
  Braces,
  GraduationCap,
  HeartHandshake,
  Microscope,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "@/components/site/feature-card";
import { MetricCard } from "@/components/site/metric-card";
import { SectionHeading } from "@/components/site/section-heading";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const modules = [
  {
    icon: Braces,
    name: "Puente Systems",
    description:
      "Software, aplicaciones y herramientas abiertas para organizaciones sociales, comunidades y proyectos con propósito público.",
  },
  {
    icon: Microscope,
    name: "Puente Lab",
    description:
      "Investigación aplicada, prototipos, estudios orientados a ODS, datos y análisis para entender mejor problemas sociales.",
  },
  {
    icon: GraduationCap,
    name: "Puente Comunidad",
    description:
      "Libros, círculos de lectura, mentorías, talleres, pláticas y grupos de aprendizaje para estudiantes y profesionales.",
  },
  {
    icon: PlayCircle,
    name: "Puente Media",
    description:
      "Historias, entrevistas, videos documentales y contenido educativo con una narrativa humana, sobria y útil.",
  },
];

const actions = [
  { label: "Solicitar apoyo para una ONG", href: "/ongs" },
  { label: "Aplicar como voluntario", href: "/voluntariado" },
  { label: "Solicitar un libro", href: "/biblioteca" },
  { label: "Unirse a talleres y eventos", href: "/eventos" },
];

const process = [
  {
    title: "Escuchar",
    description:
      "Entender el problema, la comunidad, el contexto operativo y los límites reales antes de proponer tecnología.",
  },
  {
    title: "Diseñar",
    description:
      "Traducir necesidades en procesos, datos, pantallas, flujos y reglas claras para evitar soluciones improvisadas.",
  },
  {
    title: "Construir",
    description:
      "Desarrollar herramientas simples, mantenibles y documentadas que puedan crecer sin depender de una sola persona.",
  },
  {
    title: "Acompañar",
    description:
      "Dar seguimiento, mejorar con retroalimentación y convertir lo aprendido en recursos abiertos para más personas.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_42%),linear-gradient(180deg,#f7f4ed_0%,#f4efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div className="flex flex-col justify-center">
            <Badge className="mb-7 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Tecnología cívica, comunidad e investigación aplicada
            </Badge>

            <h1 className="max-w-5xl text-balance font-[var(--font-serif)] text-6xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] md:text-8xl">
              Infraestructura útil para proyectos sociales.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#425875]">
              Puente conecta software, aprendizaje, investigación y comunidad para
              ayudar a organizaciones, estudiantes y profesionales a construir con más
              claridad, continuidad y responsabilidad.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-[#10233f] px-6 py-6 text-white hover:bg-[#1b365f]">
                <Link href="/ongs">
                  Solicitar apoyo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#c7d2df] bg-white/75 px-6 py-6 text-[#10233f] hover:bg-white"
              >
                <Link href="/voluntariado">Quiero participar</Link>
              </Button>
            </div>
          </div>

          <Card className="border-[#d7dedf] bg-white/78 shadow-sm backdrop-blur">
            <CardContent className="p-6 md:p-8">
              <div className="rounded-[1.75rem] border border-[#d7dedf] bg-[#10233f] p-7 text-white md:p-8">
                <div className="mb-14 flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.28em] text-[#b7c8dc]">
                    Puente
                  </span>
                  <HeartHandshake className="size-6 text-[#d7e7f6]" />
                </div>

                <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em]">
                  Un sistema bien diseñado puede facilitar y multiplicar la capacidad de ayudar.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <MetricCard value="4" label="áreas iniciales: systems, lab, comunidad y media" />
                  <MetricCard value="1" label="proyecto gratuito anual para organizaciones sociales" />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {actions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-between rounded-2xl border border-[#e1e5e8] bg-[#fbfaf7] px-4 py-3 text-sm text-[#334866] transition hover:border-[#c7d2df] hover:bg-white"
                  >
                    <span>{action.label}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Qué es"
            title="Un puente entre intención, conocimiento y ejecución."
          />

          <div className="grid gap-6 text-lg leading-8 text-[#425875]">
            <p>
              Puente no busca ser solo una consultora, una comunidad o un laboratorio.
              Es una plataforma modular para crear herramientas, recursos, investigaciones
              y experiencias educativas que ayuden a trabajar mejor en problemas sociales.
            </p>
            <p>
              Empezamos con software para organizaciones sociales, biblioteca comunitaria,
              talleres, recursos gratuitos, proyectos open source e investigación aplicada.
              Cada iniciativa puede crecer y convertirse en su propio proyecto.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Áreas"
          title="Cuatro líneas de trabajo."
          description="La estructura permite que Puente crezca sin mezclar todo en una sola idea: software, investigación, comunidad y narrativa."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <FeatureCard
              key={module.name}
              icon={module.icon}
              title={module.name}
              description={module.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#10233f] p-8 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b7c8dc]">
                Cómo trabajamos
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
                Menos ruido. Más proceso.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                La tecnología tiene más valor cuando nace de entender el problema,
                ordenar el proceso y construir algo que pueda sostenerse.
              </p>
            </div>

            <div className="grid gap-4">
              {process.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-[1.5rem] border border-white/15 bg-white/10 p-5 md:grid-cols-[72px_1fr]"
                >
                  <div className="text-3xl font-semibold text-[#d7e7f6]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-[#c9d8e8]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Principios"
          title="Ideas que guían cómo construimos."
          description="No son frases decorativas. Funcionan como criterio para decidir qué proyectos aceptar, cómo diseñarlos y cómo hablar de ellos."
        />

        <div className="mt-10 grid gap-4">
          {siteConfig.principles.map((principle) => (
            <Card key={principle.title} className="border-[#d7dedf] bg-white/75 shadow-sm">
              <CardContent className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:items-center">
                <h3 className="text-lg font-semibold text-[#10233f]">{principle.title}</h3>
                <p className="text-lg leading-8 text-[#425875]">“{principle.text}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-8 shadow-sm md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <div className="mb-5 flex gap-3 text-[#10233f]">
                <ShieldCheck className="size-6" />
                <BookOpen className="size-6" />
                <Sparkles className="size-6" />
              </div>
              <h2 className="font-[var(--font-serif)] text-5xl font-semibold tracking-[-0.06em] text-[#10233f] md:text-7xl">
                Construir también es formar comunidad.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#425875]">
                Puente combina software, libros, talleres, guías, voluntariado y proyectos
                abiertos para que más personas puedan aprender y participar con claridad.
              </p>
            </div>

            <div className="grid gap-3">
              <Button asChild className="rounded-full bg-[#10233f] py-6 text-white hover:bg-[#1b365f]">
                <Link href="/contacto">
                  Contactar a Puente
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#c7d2df] bg-white/70 py-6 text-[#10233f] hover:bg-white"
              >
                <Link href="/recursos">Ver recursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}