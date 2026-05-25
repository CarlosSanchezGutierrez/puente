import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  GraduationCap,
  School,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const points = [
  "Visitas a preparatorias durante Ago-Dic 2026.",
  "Conversaciones con universitarios, practicantes y profesionistas.",
  "Exploracion de carreras por familias vocacionales.",
  "Seguimiento mediante recursos, contactos y metricas.",
];

export function VocationalHomeSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <Card className="overflow-hidden border-[#d7dedf] bg-white/78 shadow-sm">
        <CardContent className="p-0">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-[#d7dedf] bg-[#10233f] p-6 text-white lg:border-b-0 lg:border-r md:p-8">
              <div className="mb-10 flex items-center justify-between gap-4">
                <div className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7e7f6]">
                  <CalendarDays className="size-4" />
                  Ago-Dic 2026
                </div>
                <School className="size-7 text-[#d7e7f6]" />
              </div>

              <h2 className="font-[var(--font-serif)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-6xl">
                Puente Vocacional 2026
              </h2>

              <p className="mt-5 text-base leading-8 text-[#c9d8e8] md:text-lg">
                Un programa para conectar estudiantes de preparatoria con carreras,
                universidades y profesiones mediante orientacion cercana, recursos y
                conversaciones con personas de distintas areas.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
                  href="/eventos/puente-vocacional-2026"
                >
                  Ver programa
                  <ArrowRight className="ml-2 size-4" />
                </Link>

                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/15"
                  href="/contacto"
                >
                  Proponer preparatoria
                </Link>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
                Programa destacado
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
                Orientacion vocacional con seguimiento e impacto medible.
              </h3>

              <p className="mt-5 leading-8 text-[#425875]">
                La idea es facilitar informacion, contactos y experiencias reales para que
                los alumnos puedan explorar mejor sus intereses antes de elegir una carrera
                o universidad.
              </p>

              <div className="mt-7 grid gap-3">
                {points.map((point) => (
                  <div
                    className="grid grid-cols-[34px_1fr] gap-3 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
                    key={point}
                  >
                    <div className="flex size-8 items-center justify-center rounded-full bg-white">
                      <BadgeCheck className="size-4 text-[#0f7890]" />
                    </div>
                    <p className="text-sm leading-6 text-[#425875]">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <School className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">Preparatorias</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">Meta inicial: 10</p>
                </div>

                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <Users className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">Estudiantes</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">Meta inicial: 1,000</p>
                </div>

                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <GraduationCap className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">Areas</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">6+ familias</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}