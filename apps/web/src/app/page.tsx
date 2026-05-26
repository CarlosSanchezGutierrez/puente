import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AppDownloadSection } from "@/components/home/app-download-section";
import { HomePrinciplesSection } from "@/components/home/home-principles-section";
import { WhatWeDoSection } from "@/components/home/what-we-do-section";
import { SiteShell } from "@/components/site/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
              Puente Impacto
            </p>
            <h1 className="mt-5 max-w-4xl font-[var(--font-serif)] text-6xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#10233f] md:text-8xl">
              Tecnologia social con alcance claro.
            </h1>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Apoyamos proyectos sociales, educativos y tecnicos con herramientas digitales, documentacion, servicios de campo e investigacion aplicada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                href="/contacto"
              >
                Solicitar
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="/descargar"
              >
                Descargar app
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDoSection />

      <HomePrinciplesSection />

      <AppDownloadSection />

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-[1.5rem] border border-[#d7dedf] bg-[#10233f] p-6 text-white md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7c8dc]">
                Contacto
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
                Revisemos si el proyecto tiene sentido.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c9d8e8]">
                Podemos empezar por entender la necesidad, el responsable, la informacion disponible y el siguiente paso razonable.
              </p>
            </div>

            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
              href="/contacto"
            >
              Contactar
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
