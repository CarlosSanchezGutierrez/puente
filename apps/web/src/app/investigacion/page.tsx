import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  ClipboardList,
  ExternalLink,
  FileText,
  GraduationCap,
  HeartPulse,
  Layers3,
  Microscope,
  Network,
  School,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Investigación | Puente Impacto",
  description:
    "Investigación aplicada en Puente Impacto: reportes, prototipos, datos, documentación, salud, educación, tecnología social y proyectos con evidencia.",
  alternates: {
    canonical: "/investigacion",
  },
  openGraph: {
    title: "Investigación | Puente Impacto",
    description:
      "Proyectos de investigación aplicada, documentación técnica, prototipos y evidencia para organizaciones, escuelas y comunidades.",
    url: "https://puenteimpacto.org/investigacion",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Investigación aplicada de Puente Impacto",
      },
    ],
  },
};

const researchLines = [
  {
    title: "Salud, IA e IoT",
    description:
      "Proyectos con sensores, monitoreo, datos e inteligencia artificial aplicados a necesidades reales de salud.",
    icon: HeartPulse,
  },
  {
    title: "Educación e ingeniería",
    description:
      "Proyectos formativos, prototipos funcionales y documentación de aprendizaje basado en problemas reales.",
    icon: GraduationCap,
  },
  {
    title: "Tecnología para ONG",
    description:
      "Sistemas, datos, documentación, trazabilidad y herramientas digitales para organizaciones sociales.",
    icon: Network,
  },
  {
    title: "Datos para impacto social",
    description:
      "Indicadores, reportes, tableros y análisis aplicados a proyectos comunitarios o educativos.",
    icon: BrainCircuit,
  },
  {
    title: "Infraestructura digital",
    description:
      "Operación, conectividad, seguridad básica, continuidad y documentación técnica para organizaciones.",
    icon: ShieldCheck,
  },
  {
    title: "Sistemas críticos humanos",
    description:
      "Exploración de sistemas donde la tecnología apoya decisiones, monitoreo y procesos con consecuencias humanas.",
    icon: Stethoscope,
  },
];

const researchProcess = [
  {
    title: "Problema real",
    description:
      "Partimos de una necesidad concreta de una organización, escuela, grupo estudiantil o comunidad.",
  },
  {
    title: "Evidencia y datos",
    description:
      "Ordenamos contexto, registros, observaciones, indicadores, entrevistas, prototipos o documentación técnica.",
  },
  {
    title: "Análisis y validación",
    description:
      "Revisamos alcance, limitaciones, fuentes, ética, privacidad y utilidad real del trabajo.",
  },
  {
    title: "Salida clara",
    description:
      "El resultado puede ser reporte, guía, demo, póster, artículo, paper o material institucional.",
  },
];

const outputs = [
  {
    title: "Reporte técnico",
    description: "Documento claro con hallazgos, metodología, resultados y recomendaciones.",
    icon: FileText,
  },
  {
    title: "Póster o presentación",
    description: "Material breve para eventos académicos, ferias, aliados o instituciones.",
    icon: ClipboardList,
  },
  {
    title: "Artículo o paper",
    description: "Solo cuando el proyecto tenga evidencia, rigor, novedad y acompañamiento suficiente.",
    icon: BookOpenCheck,
  },
  {
    title: "Demo o prototipo",
    description: "Sistema, maqueta, dashboard o prueba funcional que muestre una solución concreta.",
    icon: Layers3,
  },
];

const collaborationPaths = [
  {
    title: "Organizaciones",
    description:
      "Pueden proponer problemas reales, datos, necesidades operativas o proyectos que requieran medición.",
    icon: HeartPulse,
  },
  {
    title: "Profesores",
    description:
      "Pueden apoyar con metodología, revisión, publicación, póster, artículo o validación académica.",
    icon: School,
  },
  {
    title: "Estudiantes",
    description:
      "Pueden integrarse a levantamiento de información, prototipos, documentación o investigación aplicada.",
    icon: Users,
  },
];

const selectionCriteria = [
  "Problema real y bien delimitado.",
  "Evidencia o datos que puedan recopilarse de forma responsable.",
  "Utilidad para una comunidad, organización, escuela o proceso formativo.",
  "Alcance viable para el equipo y aliados disponibles.",
  "Cuidado con privacidad, consentimiento y datos sensibles.",
  "Salida clara: reporte, prototipo, guía, póster, artículo o publicación.",
];

const publicationKeywords = [
  "Internet of Things",
  "Artificial Intelligence",
  "Neonatal Health Monitoring",
  "Engineering Education",
  "Project-based Learning",
  "Sustainable Development Goals",
  "Continuous Monitoring",
  "Functional Prototype",
];

const sdgCards = [
  {
    title: "ODS 3",
    description: "Salud y bienestar mediante monitoreo neonatal y enfoque en contextos con recursos limitados.",
    icon: HeartPulse,
  },
  {
    title: "ODS 9",
    description: "Industria, innovación e infraestructura mediante prototipos IoT, sensores y analítica con IA.",
    icon: Network,
  },
  {
    title: "ODS 10",
    description: "Reducción de desigualdades al explorar tecnología de bajo costo para entornos con menor acceso.",
    icon: School,
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
      {children}
    </p>
  );
}

function InfoCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="h-full rounded-[1.35rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <div className="mb-5 flex size-10 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]">
        <Icon className="size-5 text-[#10233f]" />
      </div>

      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#425875]">{description}</p>
    </article>
  );
}

function StepCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.35rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm">
      <div className="flex size-9 items-center justify-center rounded-full bg-[#10233f] text-sm font-semibold text-white">
        {index}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em] text-[#10233f]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#425875]">{description}</p>
    </article>
  );
}

function DetailPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-4 py-3">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#526981]">
        {label}
      </p>
      <p className="mt-2 break-words text-sm font-semibold leading-6 text-[#10233f]">
        {value}
      </p>
    </div>
  );
}

function SdgCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="grid grid-cols-[42px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4">
      <div className="flex size-10 items-center justify-center rounded-2xl bg-white/10">
        <Icon className="size-5 text-[#d7e7f6]" />
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-[#c9d8e8]">{description}</p>
      </div>
    </div>
  );
}

export default function InvestigacionPage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <SectionLabel>Investigación</SectionLabel>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
              Investigación aplicada para proyectos sociales, educativos y de salud.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875]">
              Documentamos problemas reales, prototipos, datos y resultados para convertir proyectos en reportes, demos, presentaciones o publicaciones cuando el alcance lo permite.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                href="https://doi.org/10.1109/LARS69345.2025.11273018"
                rel="noreferrer"
                target="_blank"
              >
                Ver DOI de NeoGuard
                <ExternalLink className="ml-2 size-4" />
              </a>

              <Link
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                href="/contacto"
              >
                Proponer colaboración
              </Link>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#526981]">
              Esta línea está en crecimiento. La prioridad es trabajar con evidencia, límites claros y utilidad real antes de buscar una publicación.
            </p>
          </div>

          <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
              <Microscope className="size-4 text-[#10233f]" />
              Enfoque
            </div>

            <p className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#10233f]">
              No todo proyecto tiene que ser paper. Todo proyecto serio sí puede dejar evidencia, aprendizaje y trazabilidad.
            </p>

            <div className="mt-6 grid gap-2">
              {[
                "Problemas reales antes que temas inventados.",
                "Evidencia y documentación antes que discurso.",
                "Rigor proporcional al alcance y acompañamiento disponible.",
              ].map((item) => (
                <div
                  className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-4 py-3 text-sm font-medium leading-6 text-[#425875]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-4">
            {researchProcess.map((step, index) => (
              <StepCard
                description={step.description}
                index={index + 1}
                key={step.title}
                title={step.title}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionLabel>Publicación destacada</SectionLabel>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
                NeoGuard
              </h2>
            </div>

            <p className="text-base leading-7 text-[#425875]">
              Primera publicación formal relacionada con IA, IoT, educación en ingeniería, salud neonatal y Objetivos de Desarrollo Sostenible.
            </p>
          </div>

          <article className="overflow-hidden rounded-[1.75rem] border border-[#d7dedf] bg-white/75 shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 md:p-8">
                <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
                  <BookOpenCheck className="size-4" />
                  IEEE / LARS 2025
                </div>

                <h3 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#10233f] md:text-4xl">
                  AI in Education: NeoGuard Advanced IoT and AI enabled Incubator for Neonatal Health Monitoring
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#425875]">
                  NeoGuard presenta un prototipo funcional de incubadora neonatal de bajo costo con sensores, monitoreo continuo, intervención automatizada y analítica con inteligencia artificial. El proyecto también plantea un modelo educativo de aprendizaje basado en proyectos para desarrollar competencias de IA e IoT en ingeniería.
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <DetailPill label="DOI" value="10.1109/LARS69345.2025.11273018" />
                  <DetailPill label="Conferencia" value="2025 Latin American Robotics Symposium" />
                  <DetailPill label="Ubicación" value="Monterrey, México" />
                  <DetailPill label="IEEE Xplore" value="05 de diciembre de 2025" />
                </div>

                <a
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                  href="https://doi.org/10.1109/LARS69345.2025.11273018"
                  rel="noreferrer"
                  target="_blank"
                >
                  Abrir publicación
                  <ExternalLink className="ml-2 size-4" />
                </a>
              </div>

              <div className="border-t border-[#d7dedf] bg-[#10233f] p-6 text-white lg:border-l lg:border-t-0 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7c8dc]">
                  ODS relacionados
                </p>

                <div className="mt-6 grid gap-3">
                  {sdgCards.map((sdg) => (
                    <SdgCard
                      description={sdg.description}
                      icon={sdg.icon}
                      key={sdg.title}
                      title={sdg.title}
                    />
                  ))}
                </div>

                <div className="mt-6 rounded-[1.25rem] border border-white/15 bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">Palabras clave</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {publicationKeywords.map((keyword) => (
                      <span
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-[#d7e7f6]"
                        key={keyword}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Líneas de trabajo</SectionLabel>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
                Temas que podemos desarrollar.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#425875]">
                Las líneas no son promesas de publicación. Sirven para ordenar proyectos que puedan documentarse, medirse o prototiparse.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {researchLines.map((line) => (
                <InfoCard
                  description={line.description}
                  icon={line.icon}
                  key={line.title}
                  title={line.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Salidas posibles</SectionLabel>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              No todo tiene que terminar igual.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#425875]">
              Según el alcance, los datos y el acompañamiento disponible, una iniciativa puede terminar en distintos entregables útiles para la organización, el equipo o la comunidad.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {outputs.map((output) => (
              <InfoCard
                description={output.description}
                icon={output.icon}
                key={output.title}
                title={output.title}
              />
            ))}
          </div>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.5rem] border border-[#d7dedf] bg-[#f7f4ed]/80 p-5 shadow-sm">
              <SectionLabel>Criterios</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                Antes de investigar, hay que cuidar el alcance.
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#425875]">
                Esta sección evita que la investigación se vuelva discurso. Un proyecto necesita sentido, evidencia, responsables y límites.
              </p>
            </div>

            <div className="grid gap-2">
              {selectionCriteria.map((criterion) => (
                <div
                  className="grid grid-cols-[30px_1fr] gap-3 rounded-2xl border border-[#d7dedf] bg-white/75 px-4 py-3"
                  key={criterion}
                >
                  <div className="mt-0.5 flex size-7 items-center justify-center rounded-full bg-[#10233f]">
                    <BadgeCheck className="size-4 text-white" />
                  </div>
                  <p className="text-sm leading-6 text-[#425875]">{criterion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <SectionLabel>Colaboración</SectionLabel>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              Quiénes pueden participar.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {collaborationPaths.map((path) => (
              <InfoCard
                description={path.description}
                icon={path.icon}
                key={path.title}
                title={path.title}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-[#10233f] p-6 text-white shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                Proponer colaboración
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white">
                Cuéntanos qué problema se puede documentar, medir o prototipar.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
                Revisamos si tiene sentido convertirlo en reporte, demo, póster, artículo, paper o material institucional.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-[#f3efe6]"
                href="/contacto"
              >
                Proponer colaboración
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                href="/biblioteca"
              >
                Ver biblioteca
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}