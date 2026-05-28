import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Puente Vocacional | Orientación para estudiantes de preparatoria",
  description:
    "Pláticas, sesiones y red de orientadores vocacionales para ayudar a estudiantes de preparatoria a conocer carreras, universidades y rutas profesionales.",
  alternates: {
    canonical: "/eventos/puente-vocacional-2026",
  },
  openGraph: {
    title: "Puente Vocacional | Orientación para estudiantes de preparatoria",
    description:
      "Pláticas, sesiones y red de orientadores vocacionales para estudiantes de preparatoria, familias, escuelas y profesionistas.",
    url: "https://puenteimpacto.org/eventos/puente-vocacional-2026",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Puente Vocacional: orientación vocacional para estudiantes de preparatoria",
      },
    ],
  },
};

const audiences = [
  {
    title: "Preparatorias",
    description:
      "Sesiones vocacionales para complementar la orientación que ya reciben los estudiantes.",
  },
  {
    title: "Estudiantes",
    description:
      "Conversaciones con personas que ya estudian o trabajan en distintas áreas.",
  },
  {
    title: "Familias",
    description:
      "Información práctica para acompañar mejor la decisión de carrera o universidad.",
  },
  {
    title: "Ponentes",
    description:
      "Participación de universitarios, profesores y profesionistas con experiencia real.",
  },
];

const includes = [
  "Pláticas vocacionales por carrera o área profesional",
  "Sesiones con universitarios, profesionistas, profesores y mentores",
  "Preguntas y respuestas con estudiantes de preparatoria",
  "Red de orientadores vocacionales por ciudad y familia vocacional",
  "Registro de interés para escuelas, ponentes y alumnos",
  "Documentación del evento para redes, página web y seguimiento",
];

const families = [
  "Ingenierías y Ciencias",
  "Medicina y Ciencias de la Salud",
  "Negocios",
  "Arquitectura, Arte y Diseño",
  "Humanidades",
];

const steps = [
  {
    title: "Escuela",
    description:
      "Registra interés para organizar una sesión con estudiantes de preparatoria.",
  },
  {
    title: "Ponente",
    description:
      "Comparte tu experiencia académica o profesional con estudiantes que están por elegir carrera.",
  },
  {
    title: "Alumno o familia",
    description:
      "Recibe información sobre próximas sesiones, áreas vocacionales y perfiles participantes.",
  },
];

export default function PuenteVocacionalPage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Puente Vocacional
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
              Orientación vocacional para estudiantes de preparatoria.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875]">
              Organizamos pláticas y sesiones con universitarios, profesionistas, profesores y mentores para que los estudiantes conozcan carreras, universidades y rutas profesionales antes de decidir qué estudiar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f] focus:outline-none focus:ring-2 focus:ring-[#10233f]/30"
                href="/contacto"
              >
                Registrar interés
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#10233f]/20"
                href="/eventos/puente-vocacional-2026/red"
              >
                Red de orientadores vocacionales
              </Link>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#526981]">
              El objetivo no es decidir por el estudiante. Es darle más información, ejemplos reales y mejores preguntas para comparar opciones.
            </p>
          </div>

          <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
                  Video breve
                </p>
                <p className="mt-1 text-sm text-[#425875]">Presentación de 1 minuto.</p>
              </div>
              <span className="shrink-0 rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-1 text-xs font-semibold text-[#10233f]">
                1 min
              </span>
            </div>
            <div className="aspect-video overflow-hidden rounded-[1.35rem] border border-[#d7dedf] bg-[#10233f]">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src="https://www.youtube-nocookie.com/embed/CMnnIaB_f7I?rel=0&modestbranding=1"
                title="Video de Puente Vocacional"
              />
            </div>
            <p className="mt-3 px-1 text-sm leading-6 text-[#425875]">
              Para escuelas, estudiantes, familias y personas interesadas en participar como orientadores.
            </p>
          </aside>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-4">
            {audiences.map((item) => (
              <article
                className="rounded-[1.35rem] border border-[#d7dedf] bg-[#f7f4ed]/80 p-5 shadow-sm"
                key={item.title}
              >
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#425875]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Qué incluye
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              Actividades vocacionales claras y fáciles de organizar.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#425875]">
              El formato se ajusta según la escuela, el número de estudiantes, las áreas de interés y la disponibilidad de los ponentes.
            </p>
          </div>

          <div className="grid gap-3">
            {includes.map((item) => (
              <div
                className="rounded-2xl border border-[#d7dedf] bg-white/75 px-4 py-3 text-sm font-medium text-[#10233f] shadow-sm"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="scroll-mt-8 bg-[#10233f] px-6 py-16 text-white" id="red-orientadores">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                Red de orientadores vocacionales
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                Perfiles de Monterrey y Tampico organizados por área.
              </h2>
              <Link
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/35"
                href="/eventos/puente-vocacional-2026/red"
              >
                Ver red de orientadores vocacionales
              </Link>
            </div>

            <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5">
              <p className="text-base leading-7 text-white/80">
                La red reúne estudiantes universitarios, profesionistas, profesores y perfiles académicos que pueden participar en sesiones vocacionales. Los perfiles se organizan por ciudad, institución y familia vocacional para que cada escuela pueda encontrar invitados relacionados con los intereses de sus estudiantes.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {families.map((family) => (
                  <div
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white"
                    key={family}
                  >
                    {family}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Cómo participar
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
              Registro simple para escuelas, ponentes y familias.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((item) => (
              <article
                className="rounded-[1.35rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm"
                key={item.title}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#425875]">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                ¿Quieres participar o registrar una escuela?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#425875]">
                Comparte el tipo de participación, ciudad, escuela o área vocacional de interés para revisar el siguiente paso.
              </p>
            </div>
            <Link
              className="mt-5 inline-flex shrink-0 items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f] focus:outline-none focus:ring-2 focus:ring-[#10233f]/30 md:mt-0"
              href="/contacto"
            >
              Registrar interés
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
