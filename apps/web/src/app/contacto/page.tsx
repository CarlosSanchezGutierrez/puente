import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  HeartHandshake,
  Mail,
  MessageSquareText,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactMessageForm } from "@/components/forms/contact-message-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contacto",
  description: "Contacta a Puente para proponer colaboraciones, solicitar informacion, presentar una organizacion o participar en la comunidad.",
};

const contactReasons = [
  {
    title: "Organizaciones sociales",
    description:
      "Solicitudes relacionadas con procesos, datos, sistemas, reportes o proyectos digitales para ONG's.",
    icon: Building2,
  },
  {
    title: "Voluntariado",
    description:
      "Interes en participar con tecnologia, educacion, contenido, eventos, investigacion o apoyo operativo.",
    icon: HeartHandshake,
  },
  {
    title: "Biblioteca y comunidad",
    description:
      "Preguntas sobre libros, circulos de lectura, recursos educativos, talleres o grupos de estudio.",
    icon: BookOpen,
  },
];

const responsePrinciples = [
  "Responder con claridad y sin prometer mas de lo que se puede cumplir.",
  "Canalizar cada mensaje al area correcta de Puente.",
  "Dar seguimiento por correo, WhatsApp o redes cuando el caso lo requiera.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function ReasonCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="border-[#d7dedf] bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
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

export default function ContactoPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[590px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.85fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Contacto Puente
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Hablemos con claridad.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Usa este espacio para escribir sobre una organizaci&oacute;n, una colaboraci&oacute;n,
              una idea, una duda o una forma concreta de participar en Puente.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <Mail className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Correo</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Para seguimiento formal y documentado.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <MessageSquareText className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Mensaje</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Para dudas, propuestas o primeros contactos.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <CalendarDays className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Seguimiento</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Si el caso lo amerita, se agenda una conversaci&oacute;n.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Antes de escribir
                </span>
                <ShieldCheck className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                Entre m&aacute;s claro sea el mensaje, m&aacute;s f&aacute;cil ser&aacute; responder con una ruta concreta.
              </p>

              <div className="mt-10 grid gap-3">
                {responsePrinciples.map((principle) => (
                  <div
                    className="grid grid-cols-[36px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                    key={principle}
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/10">
                      <ArrowRight className="size-5 text-[#d7e7f6]" />
                    </div>
                    <p className="leading-7 text-[#c9d8e8]">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Motivos comunes</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              No todos los mensajes son iguales.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Puente puede recibir mensajes de organizaciones, estudiantes, voluntarios, aliados,
            profesores, creadores o personas interesadas en aprender y participar.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactReasons.map((reason) => (
            <ReasonCard
              description={reason.description}
              icon={reason.icon}
              key={reason.title}
              title={reason.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-6 shadow-sm md:p-8">
            <Users className="mb-8 size-8 text-[#10233f]" />

            <h2 className="font-[var(--font-serif)] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-6xl">
              Escribe el contexto, no solo la solicitud.
            </h2>

            <p className="mt-6 leading-8 text-[#425875]">
              Puedes explicar qui&eacute;n eres, qu&eacute; organizaci&oacute;n o proyecto representas,
              qu&eacute; problema quieres resolver, qu&eacute; tipo de ayuda buscas y cu&aacute;l ser&iacute;a
              el siguiente paso ideal.
            </p>

            <div className="mt-8 rounded-[1.35rem] border border-[#d7dedf] bg-[#fbfaf7] p-5">
              <p className="font-semibold text-[#10233f]">Ejemplo de buen mensaje</p>
              <p className="mt-3 leading-7 text-[#425875]">
                Somos una organizaci&oacute;n que registra beneficiarios en hojas de c&aacute;lculo.
                Queremos entender si tiene sentido crear un sistema simple para capturar datos,
                generar reportes y reducir trabajo manual.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm md:p-6">
            <ContactMessageForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}