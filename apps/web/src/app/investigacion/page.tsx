import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Microscope,
  Network,
  School,
  ShieldCheck,
  Stethoscope,
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
    "Investigacion aplicada y ODS en Puente Impacto: tecnologia, salud, educacion, IoT, inteligencia artificial y proyectos sociales documentados.",
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
    <Card className="h-full border-[#d7dedf] bg-white/80 shadow-sm">
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

export default function InvestigacionPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.88fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Investigaci&oacute;n aplicada y ODS
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Proyectos que tambi&eacute;n generan conocimiento.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Conectamos tecnolog&iacute;a, educaci&oacute;n, salud e impacto social mediante
              proyectos acad&eacute;micos, prototipos, publicaciones cient&iacute;ficas y colaboraci&oacute;n
              con estudiantes, profesores, organizaciones y grupos de investigaci&oacute;n.
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
                No solo ejecutar proyectos: documentarlos, medirlos y convertirlos en aprendizaje aplicable.
              </p>

              <div className="mt-10 grid gap-3">
                {[
                  "Investigacion aplicada vinculada con necesidades reales.",
                  "Prototipos, sistemas y evidencia tecnica documentada.",
                  "Colaboracion con estudiantes, profesores y organizaciones.",
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
            <SectionLabel>Publicaci&oacute;n destacada</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              NeoGuard
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Nuestra primera publicaci&oacute;n formal se relaciona con IA, IoT, educaci&oacute;n
            en ingenier&iacute;a, salud neonatal y Objetivos de Desarrollo Sostenible.
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
                  <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
                      DOI
                    </p>
                    <p className="mt-2 break-words text-sm font-medium leading-6 text-[#10233f]">
                      10.1109/LARS69345.2025.11273018
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
                      Conferencia
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#10233f]">
                      2025 Latin American Robotics Symposium
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
                      Ubicaci&oacute;n
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#10233f]">
                      Monterrey, M&eacute;xico
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
                      Fecha en IEEE Xplore
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#10233f]">
                      05 de diciembre de 2025
                    </p>
                  </div>
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
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-center">
            <div>
              <div className="mb-5 flex gap-3 text-[#d7e7f6]">
                <Microscope className="size-6" />
                <BookOpenCheck className="size-6" />
                <Network className="size-6" />
              </div>

              <h2 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Colaborar en investigaci&oacute;n aplicada.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                Buscamos conectar estudiantes, profesores, grupos de investigaci&oacute;n,
                organizaciones y proyectos con problemas reales que puedan documentarse,
                medirse y convertirse en conocimiento aplicable.
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