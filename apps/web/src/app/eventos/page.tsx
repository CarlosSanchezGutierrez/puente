import {
  CalendarDays,
  Clock,
  GraduationCap,
  MapPin,
  Network,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EventRegistrationForm } from "@/components/forms/event-registration-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatEventDate, listPublishedEvents } from "@/lib/queries/public-content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Eventos",
  description: "Eventos, talleres, platicas y grupos de estudio para comunidad, carrera profesional, tecnologia e impacto social.",
};

const eventTracks = [
  {
    title: "Carrera profesional",
    description:
      "Talleres de CV, LinkedIn, entrevistas, practicas profesionales y preparacion para oportunidades.",
    icon: GraduationCap,
  },
  {
    title: "Comunidad tecnica",
    description:
      "Grupos de estudio, lectura tecnica, fundamentos de software, datos, nube e inteligencia artificial.",
    icon: Network,
  },
  {
    title: "Impacto social",
    description:
      "Sesiones para conectar estudiantes, voluntarios, organizaciones y proyectos con utilidad publica.",
    icon: Users,
  },
];

const principles = [
  "Eventos gratuitos o de bajo costo cuando sea posible.",
  "Contenido claro, accionable y util para estudiantes o comunidades.",
  "Espacios para aprender, conectar y construir continuidad.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function TrackCard({
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

export default async function EventosPage() {
  const events = await listPublishedEvents();

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.85fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Puente Comunidad
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Eventos, talleres y grupos de estudio.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Actividades para compartir conocimiento, preparar oportunidades, formar comunidad
              y conectar personas que quieren aprender o ayudar con mayor claridad.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Enfoque
                </span>
                <Sparkles className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                Un buen evento no termina cuando acaba la sesi&oacute;n. Debe dejar recursos, comunidad y siguientes pasos.
              </p>

              <div className="mt-10 grid gap-3">
                {principles.map((principle) => (
                  <div
                    className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4 leading-7 text-[#c9d8e8]"
                    key={principle}
                  >
                    {principle}
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
            <SectionLabel>L&iacute;neas de eventos</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Actividades con prop&oacute;sito claro.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            La idea no es llenar agenda por llenar. Cada taller, grupo o pl&aacute;tica debe ayudar
            a alguien a aprender, decidir mejor, conectar con otros o avanzar en un proyecto real.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {eventTracks.map((track) => (
            <TrackCard
              description={track.description}
              icon={track.icon}
              key={track.title}
              title={track.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Agenda</SectionLabel>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-6xl">
              Pr&oacute;ximas actividades.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#60738c]">
            Los registros ayudan a dimensionar asistencia, preparar materiales y dar seguimiento.
          </p>
        </div>

        {events.length === 0 ? (
          <Card className="border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="grid gap-4 p-7 md:grid-cols-[56px_1fr] md:items-center">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                <CalendarDays className="size-6 text-[#10233f]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                  Todav&iacute;a no hay eventos publicados.
                </h3>
                <p className="mt-2 leading-7 text-[#425875]">
                  Cuando existan talleres, pl&aacute;ticas o grupos de estudio activos, aparecer&aacute;n aqu&iacute;.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {events.map((event) => (
              <Card key={event.id} className="border-[#d7dedf] bg-white/78 shadow-sm">
                <CardContent className="p-6 md:p-7">
                  <div className="mb-6 flex flex-wrap gap-2">
                    <Badge variant="outline">{event.eventType}</Badge>
                    <Badge variant="outline">
                      {event.isOnline ? "Online" : event.location ?? "Por definir"}
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                    {event.title}
                  </h3>

                  <div className="mt-5 grid gap-3 text-sm text-[#60738c]">
                    <div className="flex gap-3">
                      <Clock className="mt-0.5 size-4 shrink-0 text-[#10233f]" />
                      <span>{formatEventDate(event.startsAt)}</span>
                    </div>

                    <div className="flex gap-3">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-[#10233f]" />
                      <span>{event.location ?? (event.isOnline ? "Online" : "Ubicaci&oacute;n por definir")}</span>
                    </div>
                  </div>

                  <p className="mt-6 leading-7 text-[#425875]">
                    {event.description ?? "Descripci&oacute;n pendiente."}
                  </p>

                  <div className="mt-6 rounded-[1.35rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                    <EventRegistrationForm eventTitle={event.title} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}