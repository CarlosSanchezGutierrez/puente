import { VocationalNetworkTeaser } from "@/components/events/vocational-network-teaser";
import { ContextDocSection } from "@/components/docs/context-doc-section";
import { FAQLinkSection } from "@/components/site/faq-link-section";
import { BookingSection } from "@/components/site/booking-section";
import { VocationalInterestSection } from "@/components/events/vocational-interest-section";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Handshake,
  HeartHandshake,
  LineChart,
  School,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Puente Vocacional 2026",
  description:
    "Programa de orientacion vocacional para conectar estudiantes de preparatoria con carreras, universidades, profesionistas en formacion y mentores.",
};

const areas = [
  {
    title: "Salud y bienestar",
    description:
      "Medicina, odontologia, nutricion, psicologia, fisioterapia, enfermeria, salud publica e investigacion biomedica.",
    icon: Stethoscope,
  },
  {
    title: "Ingenieria y tecnologia",
    description:
      "Computacion, ciencia de datos, software, mecatronica, industrial, civil, electronica, robotica, infraestructura y ciberseguridad.",
    icon: Building2,
  },
  {
    title: "Arquitectura, diseno y ciudad",
    description:
      "Arquitectura, urbanismo, diseno industrial, diseno grafico, interiores, construccion y sostenibilidad.",
    icon: School,
  },
  {
    title: "Negocios y organizaciones",
    description:
      "Negocios internacionales, contabilidad, administracion, finanzas, emprendimiento, logistica, recursos humanos y consultoria.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Humanidades, comunicacion y artes",
    description:
      "Derecho, educacion, comunicacion, teatro, musica, literatura, arte, produccion audiovisual y relaciones internacionales.",
    icon: BookOpen,
  },
  {
    title: "Impacto social e interdisciplinario",
    description:
      "ONGs, voluntariado, tecnologia social, investigacion aplicada, proyectos comunitarios y consultoria con enfoque formativo.",
    icon: HeartHandshake,
  },
];

const steps = [
  {
    title: "Visitamos preparatorias",
    description:
      "Coordinamos sesiones con escuelas interesadas en fortalecer la orientacion vocacional de sus estudiantes.",
  },
  {
    title: "Reunimos perfiles diversos",
    description:
      "Invitamos estudiantes universitarios, practicantes, profesionistas, docentes, directivos y orientadores.",
  },
  {
    title: "Conectamos intereses con carreras",
    description:
      "Los alumnos exploran areas profesionales desde conversaciones cercanas, realistas y utiles.",
  },
  {
    title: "Damos seguimiento",
    description:
      "Compartimos materiales, contactos y recursos para que la orientacion continue despues de la sesion.",
  },
];

const metrics = [
  { label: "Preparatorias visitadas", value: "0", note: "Meta inicial: 10 durante Ago-Dic 2026." },
  { label: "Estudiantes alcanzados", value: "0", note: "Meta inicial: 1,000 estudiantes." },
  { label: "Areas vocacionales", value: "6+", note: "Salud, ingenieria, diseno, negocios, humanidades e impacto social." },
  { label: "Perfiles participantes", value: "0", note: "Universitarios, practicantes, profesionistas, docentes y orientadores." },
  { label: "Conexiones vocacionales", value: "0", note: "Alumnos conectados con perfiles cercanos a su carrera de interes." },
  { label: "Recursos compartidos", value: "0", note: "Materiales, guias, contactos y rutas de exploracion." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function AreaCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="h-full border-[#d7dedf] bg-white/78 shadow-sm">
      <CardContent className="p-6">
        <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
          <Icon className="size-6 text-[#10233f]" />
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
          {title}
        </h3>
        <p className="mt-4 leading-7 text-[#425875]">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function PuenteVocacionalPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.88fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Programa Agosto-Diciembre 2026
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Puente Vocacional 2026
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Visitaremos preparatorias para conectar estudiantes con carreras, universidades
              y profesiones mediante conversaciones con personas que ya estan recorriendo
              distintas rutas academicas y profesionales.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#60738c]">
              El programa busca facilitar informacion, contactos y recursos para que los alumnos
              puedan explorar mejor sus intereses vocacionales.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                href="/eventos/puente-vocacional-2026/registro"
              >
                Registrar interes
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="/eventos/puente-vocacional-2026/registro"
              >
                Registrar interes
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  En preparacion
                </span>
                <CalendarDays className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                Una red de orientacion vocacional basada en experiencia real, contacto humano y seguimiento medible.
              </p>

              <div className="mt-10 grid gap-3">
                {[
                  "Estudiantes de preparatoria con dudas sobre carrera y universidad.",
                  "Universitarios, practicantes y profesionistas compartiendo experiencia.",
                  "Profesores, directivos y orientadores ayudando a estructurar el proceso.",
                ].map((item) => (
                  <div
                    className="grid grid-cols-[36px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                    key={item}
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/10">
                      <BadgeCheck className="size-5 text-[#d7e7f6]" />
                    </div>
                    <p className="leading-7 text-[#c9d8e8]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <SectionLabel>Como funciona</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Orientacion clara, cercana y medible.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            La idea es crear espacios de conversacion, recursos y seguimiento para que cada estudiante
            pueda explorar posibilidades con mayor claridad.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <Card className="border-[#d7dedf] bg-white/78 shadow-sm" key={step.title}>
              <CardContent className="p-6">
                <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-[#10233f] text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#10233f]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#425875]">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Familias vocacionales</SectionLabel>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-6xl">
              Carreras agrupadas por intereses.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#60738c]">
            La lista puede crecer conforme se sumen estudiantes, profesionistas, profesores y escuelas participantes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => (
            <AreaCard
              description={area.description}
              icon={area.icon}
              key={area.title}
              title={area.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b7c8dc] md:text-sm">
                Medicion de impacto
              </p>

              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Seguimiento desde el primer semestre del programa.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                El programa iniciara con metas y despues reportara avances reales: escuelas visitadas,
                estudiantes alcanzados, areas representadas, conexiones vocacionales y recursos compartidos.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                  key={metric.label}
                >
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 font-semibold text-[#d7e7f6]">{metric.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#c9d8e8]">{metric.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-6 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-center">
            <div>
              <div className="mb-5 flex gap-3 text-[#10233f]">
                <Handshake className="size-6" />
                <LineChart className="size-6" />
                <Users className="size-6" />
              </div>

              <h2 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
                Una puerta de entrada a comunidad y proyectos.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#425875]">
                Alumnos universitarios de primeros semestres tambien podran acercarse a Puente
                o a iniciativas formativas relacionadas con Salva Systems, especialmente si buscan
                aprender haciendo en proyectos sociales, documentacion, tecnologia, eventos o investigacion aplicada.
              </p>
            </div>

            <div className="grid gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                href="/eventos/puente-vocacional-2026/registro"
              >
                Registrar interes
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="/eventos/puente-vocacional-2026/registro"
              >
                Registrar interes
              </Link>
            </div>
          </div>
        </div>
      </section>
          <VocationalInterestSection />

          <BookingSection title="Agenda una reunion sobre Puente Vocacional 2026." description="Para preparatorias, mentores, profesores, orientadores o aliados interesados en participar o conocer el programa." />
          <FAQLinkSection />
          <VocationalNetworkTeaser />
    </SiteShell>
  );
}