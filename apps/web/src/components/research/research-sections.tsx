import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  HeartPulse,
  Microscope,
  Network,
  School,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const points = [
  "Proyectos academicos con impacto social.",
  "Publicaciones, prototipos y documentacion tecnica.",
  "Conexion entre estudiantes, profesores y organizaciones.",
  "Alineacion con salud, educacion, innovacion e infraestructura social.",
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
              Investigaci&oacute;n aplicada y ODS.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-[#425875]">
              Conectamos tecnolog&iacute;a, educaci&oacute;n, salud e impacto social mediante
              proyectos acad&eacute;micos, documentaci&oacute;n t&eacute;cnica y publicaciones
              cient&iacute;ficas desarrolladas con estudiantes, profesores y aliados.
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
                Convertir proyectos en conocimiento aplicable.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#c9d8e8] md:text-lg">
                Puente busca documentar, medir y comunicar proyectos que conectan tecnolog&iacute;a,
                educaci&oacute;n, salud, infraestructura e impacto social.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
                  href="/investigacion"
                >
                  Ver l&iacute;neas de investigaci&oacute;n
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
                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <HeartPulse className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">Salud</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">ODS 3</p>
                </div>

                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <Network className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">Innovaci&oacute;n</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">ODS 9</p>
                </div>

                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <School className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">Educaci&oacute;n</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">Formaci&oacute;n aplicada</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}