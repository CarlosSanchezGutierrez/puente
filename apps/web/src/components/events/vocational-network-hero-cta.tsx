import { ArrowRight, UsersRound } from "lucide-react";
import Link from "next/link";

type VocationalNetworkHeroCtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function VocationalNetworkHeroCta({
  eyebrow = "Red de Orientadores Vocacionales",
  title = "Conoce los perfiles de Monterrey y Tampico.",
  description = "Estudiantes universitarios, perfiles académicos y profesionistas organizados por ciudad, institución y familia vocacional para apoyar a estudiantes de preparatoria.",
}: VocationalNetworkHeroCtaProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
      <div className="grid gap-6 rounded-[1.75rem] border border-[#d7dedf] bg-[#10233f] p-6 text-white shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white">
            <UsersRound className="size-5" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9cce0]">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#dbe7f3]">
            {description}
          </p>
        </div>
        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#10233f] transition hover:bg-[#f7f4ed]"
          href="/eventos/puente-vocacional-2026/red"
        >
          Ver Red de Orientadores Vocacionales
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </div>
    </section>
  );
}
