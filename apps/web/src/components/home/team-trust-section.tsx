import { ArrowRight, BadgeCheck, Building2, Code2, ExternalLink, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const teamPreview = [
  {
    initials: "CS",
    name: "Carlos S\u00e1nchez",
    area: "Sistemas digitales, datos y arquitectura",
  },
  {
    initials: "LB",
    name: "Leonel Bail\u00f3n",
    area: "Automatizaci\u00f3n, full stack y redes",
  },
  {
    initials: "LS",
    name: "Lehi Salvador",
    area: "Operaci\u00f3n, gesti\u00f3n y procesos",
  },
  {
    initials: "ML",
    name: "Maximiliano Lozano",
    area: "Ingenier\u00eda, investigaci\u00f3n e innovaci\u00f3n",
  },
];

const capabilities = [
  "Software y automatizaci\u00f3n",
  "Datos, documentaci\u00f3n y trazabilidad",
  "Operaci\u00f3n, gesti\u00f3n y procesos",
  "Ingenier\u00eda e investigaci\u00f3n aplicada",
];

export function TeamTrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm md:p-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
              Equipo y confianza
            </p>

            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Personas reales, capacidades claras y trabajo con cuidado.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#425875]">
              Puente Impacto se construye con perfiles de tecnolog&iacute;a, operaci&oacute;n,
              ingenier&iacute;a y gesti&oacute;n. El equipo tambi&eacute;n forma parte de Salva Systems,
              nuestra consultora de software, y busca aplicar esa experiencia en proyectos sociales,
              educativos y comunitarios.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                href="/nosotros"
              >
                Conocer al equipo
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="https://salvasystems.com"
                rel="noreferrer"
                target="_blank"
              >
                Ver Salva Systems
                <ExternalLink className="ml-2 size-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="border-[#d7dedf] bg-[#fbfaf7] shadow-none">
              <CardContent className="p-5 md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[#10233f]">
                    <Users className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#10233f]">
                      Equipo multidisciplinario
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#60738c]">
                      Cada integrante aporta desde una especialidad distinta.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {teamPreview.map((member) => (
                    <div
                      className="rounded-[1.25rem] border border-[#d7dedf] bg-white/75 p-4"
                      key={member.initials}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#10233f] text-xs font-semibold tracking-[0.14em] text-white">
                          {member.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-[#10233f]">{member.name}</p>
                          <p className="mt-1 text-xs leading-5 text-[#60738c]">
                            {member.area}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-5">
                <Building2 className="mb-5 size-6 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Base profesional</p>
                <p className="mt-2 text-sm leading-6 text-[#60738c]">
                  Puente se apoya en experiencia de consultor&iacute;a, desarrollo y documentaci&oacute;n.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-5">
                <GraduationCap className="mb-5 size-6 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Formaci&oacute;n t&eacute;cnica</p>
                <p className="mt-2 text-sm leading-6 text-[#60738c]">
                  El equipo combina tecnolog&iacute;a, ingenier&iacute;a, operaci&oacute;n e investigaci&oacute;n.
                </p>
              </div>
            </div>

            <Card className="border-[#d7dedf] bg-[#10233f] text-white shadow-sm">
              <CardContent className="p-5 md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10">
                    <Code2 className="size-5 text-[#d7e7f6]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">
                      Capacidades principales
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#c9d8e8]">
                      Lo importante es diagnosticar bien antes de construir.
                    </p>
                  </div>
                </div>

                <div className="grid gap-2">
                  {capabilities.map((capability) => (
                    <div
                      className="grid grid-cols-[28px_1fr] gap-3 rounded-2xl border border-white/15 bg-white/10 p-3"
                      key={capability}
                    >
                      <BadgeCheck className="mt-0.5 size-4 text-[#d7e7f6]" />
                      <p className="text-sm leading-6 text-[#c9d8e8]">{capability}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}