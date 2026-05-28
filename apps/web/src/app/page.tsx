import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Puente Impacto | Software gratuito para ONG y eventos educativos",
  description:
    "Software gratuito para ONG, proyectos sociales y sustentables, eventos educativos, orientación vocacional y documentación de proyectos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://puenteimpacto.org",
    title: "Puente Impacto | Software gratuito para ONG y eventos educativos",
    description:
      "Software gratuito para ONG, proyectos sociales y sustentables, eventos educativos, orientación vocacional y documentación de proyectos.",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Puente Impacto: software gratuito para ONG y eventos educativos",
      },
    ],
  },
};

const mainAreas = [
  {
    title: "ONG",
    description:
      "Páginas web, formularios, bases de datos, dashboards, registro de beneficiarios, gestión de voluntarios y documentación operativa.",
    href: "/ONG",
    cta: "Ver apoyo para ONG",
  },
  {
    title: "Proyectos sociales y sustentables",
    description:
      "Apoyo técnico para ordenar información, registrar actividades, documentar evidencia y crear herramientas digitales útiles.",
    href: "/servicios",
    cta: "Ver servicios",
  },
  {
    title: "Eventos educativos",
    description:
      "Registro de participantes, formularios, páginas de evento, apoyo audiovisual, documentación, constancias simples y seguimiento.",
    href: "/eventos",
    cta: "Ver eventos",
  },
];

const deliverables = [
  "Páginas web institucionales",
  "Formularios y bases de datos",
  "Dashboards y reportes",
  "Apps móviles completas para Android y iOS",
  "Sistemas de registro para eventos",
  "Documentación operativa",
  "Material audiovisual y evidencia",
  "Orientación vocacional y talleres",
];

const process = [
  {
    step: "1",
    title: "Revisamos la necesidad",
    description: "Entendemos qué se necesita, quién lo usará y qué problema concreto se quiere resolver.",
  },
  {
    step: "2",
    title: "Definimos un alcance simple",
    description: "Acordamos qué sí se puede entregar, qué queda fuera y qué información se necesita para avanzar.",
  },
  {
    step: "3",
    title: "Construimos y documentamos",
    description: "Desarrollamos la herramienta, dejamos instrucciones básicas y organizamos la información del proyecto.",
  },
  {
    step: "4",
    title: "Entregamos algo usable",
    description: "La prioridad es que la organización o escuela pueda usarlo sin depender de explicaciones complicadas.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Puente Impacto
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
            Software gratuito para ONG, proyectos sociales, sustentables y eventos educativos.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875]">
            Ayudamos a organizaciones y escuelas con herramientas digitales concretas: páginas web, formularios, bases de datos, dashboards, registro de eventos, documentación y apoyo audiovisual.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
              href="/contacto"
            >
              Solicitar apoyo
            </Link>
            <a
              className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
              href="https://calendly.com/contacto-puenteimpacto/30min"
              rel="noreferrer"
              target="_blank"
            >
              Agendar reunión
            </a>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#526981]">
            El apoyo gratuito se revisa según alcance, disponibilidad, calendario y viabilidad técnica. La intención es entregar soluciones útiles, no prometer más de lo que se puede sostener.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Qué hacemos
          </p>
          <div className="mt-5 grid gap-3">
            {deliverables.map((item) => (
              <div
                className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/70 px-4 py-3 text-sm font-medium text-[#10233f]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7dedf] bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-3">
          {mainAreas.map((area) => (
            <article
              className="rounded-[1.5rem] border border-[#d7dedf] bg-[#f7f4ed]/80 p-5 shadow-sm"
              key={area.title}
            >
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#425875]">{area.description}</p>
              <Link
                className="mt-5 inline-flex text-sm font-semibold text-[#10233f] underline-offset-4 hover:underline"
                href={area.href}
              >
                {area.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Forma de trabajo
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
            Proyectos pequeños, claros y entregables.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#425875]">
            La prioridad es que cada apoyo tenga un alcance entendible, tiempos razonables y una entrega que pueda usarse en la operación real de la organización, escuela o evento.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {process.map((item) => (
            <article
              className="rounded-[1.5rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm"
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

      <section className="bg-[#10233f] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              Para empezar
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
              Cuéntanos qué necesitas resolver.
            </h2>
          </div>

          <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5">
            <p className="text-base leading-7 text-white/80">
              Sirve con que nos compartas el tipo de organización o evento, el problema principal, la fecha aproximada, quién será responsable del seguimiento y qué información ya existe.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white/90"
                href="/contacto"
              >
                Escribir a Puente Impacto
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://calendly.com/contacto-puenteimpacto/30min"
                rel="noreferrer"
                target="_blank"
              >
                Agendar reunión
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </SiteShell>
  );
}
