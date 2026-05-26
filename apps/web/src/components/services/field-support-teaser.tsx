import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Network,
  RadioTower,
  ShieldCheck,
  Video,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    title: "Cobertura audiovisual",
    description:
      "Foto, video, entrevistas, recorridos y material para comunicar eventos, brigadas, hackatones e iniciativas sociales.",
    icon: Video,
  },
  {
    title: "Clinica tecnica para organizaciones",
    description:
      "Diagnostico basico de internet, WiFi, red local, cableado, camaras IP, dispositivos conectados y documentacion tecnica.",
    icon: Wifi,
  },
];

export function FieldSupportTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <Card className="overflow-hidden border-[#d7dedf] bg-white/80 shadow-sm">
        <CardContent className="p-0">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#d7dedf] bg-[#10233f] p-6 text-white lg:border-b-0 lg:border-r md:p-8">
              <div className="mb-10 flex items-center justify-between gap-4">
                <div className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7e7f6]">
                  <ShieldCheck className="size-4" />
                  Servicios de campo
                </div>
                <RadioTower className="size-7 text-[#d7e7f6]" />
              </div>

              <h2 className="font-[var(--font-serif)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-6xl">
                Apoyo practico para documentar y operar mejor.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#c9d8e8] md:text-lg">
                Ademas de herramientas digitales, Puente puede apoyar a organizaciones,
                escuelas y eventos con cobertura audiovisual, diagnostico tecnico basico
                y documentacion operativa.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
                  href="/servicios"
                >
                  Ver servicios
                  <ArrowRight className="ml-2 size-4" />
                </Link>

                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/15"
                  href="/contacto"
                >
                  Solicitar apoyo
                </Link>
              </div>
            </div>

            <div className="grid gap-4 p-6 md:p-8">
              {capabilities.map((item) => (
                <div
                  className="grid gap-4 rounded-[1.5rem] border border-[#d7dedf] bg-[#fbfaf7] p-5 md:grid-cols-[52px_1fr]"
                  key={item.title}
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white">
                    <item.icon className="size-6 text-[#10233f]" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#425875]">{item.description}</p>
                  </div>
                </div>
              ))}

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <Camera className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">Osmo Pocket 3</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">Video estable y entrevistas.</p>
                </div>

                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <Video className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">DJI Mini 5 Pro</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">Tomas aereas segun permisos.</p>
                </div>

                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-4">
                  <Network className="mb-4 size-5 text-[#10233f]" />
                  <p className="font-semibold text-[#10233f]">Red e internet</p>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">Revision tecnica basica.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export function FieldSupportCompact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="rounded-[2rem] border border-[#d7dedf] bg-white/80 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
              Servicios de campo
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              Cobertura audiovisual y clinica tecnica.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-[#425875]">
              Apoyamos eventos, organizaciones y proyectos con registro audiovisual,
              documentacion de impacto y diagnostico tecnico basico de internet, WiFi,
              red local, camaras y dispositivos conectados.
            </p>

            <Link
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
              href="/servicios"
            >
              Ver servicios
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}