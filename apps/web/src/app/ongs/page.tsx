import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ClipboardList,
  Database,
  FileText,
  HeartHandshake,
  Laptop,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { FieldSupportCompact } from "@/components/services/field-support-teaser";
import { ResearchCompactSection } from "@/components/research/research-sections";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "ONGs",
  description:
    "Apoyo tecnológico, documentación, aplicaciones web, Android, iOS, datos y procesos para organizaciones sociales.",
};

const supportAreas = [
  {
    title: "Procesos",
    description:
      "Ordenar formularios, registros, responsables, pasos, tiempos y seguimiento operativo.",
    icon: ClipboardList,
  },
  {
    title: "Datos",
    description:
      "Estructurar información para reportes, indicadores, consultas, tableros y trazabilidad.",
    icon: Database,
  },
  {
    title: "Documentación",
    description:
      "Crear guías, mapas de proceso, criterios de captura, políticas básicas y evidencia organizada.",
    icon: FileText,
  },
  {
    title: "Continuidad",
    description:
      "Diseñar herramientas que puedan mantenerse, explicarse y transferirse a nuevos equipos.",
    icon: ShieldCheck,
  },
];

const tools = [
  {
    title: "Aplicaciones web",
    description:
      "Portales, paneles internos, formularios, dashboards y sistemas accesibles desde navegador.",
    icon: Laptop,
  },
  {
    title: "Android",
    description:
      "Apps móviles para captura en campo, seguimiento, formularios, validaciones y consulta operativa.",
    icon: Smartphone,
  },
  {
    title: "iOS",
    description:
      "Aplicaciones para iPhone o iPad cuando el contexto del proyecto lo justifique.",
    icon: MonitorSmartphone,
  },
  {
    title: "Dashboards",
    description:
      "Visualización de registros, avance, indicadores, sedes, servicios, beneficiarios y actividad.",
    icon: BarChart3,
  },
];

const projectTypes = [
  "Registro de beneficiarios, pacientes, voluntarios o participantes.",
  "Sistemas de captura para brigadas, eventos o sedes.",
  "Paneles internos para seguimiento y reportes.",
  "Formularios conectados a bases de datos.",
  "Aplicaciones móviles para trabajo en campo.",
  "Documentación técnica y operativa.",
  "Métricas de impacto y reportes básicos.",
  "Apoyo audiovisual o técnico para eventos y sedes.",
];

const principles = [
  "Empezar por una necesidad concreta.",
  "Cuidar datos personales y privacidad.",
  "Diseñar para usuarios reales, no para lucir complejo.",
  "Documentar lo suficiente para que el proyecto pueda continuar.",
  "Medir lo que tenga sentido medir.",
  "Mantener un alcance viable.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function InfoCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="h-full border-[#d7dedf] bg-white/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
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

export default function OngsPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.18),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.88fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              ONGs
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Tecnología útil para organizaciones sociales.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Apoyamos a organizaciones que necesitan ordenar información, mejorar procesos,
              capturar datos en campo, generar reportes o documentar mejor su operación.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-[#60738c]">
              Cada caso se revisa con cuidado. Lo importante es entender la necesidad, el equipo
              responsable, los datos disponibles y el alcance realista del proyecto.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                href="/contacto"
              >
                Contactar
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="/servicios"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <Card className="border-[#d7dedf] bg-white/82 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#10233f]">
                  <HeartHandshake className="size-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    Cómo ayudamos
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#60738c]">
                    Partimos de necesidades operativas claras y construimos soluciones simples de explicar.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {principles.map((principle) => (
                  <div
                    className="grid grid-cols-[34px_1fr] gap-3 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
                    key={principle}
                  >
                    <div className="flex size-8 items-center justify-center rounded-full bg-white">
                      <BadgeCheck className="size-4 text-[#0f7890]" />
                    </div>
                    <p className="text-sm leading-6 text-[#425875]">{principle}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Áreas de apoyo</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Orden, datos y continuidad.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            La tecnología solo ayuda si queda conectada con el proceso real de la organización,
            las personas que la usarán y la forma en que se dará seguimiento.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {supportAreas.map((area) => (
            <InfoCard
              description={area.description}
              icon={area.icon}
              key={area.title}
              title={area.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Herramientas</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Web, Android, iOS y datos.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Dependiendo del contexto, una solución puede ser una aplicación web, una app móvil,
            un dashboard, una base de datos, documentación técnica o una combinación sencilla de varias herramientas.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool) => (
            <InfoCard
              description={tool.description}
              icon={tool.icon}
              key={tool.title}
              title={tool.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] border border-[#d7dedf] bg-white/80 p-6 shadow-sm md:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Casos comunes</SectionLabel>
              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
                Proyectos que sí suelen tener sentido.
              </h2>

              <p className="mt-6 leading-8 text-[#425875]">
                Estos ejemplos ayudan a aterrizar el tipo de apoyo que Puente puede revisar con una organización.
              </p>
            </div>

            <div className="grid gap-3">
              {projectTypes.map((item) => (
                <div
                  className="grid grid-cols-[34px_1fr] gap-3 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
                  key={item}
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-white">
                    <BadgeCheck className="size-4 text-[#0f7890]" />
                  </div>
                  <p className="text-sm leading-6 text-[#425875]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FieldSupportCompact />

      <ResearchCompactSection />

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-center">
            <div>
              <div className="mb-5 flex gap-3 text-[#d7e7f6]">
                <Users className="size-6" />
                <Database className="size-6" />
                <MonitorSmartphone className="size-6" />
              </div>

              <h2 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Revisemos si el proyecto tiene sentido.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                Podemos empezar por entender el problema, los usuarios, la información disponible
                y el alcance mínimo que podría generar utilidad real.
              </p>
            </div>

            <div className="grid gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
                href="/contacto"
              >
                Contactar
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/15"
                href="/nosotros"
              >
                Ver equipo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}