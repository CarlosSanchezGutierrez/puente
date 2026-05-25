import {
  ArrowRight,
  ClipboardCheck,
  Database,
  FileText,
  HeartHandshake,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NgoRequestForm } from "@/components/forms/ngo-request-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "ONGs",
  description: "Apoyo tecnologico para organizaciones sociales: software, datos, reportes, procesos y herramientas digitales con enfoque social.",
};

const problems = [
  {
    title: "Procesos manuales",
    description:
      "Registros en papel, hojas de calculo dispersas, informacion duplicada o seguimiento dificil.",
    icon: FileText,
  },
  {
    title: "Datos poco claros",
    description:
      "Falta de indicadores, reportes tardados o dificultad para explicar resultados a direccion, aliados o donantes.",
    icon: LineChart,
  },
  {
    title: "Operaciones sin trazabilidad",
    description:
      "Actividades valiosas que ocurren todos los dias, pero sin suficiente evidencia, orden o continuidad.",
    icon: ClipboardCheck,
  },
];

const supportAreas = [
  "Sistemas web para captura y consulta de informacion.",
  "Formularios digitales, bases de datos y paneles administrativos.",
  "Dashboards, reportes e indicadores para toma de decisiones.",
  "Automatizacion de procesos repetitivos y seguimiento operativo.",
  "Documentacion tecnica y funcional para continuidad del proyecto.",
  "Prototipos para validar una solucion antes de invertir mas recursos.",
];

const process = [
  {
    title: "Diagnostico",
    description:
      "Entendemos el problema, el proceso actual, las personas involucradas y la urgencia real.",
  },
  {
    title: "Alcance",
    description:
      "Definimos que si se puede resolver, que queda fuera y cual seria la primera version util.",
  },
  {
    title: "Propuesta",
    description:
      "Planteamos una ruta clara: gratuita anual, cuota social o proyecto cotizado segun el caso.",
  },
  {
    title: "Construccion",
    description:
      "Desarrollamos con foco en simplicidad, documentacion, mantenimiento y uso real en campo.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function ProblemCard({
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

export default function OngsPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.9fr] md:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Puente Systems para organizaciones sociales
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Tecnolog&iacute;a para trabajar mejor en causas reales.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Ayudamos a organizaciones sociales a ordenar procesos, capturar datos, visualizar
              resultados y construir herramientas digitales simples, medibles y sostenibles.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <p className="text-2xl font-semibold text-[#10233f]">1</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  proyecto gratuito anual
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <p className="text-2xl font-semibold text-[#10233f]">85%</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  posible descuento social
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <p className="text-2xl font-semibold text-[#10233f]">MVP</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  primero lo util y medible
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Criterio de selecci&oacute;n
                </span>
                <HeartHandshake className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                No buscamos digitalizar por moda. Buscamos que una organizaci&oacute;n pueda ayudar con m&aacute;s orden, evidencia y continuidad.
              </p>

              <div className="mt-10 grid gap-3">
                <div className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4">
                  <p className="font-semibold">Prioridad</p>
                  <p className="mt-2 leading-7 text-[#c9d8e8]">
                    Problemas operativos claros, impacto social real y posibilidad de medir mejora.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4">
                  <p className="font-semibold">No aplica para</p>
                  <p className="mt-2 leading-7 text-[#c9d8e8]">
                    Ideas sin responsable, sin necesidad concreta o sin disponibilidad para colaborar.
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
            <SectionLabel>Problemas que atendemos</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Cuando el trabajo social crece, el desorden tambi&eacute;n.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Muchas organizaciones hacen trabajo valioso, pero pierden tiempo y evidencia por
            procesos manuales, datos dispersos o falta de herramientas adecuadas.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {problems.map((problem) => (
            <ProblemCard
              description={problem.description}
              icon={problem.icon}
              key={problem.title}
              title={problem.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Qu&eacute; podemos construir</SectionLabel>
              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Herramientas simples para operaciones importantes.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                El objetivo no es hacer sistemas gigantes. El objetivo es construir la primera
                versi&oacute;n que realmente ordene el proceso y permita tomar mejores decisiones.
              </p>
            </div>

            <div className="grid gap-3">
              {supportAreas.map((area) => (
                <div
                  className="grid grid-cols-[36px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                  key={area}
                >
                  <div className="flex size-9 items-center justify-center rounded-full bg-white/10">
                    <ShieldCheck className="size-5 text-[#d7e7f6]" />
                  </div>
                  <p className="leading-7 text-[#c9d8e8]">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Modelo de trabajo</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Antes de construir, hay que entender.
            </h2>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <Card className="border-[#d7dedf] bg-white/75 shadow-sm" key={step.title}>
                <CardContent className="grid gap-4 p-6 md:grid-cols-[72px_1fr]">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-[#425875]">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-6 shadow-sm md:p-8">
            <Sparkles className="mb-8 size-8 text-[#10233f]" />

            <h2 className="font-[var(--font-serif)] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-6xl">
              Cu&eacute;ntanos qu&eacute; problema quieres resolver.
            </h2>

            <p className="mt-6 leading-8 text-[#425875]">
              Esta solicitud no obliga a contratar nada. Sirve para entender el caso,
              clasificarlo y decidir si aplica al programa gratuito anual, a una cuota social
              o a una propuesta formal.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-[#60738c]">
              <div className="flex gap-3">
                <Database className="mt-0.5 size-5 shrink-0 text-[#10233f]" />
                <p>Mientras m&aacute;s claro sea el proceso actual, mejor podremos diagnosticar.</p>
              </div>

              <div className="flex gap-3">
                <Users className="mt-0.5 size-5 shrink-0 text-[#10233f]" />
                <p>Priorizar&aacute;n casos con responsables disponibles para colaborar.</p>
              </div>

              <div className="flex gap-3">
                <ArrowRight className="mt-0.5 size-5 shrink-0 text-[#10233f]" />
                <p>Despu&eacute;s de enviar la solicitud, se revisar&aacute; el caso y se dar&aacute; seguimiento.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm md:p-6">
            <NgoRequestForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}