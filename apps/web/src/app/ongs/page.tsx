import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "ONGs | Software gratuito para organizaciones sociales",
  description:
    "Software gratuito para ONGs, proyectos sociales y sustentables: páginas web, formularios, bases de datos, dashboards y herramientas internas sencillas.",
  alternates: {
    canonical: "/ongs",
  },
  openGraph: {
    title: "ONGs | Software gratuito para organizaciones sociales",
    description:
      "Apoyo gratuito para ONGs, proyectos sociales y sustentables con herramientas digitales concretas.",
    url: "https://puenteimpacto.org/ongs",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Puente Impacto: software gratuito para ONGs",
      },
    ],
  },
};

const deliverables = [
  "Páginas web para explicar servicios, programas y formas de contacto",
  "Formularios para beneficiarios, voluntarios, donantes o asistentes",
  "Bases de datos sencillas para ordenar información operativa",
  "Dashboards para revisar registros, actividades y resultados",
  "Sistemas de registro para brigadas, campañas, talleres o eventos",
  "Documentación básica para que el equipo pueda usar la herramienta",
];

const useCases = [
  {
    title: "Operación diaria",
    description:
      "Registrar beneficiarios, actividades, servicios, voluntarios o solicitudes sin depender de mensajes sueltos o archivos desordenados.",
  },
  {
    title: "Eventos y campañas",
    description:
      "Crear formularios, páginas de registro, listas de asistencia, reportes simples y evidencia ordenada.",
  },
  {
    title: "Transparencia y seguimiento",
    description:
      "Mostrar información clara sobre programas, resultados, contacto, necesidades y próximos pasos.",
  },
];

const process = [
  {
    step: "1",
    title: "Entendemos la necesidad",
    description:
      "Revisamos qué problema quieren resolver, quién usará la herramienta y qué información ya tienen.",
  },
  {
    step: "2",
    title: "Definimos un alcance pequeño",
    description:
      "Acordamos qué se puede entregar, qué queda fuera y qué datos o materiales se necesitan.",
  },
  {
    step: "3",
    title: "Construimos la herramienta",
    description:
      "Desarrollamos algo usable: página, formulario, base de datos, dashboard o sistema interno sencillo.",
  },
  {
    step: "4",
    title: "Entregamos y documentamos",
    description:
      "Dejamos instrucciones básicas para que la organización pueda usarlo sin depender de explicaciones largas.",
  },
];

const requirements = [
  "Una persona responsable del seguimiento",
  "Una necesidad concreta y priorizada",
  "Información base del proyecto u organización",
  "Fechas aproximadas si hay evento o campaña",
  "Claridad sobre datos personales y permisos necesarios",
];

const boundaries = [
  "No prometemos sistemas grandes sin revisar alcance y mantenimiento.",
  "No trabajamos datos sensibles sin revisar privacidad, permisos y uso responsable.",
  "No buscamos hacer la página más complicada de lo necesario.",
];

export default function OngsPage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              ONGs
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
              Software gratuito para ONGs, proyectos sociales y sustentables.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875]">
              Apoyamos a organizaciones sociales con herramientas digitales concretas: páginas web, formularios, bases de datos, dashboards, registros de eventos y documentación básica.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f] focus:outline-none focus:ring-2 focus:ring-[#10233f]/30"
                href="/contacto"
              >
                Solicitar apoyo
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#10233f]/20"
                href="https://calendly.com/contacto-puenteimpacto/30min"
                rel="noreferrer"
                target="_blank"
              >
                Agendar reunión
              </a>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#526981]">
              El apoyo se revisa según alcance, calendario y viabilidad técnica. La prioridad es entregar soluciones pequeñas, útiles y sostenibles.
            </p>
          </div>

          <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Qué podemos entregar
            </p>
            <div className="mt-5 grid gap-3">
              {deliverables.map((item) => (
                <div
                  className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-4 py-3 text-sm font-medium leading-6 text-[#10233f]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-3">
            {useCases.map((item) => (
              <article
                className="rounded-[1.35rem] border border-[#d7dedf] bg-[#f7f4ed]/80 p-5 shadow-sm"
                key={item.title}
              >
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#425875]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Forma de trabajo
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              Proyectos claros, pequeños y usables.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#425875]">
              No buscamos llenar a la organización de tecnología innecesaria. Primero se define el problema; después se construye la herramienta mínima que ayude a resolverlo.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {process.map((item) => (
              <article
                className="rounded-[1.35rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm"
                key={item.step}
              >
                <div className="flex size-9 items-center justify-center rounded-full bg-[#10233f] text-sm font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em] text-[#10233f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#425875]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[#d7dedf] bg-[#f7f4ed]/80 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Para empezar
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                Qué necesitamos de la organización
              </h2>
              <div className="mt-5 grid gap-2">
                {requirements.map((item) => (
                  <div
                    className="rounded-2xl border border-[#d7dedf] bg-white/75 px-4 py-3 text-sm font-medium text-[#425875]"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#d7dedf] bg-[#10233f] p-5 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                Alcance responsable
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                Qué cuidamos antes de aceptar un proyecto
              </h2>
              <div className="mt-5 grid gap-2">
                {boundaries.map((item) => (
                  <div
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium leading-6 text-white/85"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Solicitar apoyo
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
                Cuéntanos qué necesita resolver la organización.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#425875]">
                Comparte el tipo de organización, el problema principal, la fecha aproximada y quién dará seguimiento.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                href="/contacto"
              >
                Solicitar apoyo
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                href="https://calendly.com/contacto-puenteimpacto/30min"
                rel="noreferrer"
                target="_blank"
              >
                Agendar reunión
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
