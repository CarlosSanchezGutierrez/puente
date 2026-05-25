import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Laptop,
  Library,
  MapPinned,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { listPublishedResources } from "@/lib/queries/public-content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Recursos",
  description: "Guias, materiales abiertos, plantillas y recursos educativos para estudiantes, comunidad y organizaciones sociales.",
};

const resourceAreas = [
  {
    title: "Vida universitaria",
    description:
      "Guias practicas para estudiantes: vivienda, organizacion, carrera profesional y decisiones cotidianas.",
    icon: GraduationCap,
  },
  {
    title: "Carrera profesional",
    description:
      "CV, LinkedIn, entrevistas, portafolio, practicas profesionales y preparacion para oportunidades.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Tecnologia y proyectos",
    description:
      "Materiales para construir mejor: software, datos, producto, documentacion y herramientas utiles.",
    icon: Laptop,
  },
  {
    title: "Comunidad y causa social",
    description:
      "Recursos para voluntariado, organizaciones sociales, eventos y proyectos con impacto comunitario.",
    icon: Library,
  },
];

const plannedResources = [
  {
    title: "Guia de renta en Zona Tec",
    description:
      "Criterios practicos para comparar departamentos, zonas, costos, seguridad y decisiones antes de rentar.",
    icon: MapPinned,
  },
  {
    title: "Guia de CV y LinkedIn",
    description:
      "Material gratuito para explicar experiencia, proyectos, habilidades y trayectoria de forma clara.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Kit para proyectos sociales",
    description:
      "Plantillas basicas para diagnosticar problemas, definir alcance, documentar procesos y medir resultados.",
    icon: FileText,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function AreaCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="border-[#d7dedf] bg-white/75 shadow-sm">
      <CardContent className="p-6">
        <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
          <Icon className="size-6 text-[#10233f]" />
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-[#425875]">{description}</p>
      </CardContent>
    </Card>
  );
}

export default async function RecursosPage() {
  const resources = await listPublishedResources();

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.85fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Recursos gratuitos
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Gu&iacute;as y materiales abiertos.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Materiales pr&aacute;cticos para estudiar, trabajar mejor, tomar decisiones, construir
              proyectos y participar en iniciativas comunitarias con m&aacute;s claridad.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Criterio editorial
                </span>
                <Sparkles className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                Un recurso de Puente debe ahorrar tiempo, aclarar una decisi&oacute;n o convertir experiencia en conocimiento reutilizable.
              </p>

              <div className="mt-10 grid gap-3">
                <div className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4">
                  <p className="font-semibold">Formato</p>
                  <p className="mt-2 leading-7 text-[#c9d8e8]">
                    Gu&iacute;as breves, plantillas, listas, documentos, videos o materiales de apoyo.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4">
                  <p className="font-semibold">Objetivo</p>
                  <p className="mt-2 leading-7 text-[#c9d8e8]">
                    Que alguien pueda entender mejor un problema y actuar con menos fricci&oacute;n.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>&Aacute;reas</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Recursos para aprender y avanzar.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            La biblioteca guarda libros. Esta secci&oacute;n guarda materiales creados o curados
            para resolver dudas concretas, preparar oportunidades y acompa&ntilde;ar procesos.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {resourceAreas.map((area) => (
            <AreaCard
              description={area.description}
              icon={area.icon}
              key={area.title}
              title={area.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b7c8dc] md:text-sm">
                En preparaci&oacute;n
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-white md:text-6xl">
                Recursos prioritarios.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#c9d8e8]">
              Estos materiales pueden publicarse como gu&iacute;as, videos, documentos o plantillas descargables.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {plannedResources.map((resource) => (
              <div
                className="rounded-[1.35rem] border border-white/15 bg-white/10 p-5"
                key={resource.title}
              >
                <resource.icon className="mb-8 size-7 text-[#d7e7f6]" />
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{resource.title}</h3>
                <p className="mt-3 leading-7 text-[#c9d8e8]">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Biblioteca de recursos</SectionLabel>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-6xl">
              Materiales publicados.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#60738c]">
            Los recursos publicados aparecen aqu&iacute; cuando est&aacute;n listos para compartirse.
          </p>
        </div>

        {resources.length === 0 ? (
          <Card className="border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="grid gap-4 p-7 md:grid-cols-[56px_1fr] md:items-center">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                <BookOpen className="size-6 text-[#10233f]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                  Todav&iacute;a no hay recursos publicados.
                </h3>
                <p className="mt-2 leading-7 text-[#425875]">
                  Cuando existan gu&iacute;as, plantillas o documentos abiertos, aparecer&aacute;n aqu&iacute;.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {resources.map((resource) => {
              const href = resource.externalUrl ?? resource.contentUrl;

              return (
                <Card key={resource.id} className="border-[#d7dedf] bg-white/78 shadow-sm">
                  <CardContent className="p-6 md:p-7">
                    <FileText className="mb-8 size-7 text-[#10233f]" />
                    <Badge variant="outline">{resource.category}</Badge>

                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                      {resource.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#425875]">
                      {resource.description ?? "Descripci&oacute;n pendiente."}
                    </p>

                    {href ? (
                      <a
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                        href={href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Ver recurso
                        <ArrowRight className="ml-2 size-4" />
                      </a>
                    ) : (
                      <p className="mt-6 text-sm text-[#60738c]">
                        Recurso en preparaci&oacute;n.
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </SiteShell>
  );
}