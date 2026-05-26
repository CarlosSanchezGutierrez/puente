import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  HeartHandshake,
  Microscope,
  RadioTower,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    title: "ONGs",
    description:
      "Sistemas, registros, reportes, documentación y seguimiento para organizaciones sociales.",
    href: "/ongs",
    icon: HeartHandshake,
  },
  {
    title: "Programas",
    description:
      "Orientación vocacional, eventos, talleres y espacios de conexión entre estudiantes y comunidades.",
    href: "/eventos",
    icon: GraduationCap,
  },
  {
    title: "Servicios",
    description:
      "Cobertura audiovisual, clínica técnica, conectividad, WiFi, red local y documentación operativa.",
    href: "/servicios",
    icon: RadioTower,
  },
  {
    title: "Investigación",
    description:
      "Proyectos reales convertidos en evidencia, reportes, prototipos y conocimiento aplicable.",
    href: "/investigacion",
    icon: Microscope,
  },
];

export function WhatWeDoSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="mb-10 grid gap-6 md:grid-cols-[0.82fr_1.18fr] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
            Qué hacemos
          </p>
          <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
            Cuatro líneas claras de trabajo.
          </h2>
        </div>

        <p className="text-lg leading-8 text-[#425875]">
          Puente ordena proyectos sociales, educativos y técnicos en líneas concretas:
          organizaciones, programas, servicios de campo e investigación aplicada.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {areas.map((area) => (
          <Card
            className="h-full border-[#d7dedf] bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            key={area.title}
          >
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                <area.icon className="size-6 text-[#10233f]" />
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                {area.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-[#425875]">
                {area.description}
              </p>

              <Link
                className="mt-7 inline-flex w-fit items-center text-sm font-semibold text-[#10233f] underline-offset-4 hover:underline"
                href={area.href}
              >
                Ver más
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-[#d7dedf] bg-[#fbfaf7] p-5">
        <div className="grid gap-4 md:grid-cols-[44px_1fr] md:items-start">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-white">
            <BookOpenCheck className="size-5 text-[#10233f]" />
          </div>
          <p className="text-sm leading-7 text-[#60738c]">
            La prioridad no es aparentar tamaño, sino construir proyectos útiles,
            documentados y medibles, con alcance claro y mejora continua.
          </p>
        </div>
      </div>
    </section>
  );
}