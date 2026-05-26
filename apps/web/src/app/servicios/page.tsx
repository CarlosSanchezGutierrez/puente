import {
  ArrowRight,
  BadgeCheck,
  Cable,
  Camera,
  ClipboardList,
  Database,
  FileText,
  Network,
  Router,
  ShieldCheck,
  Video,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Servicios",
  description:
    "Servicios de campo de Puente Impacto: cobertura audiovisual, documentacion de proyectos, diagnostico tecnico basico, internet, WiFi, red local y camaras.",
};

const audiovisualServices = [
  "Cobertura audiovisual de eventos, brigadas, hackatones y actividades con organizaciones.",
  "Grabacion de testimonios, entrevistas y capsulas breves.",
  "Registro visual de antes, durante y despues de una intervencion.",
  "Tomas estabilizadas con camara compacta para recorridos, talleres y eventos.",
  "Tomas aereas con dron cuando el espacio, permisos y condiciones lo permitan.",
  "Material para redes sociales, reportes, presentaciones y comunicacion institucional.",
  "Organizacion basica de archivos, carpetas, evidencia y entregables.",
];

const technicalServices = [
  "Diagnostico basico de internet, router, modem, DNS, gateway y latencia.",
  "Optimizacion de WiFi: canales, bandas 2.4 GHz / 5 GHz, saturacion y red de invitados.",
  "Configuracion basica de router: SSID, contrasenas, DHCP, DNS y segmentacion simple.",
  "Diagnostico de cableado Ethernet: continuidad, corto, abierto, cruzado y validacion basica.",
  "Revision de switches, PoE y equipos conectados.",
  "Inventario basico de dispositivos conectados a la red.",
  "Diagnostico de camaras IP, NVR, acceso remoto, PoE e IP fija.",
  "Documentacion de red: mapa simple, lista de IPs, equipos, conexiones y recomendaciones.",
  "Asesoria para compra de router, access point, switch, camaras y cableado.",
  "Recomendaciones de monitoreo basico para internet, camaras y disponibilidad.",
];

const tools = [
  {
    title: "Osmo Pocket 3",
    description: "Video estable, recorridos, entrevistas y contenido corto para eventos.",
    icon: Camera,
  },
  {
    title: "DJI Mini 5 Pro",
    description: "Tomas aereas sujetas a permisos, clima, seguridad y condiciones del espacio.",
    icon: Video,
  },
  {
    title: "Kit de red",
    description: "Hub USB-C con Ethernet, cable Cat6, probador Noyafa NF-468S y switch PoE.",
    icon: Network,
  },
];

const useCases = [
  {
    title: "ONGs y brigadas",
    description:
      "Documentar actividades, ordenar evidencia visual, registrar testimonios y revisar infraestructura basica de la sede.",
    icon: ShieldCheck,
  },
  {
    title: "Escuelas y programas",
    description:
      "Cubrir sesiones, hackatones, orientacion vocacional, talleres y eventos con material util para seguimiento.",
    icon: ClipboardList,
  },
  {
    title: "Eventos y sedes temporales",
    description:
      "Revisar conectividad, WiFi, cableado, camaras, dispositivos conectados y necesidades tecnicas del evento.",
    icon: Router,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function ServiceList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div className="grid grid-cols-[28px_1fr] gap-3" key={item}>
          <BadgeCheck className="mt-1 size-4 text-[#0f7890]" />
          <p className="text-sm leading-6 text-[#425875]">{item}</p>
        </div>
      ))}
    </div>
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
    <Card className="h-full border-[#d7dedf] bg-white/80 shadow-sm">
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

export default function ServiciosPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.88fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Servicios de campo
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Apoyo audiovisual y tecnico para organizaciones.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Apoyamos a organizaciones, escuelas y eventos con cobertura audiovisual,
              documentacion operativa y diagnostico tecnico basico para que sus iniciativas
              puedan comunicarse, ordenarse y funcionar mejor.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                href="/servicios/solicitud"
              >
                Solicitar apoyo
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                href="/eventos"
              >
                Ver eventos
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/80 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Enfoque
                </span>
                <Database className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                Que una iniciativa no solo ocurra: que tambien pueda documentarse, comunicarse y operar con mayor claridad.
              </p>

              <div className="mt-10 grid gap-3">
                {[
                  "Material audiovisual para comunicacion, reportes y difusion.",
                  "Revision tecnica basica para sedes, eventos y organizaciones.",
                  "Documentacion practica para ordenar hallazgos, recomendaciones y entregables.",
                ].map((item) => (
                  <div
                    className="grid grid-cols-[36px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                    key={item}
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/10">
                      <BadgeCheck className="size-5 text-[#d7e7f6]" />
                    </div>
                    <p className="leading-7 text-[#c9d8e8]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Capacidades principales</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Dos formas concretas de apoyar.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Estos servicios funcionan como apoyo complementario para proyectos sociales,
            eventos, escuelas, brigadas y organizaciones que necesitan mejor documentacion,
            comunicacion o claridad tecnica.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="h-full border-[#d7dedf] bg-white/80 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-[#10233f]">
                <Video className="size-7 text-white" />
              </div>

              <h3 className="font-[var(--font-serif)] text-4xl font-semibold leading-none tracking-[-0.05em] text-[#10233f] md:text-5xl">
                Cobertura audiovisual
              </h3>

              <p className="mt-5 leading-8 text-[#425875]">
                Registro de eventos, brigadas, talleres, hackatones e iniciativas sociales
                mediante foto, video, entrevistas, recorridos y material util para comunicacion
                institucional.
              </p>

              <div className="mt-8">
                <ServiceList items={audiovisualServices} />
              </div>
            </CardContent>
          </Card>

          <Card className="h-full border-[#d7dedf] bg-white/80 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-[#10233f]">
                <Wifi className="size-7 text-white" />
              </div>

              <h3 className="font-[var(--font-serif)] text-4xl font-semibold leading-none tracking-[-0.05em] text-[#10233f] md:text-5xl">
                Clinica tecnica para organizaciones
              </h3>

              <p className="mt-5 leading-8 text-[#425875]">
                Diagnostico tecnico basico para entender mejor internet, red local, WiFi,
                cableado, camaras, equipos conectados y documentacion minima de infraestructura.
              </p>

              <div className="mt-8">
                <ServiceList items={technicalServices} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10">
          <SectionLabel>Equipo y herramientas</SectionLabel>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-6xl">
            Herramientas disponibles para trabajo de campo.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <InfoCard
              description={tool.description}
              icon={tool.icon}
              key={tool.title}
              title={tool.title}
            />
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#d7dedf] bg-[#fbfaf7] p-5">
          <div className="grid gap-4 md:grid-cols-[48px_1fr] md:items-start">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-white">
              <FileText className="size-6 text-[#10233f]" />
            </div>
            <p className="leading-7 text-[#425875]">
              El uso de dron depende del espacio, permisos, clima, seguridad, restricciones
              del lugar y condiciones operativas. En cada caso se define el alcance antes del evento.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10">
          <SectionLabel>Casos de uso</SectionLabel>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-6xl">
            Donde tiene mas sentido.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((useCase) => (
            <InfoCard
              description={useCase.description}
              icon={useCase.icon}
              key={useCase.title}
              title={useCase.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-center">
            <div>
              <div className="mb-5 flex gap-3 text-[#d7e7f6]">
                <Cable className="size-6" />
                <Network className="size-6" />
                <Camera className="size-6" />
              </div>

              <h2 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Solicita apoyo para tu evento, sede o proyecto.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                Podemos revisar el contexto, definir alcance y proponer un apoyo concreto:
                cobertura audiovisual, diagnostico tecnico, documentacion o recomendaciones
                practicas.
              </p>
            </div>

            <div className="grid gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
                href="/servicios/solicitud"
              >
                Solicitar apoyo
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/15"
                href="/ongs"
              >
                Ver apoyo a ONGs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}