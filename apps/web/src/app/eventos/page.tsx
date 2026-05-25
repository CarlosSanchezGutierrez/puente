import { CalendarDays } from "lucide-react";
import { EventRegistrationForm } from "@/components/forms/event-registration-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatEventDate, listPublishedEvents } from "@/lib/queries/public-content";

export const revalidate = 60;

export const metadata = {
  title: "Eventos",
};

export default async function EventosPage() {
  const events = await listPublishedEvents();

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Badge className="mb-6 rounded-full border-[#c7d2df] bg-white/70 px-4 py-1 text-[#10233f]">
          Puente Comunidad
        </Badge>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#60738c]">
              Formación y comunidad
            </p>
            <h1 className="mt-4 font-[var(--font-serif)] text-6xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-8xl">
              Eventos, talleres y grupos de estudio.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Actividades gratuitas o comunitarias para compartir conocimiento, orientar estudiantes,
            preparar oportunidades y fortalecer redes técnicas y humanas.
          </p>
        </div>

        {events.length === 0 ? (
          <Card className="mt-12 border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="p-7 text-[#425875]">
              Todavía no hay eventos publicados en Supabase.
            </CardContent>
          </Card>
        ) : (
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {events.map((event) => (
              <Card key={event.id} className="border-[#d7dedf] bg-white/75 shadow-sm">
                <CardContent className="p-7">
                  <CalendarDays className="mb-8 size-7 text-[#10233f]" />

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{event.eventType}</Badge>
                    <Badge variant="outline">
                      {event.location ?? (event.isOnline ? "Online" : "Por definir")}
                    </Badge>
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">
                    {event.title}
                  </h2>

                  <p className="mt-2 text-sm text-[#60738c]">{formatEventDate(event.startsAt)}</p>
                  <p className="mt-5 leading-7 text-[#425875]">
                    {event.description ?? "Descripción pendiente."}
                  </p>

                  <EventRegistrationForm eventTitle={event.title} />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}