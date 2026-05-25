import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  School,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { label: "Preparatorias", value: "Meta 10" },
  { label: "Estudiantes", value: "Meta 1,000" },
  { label: "Familias vocacionales", value: "6+" },
  { label: "Periodo", value: "Ago-Dic 2026" },
];

export function VocationalEventFeature() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-6 pt-10 md:pt-14">
      <Card className="overflow-hidden border-[#d7dedf] bg-white/78 shadow-sm">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 md:p-9">
              <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[#c7d2df] bg-[#fbfaf7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#10233f]">
                <CalendarDays className="size-4" />
                Programa Agosto-Diciembre 2026
              </div>

              <h2 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
                Puente Vocacional 2026
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#425875]">
                Un programa para acercar estudiantes de preparatoria a carreras, universidades
                y profesiones mediante conversaciones con universitarios, practicantes,
                profesionistas, profesores, directivos y orientadores vocacionales.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                  href="/eventos/puente-vocacional-2026"
                >
                  Ver programa
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

            <div className="border-t border-[#d7dedf] bg-[#10233f] p-6 text-white lg:border-l lg:border-t-0 md:p-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7c8dc]">
                    Impacto medible
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#c9d8e8]">
                    El programa inicia con metas y despues reportara avances reales.
                  </p>
                </div>
                <School className="size-8 text-[#d7e7f6]" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                    key={metric.label}
                  >
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#c9d8e8]">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  "Orientacion por familias vocacionales.",
                  "Contacto con perfiles universitarios y profesionales.",
                  "Recursos para seguir explorando despues de la platica.",
                ].map((item) => (
                  <div className="grid grid-cols-[28px_1fr] gap-3" key={item}>
                    <BadgeCheck className="mt-1 size-4 text-[#d7e7f6]" />
                    <p className="text-sm leading-6 text-[#c9d8e8]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}