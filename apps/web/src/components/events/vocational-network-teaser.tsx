import { ArrowRight, UsersRound } from "lucide-react";
import Link from "next/link";

export function VocationalNetworkTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-white/72 p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-[#10233f] text-white">
            <UsersRound className="size-5" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Red de Orientadores Vocacionales
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
            Conoce las ediciones Monterrey y Tampico.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#425875]">
            Estamos integrando estudiantes universitarios, perfiles académicos y profesionistas organizados por ciudad, institución y familia vocacional.
          </p>
        </div>
        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
          href="/eventos/puente-vocacional-2026/red"
        >
          Ver red
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </div>
    </section>
  );
}
