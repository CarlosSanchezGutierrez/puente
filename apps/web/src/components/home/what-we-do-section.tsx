import { ArrowRight } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "ONGs",
    description:
      "Sistemas, registros, reportes, aplicaciones web, Android, iOS y documentacion para organizaciones sociales.",
    href: "/ongs",
  },
  {
    number: "02",
    title: "Programas",
    description:
      "Orientacion vocacional, eventos, talleres y espacios de conexion entre estudiantes, escuelas y comunidades.",
    href: "/eventos",
  },
  {
    number: "03",
    title: "Servicios",
    description:
      "Cobertura audiovisual, revision tecnica basica, conectividad, WiFi, red local, camaras y documentacion operativa.",
    href: "/servicios",
  },
  {
    number: "04",
    title: "Investigacion",
    description:
      "Proyectos reales convertidos en evidencia, reportes, prototipos y conocimiento aplicable.",
    href: "/investigacion",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid gap-8 border-y border-[#d7dedf] py-10 md:grid-cols-[0.72fr_1.28fr] md:py-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Que hacemos
          </p>
          <h2 className="mt-4 max-w-xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
            Lineas de trabajo claras.
          </h2>
        </div>

        <div className="grid gap-0">
          {areas.map((area) => (
            <Link
              className="group grid gap-4 border-t border-[#d7dedf] py-6 first:border-t-0 md:grid-cols-[72px_1fr_120px] md:items-start"
              href={area.href}
              key={area.title}
            >
              <span className="text-sm font-semibold text-[#526981]">
                {area.number}
              </span>

              <span>
                <span className="block text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                  {area.title}
                </span>
                <span className="mt-3 block max-w-2xl text-sm leading-7 text-[#425875]">
                  {area.description}
                </span>
              </span>

              <span className="inline-flex items-center text-sm font-semibold text-[#10233f] md:justify-end">
                Ver
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
