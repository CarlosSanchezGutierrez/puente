import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  HeartPulse,
  Layers3,
  Microscope,
  Network,
  School,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const points = [
  "Proyectos academicos con problemas reales.",
  "Evidencia, documentacion, datos y prototipos.",
  "Posibles salidas: reportes, posters, articulos, demos o guias.",
  "Alineacion con salud, educacion, innovacion e impacto social.",
];

const miniAreas = [
  {
    title: "Salud",
    detail: "ODS 3",
    icon: HeartPulse,
  },
  {
    title: "Innovacion",
    detail: "ODS 9",
    icon: Network,
  },
  {
    title: "Educacion",
    detail: "Aprendizaje aplicado",
    icon: School,
  },
];

export function ResearchCompactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="rounded-[2rem] border border-[#d7dedf] bg-white/80 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
              Investigaci&oacute;n
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              De proyectos reales a conocimiento aplicable.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-[#425875]">
              Puente busca documentar proyectos, ordenar evidencia y convertir iniciativas
              sociales, educativas o tecnol&oacute;gicas en aprendizajes, reportes y posibles
              publicaciones acad&eacute;micas.
            </p>

            <Link
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
              href="/investigacion"
            >
              Ver investigaci&oacute;n
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResearchFeatureSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <Card className="overflow-hidden border-[#d7dedf] bg-white/80 shadow-sm">
        <CardContent className="p-0">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#d7dedf] bg-[#10233f] p-6 text-white lg:border-b-0 lg:border-r md:p-8">
              <div className="mb-10 flex items-center justify-between gap-4">
                <div className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7e7f6]">
                  <Microscope className="size-4" />
                  Investigaci&oacute;n aplicada
                </div>
                <BookOpenCheck className="size-7 text-[#d7e7f6]" />
              </div>

              <h2 className="font-[var(--font-serif)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-6xl">
                Documentar, medir y aprender de lo que se construye.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#c9d8e8] md:text-lg">
                La investigaci&oacute;n en Puente no se presenta como algo aislado: nace de proyectos,
                prototipos, datos, comunidades y problemas concretos.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
                  href="/investigacion"
                >
                  Ver l&iacute;neas de trabajo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 p-6 md:p-8">
              {points.map((point) => (
                <div
                  className="grid grid-cols-[36px_1fr] gap-4 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
                  key={point}
                >
                  <div className="flex size-9 items-center justify-center rounded-full bg-white">
                    <BadgeCheck className="size-5 text-[#0f7890]" />
                  </div>
                  <p className="leading-7 text-[#425875]">{point}</p>
                </div>
              ))}

              <div className="grid gap-3 sm:grid-cols-3">
                {miniAreas.map((area) => (
                  <div
                    className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4"
                    key={area.title}
                  >
                    <area.icon className="mb-4 size-5 text-[#10233f]" />
                    <p className="font-semibold text-[#10233f]">{area.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#60738c]">{area.detail}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.25rem] border border-[#d7dedf] bg-white/75 p-4">
                <div className="mb-3 flex items-center gap-2 text-[#10233f]">
                  <Layers3 className="size-5" />
                  <p className="font-semibold">Salida flexible</p>
                </div>
                <p className="text-sm leading-6 text-[#60738c]">
                  No todo proyecto necesita terminar en paper. Tambi&eacute;n puede producir reportes,
                  gu&iacute;as, datasets, posters, tableros o documentaci&oacute;n t&eacute;cnica.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-[#d7dedf] bg-white/75 p-4">
                <div className="mb-3 flex items-center gap-2 text-[#10233f]">
                  <BrainCircuit className="size-5" />
                  <p className="font-semibold">Primera referencia formal</p>
                </div>
                <p className="text-sm leading-6 text-[#60738c]">
                  NeoGuard: IA, IoT, educaci&oacute;n en ingenier&iacute;a y monitoreo neonatal.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}