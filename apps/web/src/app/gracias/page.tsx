import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Mail,
  RadioTower,
} from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Gracias",
  description: "Confirmacion de envio para formularios de Puente Impacto.",
  robots: {
    index: false,
    follow: false,
  },
};

type ThanksType = "contacto" | "servicios" | "vocacional" | "general";

type PageSearchParams = {
  tipo?: string;
};

const contentByType: Record<
  ThanksType,
  {
    eyebrow: string;
    title: string;
    description: string;
    nextSteps: string[];
    primaryHref: string;
    primaryLabel: string;
    secondaryHref: string;
    secondaryLabel: string;
  }
> = {
  contacto: {
    eyebrow: "Mensaje recibido",
    title: "Gracias por escribirnos.",
    description:
      "Recibimos tu mensaje. Revisaremos el contexto para entender la mejor forma de dar seguimiento.",
    nextSteps: [
      "Revisaremos el tema que seleccionaste.",
      "Si el alcance es claro, daremos seguimiento por el medio de contacto que compartiste.",
      "Si hace falta informacion, te pediremos contexto adicional.",
    ],
    primaryHref: "/",
    primaryLabel: "Volver al inicio",
    secondaryHref: "/contacto",
    secondaryLabel: "Enviar otro mensaje",
  },
  servicios: {
    eyebrow: "Solicitud recibida",
    title: "Gracias por solicitar apoyo.",
    description:
      "Recibimos tu solicitud de servicios de campo. Revisaremos disponibilidad, alcance, condiciones del espacio y siguientes pasos.",
    nextSteps: [
      "Revisaremos si el apoyo solicitado es audiovisual, tecnico o mixto.",
      "Si hay interes en dron, se revisaran permisos, clima, seguridad y condiciones del lugar.",
      "Te contactaremos para precisar alcance, fecha tentativa y entregables.",
    ],
    primaryHref: "/servicios",
    primaryLabel: "Ver servicios",
    secondaryHref: "/servicios/solicitud",
    secondaryLabel: "Enviar otra solicitud",
  },
  vocacional: {
    eyebrow: "Registro recibido",
    title: "Gracias por registrarte.",
    description:
      "Recibimos tu interes en Puente Vocacional 2026. Usaremos la informacion para organizar seguimiento con escuelas, estudiantes o mentores.",
    nextSteps: [
      "Clasificaremos el registro segun el tipo de participante.",
      "Revisaremos areas vocacionales, escuela, ciudad o contexto.",
      "Cuando avancemos en la planeacion, podremos contactar a los perfiles registrados.",
    ],
    primaryHref: "/eventos/puente-vocacional-2026",
    primaryLabel: "Ver programa",
    secondaryHref: "/eventos/puente-vocacional-2026/registro",
    secondaryLabel: "Enviar otro registro",
  },
  general: {
    eyebrow: "Envio recibido",
    title: "Gracias.",
    description:
      "Recibimos la informacion. Revisaremos el contexto y daremos seguimiento si corresponde.",
    nextSteps: [
      "Revisaremos el mensaje recibido.",
      "Identificaremos si corresponde a ONGs, programas, servicios o investigacion.",
      "Daremos seguimiento si hay una ruta clara de colaboracion.",
    ],
    primaryHref: "/",
    primaryLabel: "Volver al inicio",
    secondaryHref: "/contacto",
    secondaryLabel: "Ir a contacto",
  },
};

function normalizeType(value: string | undefined): ThanksType {
  if (value === "contacto" || value === "servicios" || value === "vocacional") {
    return value;
  }

  return "general";
}

function IconForType({ type }: { type: ThanksType }) {
  if (type === "contacto") {
    return <Mail className="size-7 text-white" />;
  }

  if (type === "servicios") {
    return <RadioTower className="size-7 text-white" />;
  }

  if (type === "vocacional") {
    return <GraduationCap className="size-7 text-white" />;
  }

  return <HeartHandshake className="size-7 text-white" />;
}

export default async function GraciasPage({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}) {
  const params = await searchParams;
  const type = normalizeType(params.tipo);
  const content = contentByType[type];

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.18),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid min-h-[72vh] max-w-7xl place-items-center px-6 py-16 md:py-24">
          <Card className="w-full max-w-3xl border-[#d7dedf] bg-white/84 shadow-sm">
            <CardContent className="p-6 md:p-10">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#10233f]">
                  <IconForType type={type} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c]">
                    {content.eyebrow}
                  </p>

                  <h1 className="mt-3 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
                    {content.title}
                  </h1>
                </div>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-[#425875]">
                {content.description}
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-[#d7dedf] bg-[#fbfaf7] p-5">
                <div className="mb-5 flex items-center gap-3">
                  <ClipboardList className="size-5 text-[#10233f]" />
                  <h2 className="text-xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    Que sigue
                  </h2>
                </div>

                <div className="grid gap-3">
                  {content.nextSteps.map((step) => (
                    <div className="grid grid-cols-[30px_1fr] gap-3" key={step}>
                      <div className="flex size-7 items-center justify-center rounded-full bg-white">
                        <CheckCircle2 className="size-4 text-[#0f7890]" />
                      </div>
                      <p className="text-sm leading-6 text-[#425875]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                  href={content.primaryHref}
                >
                  {content.primaryLabel}
                  <ArrowRight className="ml-2 size-4" />
                </Link>

                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                  href={content.secondaryHref}
                >
                  {content.secondaryLabel}
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}