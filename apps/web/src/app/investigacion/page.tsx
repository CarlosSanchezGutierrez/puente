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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Investigacion",
  description:
    "Investigacion aplicada y ODS en Puente Impacto: tecnologia, salud, educacion, IoT, inteligencia artificial, documentacion y proyectos sociales.",
};

const researchLines = [
  {
    title: "Salud, IA e IoT",
    description:
      "Proyectos que conectan sensores, monitoreo, analitica e inteligencia artificial con necesidades reales de salud.",
    icon: HeartPulse,
  },
  {
    title: "Educacion en ingenieria",
    description:
      "Modelos de aprendizaje basado en proyectos, prototipos funcionales y desarrollo de competencias tecnicas.",
    icon: GraduationCap,
  },
  {
    title: "Tecnologia para organizaciones sociales",
    description:
      "Sistemas, datos, documentacion, trazabilidad y herramientas digitales para ONGs e iniciativas comunitarias.",
    icon: Network,
  },
  {
    title: "Datos para impacto social",
    description:
      "Medicion, indicadores, reportes, tableros y analisis aplicados a proyectos con impacto comunitario.",
    icon: BrainCircuit,
  },
  {
    title: "Infraestructura digital",
    description:
      "Soluciones de operacion, conectividad, seguridad basica, documentacion tecnica y continuidad para organizaciones.",
    icon: ShieldCheck,
  },
  {
    title: "Sistemas criticos humanos",
    description:
      "Exploracion de sistemas donde la tecnologia debe apoyar decisiones, monitoreo y procesos con consecuencias humanas.",
    icon: Stethoscope,
  },
];

const researchProcess = [
  {
    title: "Problema real",
    description:
      "Identificamos una necesidad concreta con una organizacion, escuela, grupo estudiantil o comunidad.",
  },
  {
    title: "Evidencia y datos",
    description:
      "Ordenamos contexto, registros, observaciones, indicadores, prototipos, entrevistas o documentacion tecnica.",
  },
  {
    title: "Analisis y validacion",
    description:
      "Revisamos alcance, limitaciones, fuentes, etica, privacidad y posibilidad de convertir el trabajo en conocimiento.",
  },
  {
    title: "Salida publicable",
    description:
      "El resultado puede ser reporte, poster, guia, demo, articulo academico, paper o material institucional.",
  },
];

const outputs = [
  {
    title: "Reporte tecnico",
    description: "Documento claro para explicar hallazgos, metodologia, resultados y recomendaciones.",
    icon: FileText,
  },
  {
    title: "Poster o presentacion",
    description: "Material sintetico para congresos, ferias, eventos academicos o aliados institucionales.",
    icon: ClipboardList,
  },
  {
    title: "Articulo o paper",
    description: "Cuando el proyecto tenga suficiente rigor, evidencia, novedad y acompanamiento academico.",
    icon: BookOpenCheck,
  },
  {
    title: "Demo o prototipo",
    description: "Sistema, maqueta, dashboard o prueba funcional que muestre una solucion concreta.",
    icon: Layers3,
  },
];

const collaborationPaths = [
  {
    title: "Organizaciones",
    description:
      "Pueden proponer problemas reales, datos, necesidades operativas o proyectos que requieran medicion y documentacion.",
    icon: HeartPulse,
  },
  {
    title: "Profesores y grupos de investigacion",
    description:
      "Pueden ayudar a convertir proyectos en metodologias, revisiones, articulos, posters o publicaciones con mayor rigor.",
    icon: School,
  },
  {
    title: "Estudiantes",
    description:
      "Pueden integrarse a proyectos formativos, levantamiento de informacion, prototipos, documentacion o investigacion aplicada.",
    icon: Users,
  },
];

const selectionCriteria = [
  "Problema real y bien delimitado.",
  "Posibilidad de recopilar evidencia o datos de forma responsable.",
  "Utilidad para una comunidad, organizacion o proceso formativo.",
  "Alcance viable para el equipo y aliados disponibles.",
  "Cuidado con privacidad, datos sensibles y consentimiento.",
  "Potencial de producir una salida clara: reporte, prototipo, guia, poster o publicacion.",
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
    description: "Industria, innovacion e infraestructura mediante prototipos IoT, sensores y analitica con IA.",
    icon: Network,
  },
  {
    title: "ODS 10",
    description: "Reduccion de desigualdades al explorar tecnologia de bajo costo para entornos con menor acceso.",
    icon: School,
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
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
    <Card className="h-full border-[#d7dedf] bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
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
    <Card className="h-full border-[#d7dedf] bg-white/80 shadow-sm">
      <CardContent className="p-6">
        <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-[#10233f] text-lg font-semibold text-white">
          {index}
        </div>
        <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#10233f]">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#425875]">{description}</p>
      </CardContent>
    </Card>
  );
}

function DetailPill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
        {label}
      </p>
      <p className="mt-2 break-words text-sm font-medium leading-6 text-[#10233f]">
        {value}
      </p>
    </div>
  );
}

export default function InvestigacionPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.88fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Investigaci&oacute;n aplicada y ODS
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              De proyectos reales a conocimiento aplicable.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Conectamos tecnolog&iacute;a, educaci&oacute;n, salud e impacto social mediante
              proyectos acad&eacute;micos, prototipos, documentaci&oacute;n, datos, reportes y posibles
              publicaciones cient&iacute;ficas.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-[#60738c]">
              Esta l&iacute;nea todav&iacute;a est&aacute; en etapa inicial. La primera publicaci&oacute;n
              formal es NeoGuard, un proyecto de IA, IoT, educaci&oacute;n en ingenier&iacute;a y salud neonatal.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                href="https://doi.org/10.1109/LARS69345.2025.11273018"
                rel="noreferrer"
                target="_blank"
              >
                Ver DOI de NeoGuard
                <ExternalLink className="ml-2 size-4" />
              </a>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="/contacto"
              >
                Proponer colaboraci&oacute;n
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/80 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Enfoque
                </span>
                <Microscope className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                No todo proyecto tiene que ser paper. Pero todo proyecto serio puede dejar evidencia, aprendizaje y trazabilidad.
              </p>

              <div className="mt-10 grid gap-3">
                {[
                  "Problemas reales antes que temas inventados.",
                  "Evidencia y documentacion antes que discurso.",
                  "Rigor proporcional al alcance y acompanamiento disponible.",
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
        <div className="mb-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Ruta de trabajo</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Como convertimos una iniciativa en conocimiento.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            La investigaci&oacute;n aplicada debe partir de problemas reales, evidencia verificable,
            colaboraci&oacute;n y una salida clara. El resultado puede ser acad&eacute;mico,
            t&eacute;cnico o institucional.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
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

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Publicaci&oacute;n destacada</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              NeoGuard
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Primera publicaci&oacute;n formal relacionada con IA, IoT, educaci&oacute;n en ingenier&iacute;a,
            salud neonatal y Objetivos de Desarrollo Sostenible.
          </p>
        </div>

        <Card className="overflow-hidden border-[#d7dedf] bg-white/80 shadow-sm">
          <CardContent className="p-0">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 md:p-8">
                <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[#d7dedf] bg-[#fbfaf7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
                  <BookOpenCheck className="size-4" />
                  IEEE / LARS 2025
                </div>

                <h3 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#10233f] md:text-5xl">
                  AI in Education: NeoGuard Advanced IoT and AI enabled Incubator for Neonatal Health Monitoring
                </h3>

                <p className="mt-6 leading-8 text-[#425875]">
                  NeoGuard presenta un prototipo funcional de incubadora neonatal de bajo costo
                  con sensores, monitoreo continuo, intervenci&oacute;n automatizada y anal&iacute;tica
                  con inteligencia artificial. El proyecto tambi&eacute;n plantea un modelo educativo
                  de aprendizaje basado en proyectos para desarrollar competencias de IA e IoT en ingenier&iacute;a.
                </p>

                <div className="mt-7 grid gap-3 md:grid-cols-2">
                  <DetailPill label="DOI" value="10.1109/LARS69345.2025.11273018" />
                  <DetailPill label="Conferencia" value="2025 Latin American Robotics Symposium" />
                  <DetailPill label="Ubicacion" value="Monterrey, Mexico" />
                  <DetailPill label="IEEE Xplore" value="05 de diciembre de 2025" />
                </div>

                <a
                  className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                  href="https://doi.org/10.1109/LARS69345.2025.11273018"
                  rel="noreferrer"
                  target="_blank"
                >
                  Abrir publicaci&oacute;n
                  <ExternalLink className="ml-2 size-4" />
                </a>
              </div>

              <div className="border-t border-[#d7dedf] bg-[#10233f] p-6 text-white lg:border-l lg:border-t-0 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b7c8dc]">
                  ODS relacionados
                </p>

                <div className="mt-6 grid gap-4">
                  {sdgCards.map((sdg) => (
                    <div
                      className="grid grid-cols-[44px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                      key={sdg.title}
                    >
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10">
                        <sdg.icon className="size-5 text-[#d7e7f6]" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{sdg.title}</p>
                        <p className="mt-1 text-sm leading-6 text-[#c9d8e8]">
                          {sdg.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[1.25rem] border border-white/15 bg-white/10 p-4">
                  <p className="text-sm font-semibold text-white">Palabras clave</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {publicationKeywords.map((keyword) => (
                      <span
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-[#d7e7f6]"
                        key={keyword}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10">
          <SectionLabel>L&iacute;neas de trabajo</SectionLabel>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-6xl">
            Temas que Puente puede desarrollar.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {researchLines.map((line) => (
            <InfoCard
              description={line.description}
              icon={line.icon}
              key={line.title}
              title={line.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Salidas posibles</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              No todo tiene que terminar igual.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Dependiendo del alcance, datos y acompanamiento, una iniciativa puede producir
            diferentes tipos de entregables utiles para la organizaci&oacute;n, el equipo o la comunidad.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] border border-[#d7dedf] bg-white/80 p-6 shadow-sm md:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Criterios de selecci&oacute;n</SectionLabel>
              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
                Antes de investigar, hay que cuidar el alcance.
              </h2>

              <p className="mt-6 leading-8 text-[#425875]">
                Esta secci&oacute;n ayuda a que la investigaci&oacute;n no se vea improvisada.
                Un proyecto debe tener sentido, evidencia, responsables y l&iacute;mites claros.
              </p>
            </div>

            <div className="grid gap-3">
              {selectionCriteria.map((criterion) => (
                <div
                  className="grid grid-cols-[34px_1fr] gap-3 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
                  key={criterion}
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-white">
                    <BadgeCheck className="size-4 text-[#0f7890]" />
                  </div>
                  <p className="text-sm leading-6 text-[#425875]">{criterion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10">
          <SectionLabel>Colaboraci&oacute;n</SectionLabel>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-6xl">
            Qui&eacute;nes pueden participar.
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

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-center">
            <div>
              <div className="mb-5 flex gap-3 text-[#d7e7f6]">
                <Microscope className="size-6" />
                <BookOpenCheck className="size-6" />
                <Network className="size-6" />
              </div>

              <h2 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Proponer una colaboraci&oacute;n de investigaci&oacute;n aplicada.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                Si una organizaci&oacute;n, profesor, grupo estudiantil o estudiante tiene un problema
                real que pueda documentarse, medirse o prototiparse, podemos revisar si tiene sentido
                convertirlo en una salida t&eacute;cnica o acad&eacute;mica.
              </p>
            </div>

            <div className="grid gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
                href="/contacto"
              >
                Proponer colaboraci&oacute;n
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/15"
                href="/biblioteca"
              >
                Ver biblioteca
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}