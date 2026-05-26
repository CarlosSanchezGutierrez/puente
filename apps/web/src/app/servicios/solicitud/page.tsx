import { ClipboardList, Network, Video, Wifi } from "lucide-react";
import { FieldServiceRequestForm } from "@/components/services/field-service-request-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Solicitud de servicios",
  description:
    "Formulario de solicitud para cobertura audiovisual y clinica tecnica de Puente Impacto.",
};

const cards = [
  {
    title: "Cobertura audiovisual",
    description: "Eventos, brigadas, entrevistas, recorridos, testimonios y material de comunicacion.",
    icon: Video,
  },
  {
    title: "Clinica tecnica",
    description: "Internet, WiFi, red local, cableado, camaras IP, equipos conectados y documentacion.",
    icon: Wifi,
  },
  {
    title: "Alcance claro",
    description: "Revisamos el contexto antes de confirmar disponibilidad, permisos y entregables.",
    icon: Network,
  },
];

export default function ServiciosSolicitudPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Servicios de campo
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Solicitar apoyo audiovisual o tecnico.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Completa este formulario para contarnos el contexto de tu evento, sede u organizacion.
              Revisaremos la solicitud para proponer un alcance viable y responsable.
            </p>

            <div className="mt-8 grid gap-3">
              {cards.map((item) => (
                <div
                  className="grid grid-cols-[44px_1fr] gap-4 rounded-[1.25rem] border border-[#d7dedf] bg-white/68 p-4"
                  key={item.title}
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[#10233f]">
                    <item.icon className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#10233f]">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#60738c]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-[#d7dedf] bg-white/82 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                  <ClipboardList className="size-6 text-[#10233f]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    Formulario de solicitud
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#60738c]">
                    Describe lo que necesitas. Despues podremos revisar disponibilidad, alcance y siguientes pasos.
                  </p>
                </div>
              </div>

              <FieldServiceRequestForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}