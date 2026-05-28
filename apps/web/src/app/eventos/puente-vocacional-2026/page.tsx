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
        alt: "Puente Vocacional: orientación vocacional con experiencias reales",
      },
    ],
  },
};

const audiences = [
  {
    title: "Preparatorias",
    description:
      "Actividad vocacional para acercar a sus estudiantes con universitarios, profesionistas y perfiles académicos.",
  },
  {
    title: "Estudiantes",
    description:
      "Espacios para escuchar experiencias reales, hacer preguntas y conocer opciones antes de elegir carrera.",
  },
  {
    title: "Padres de familia",
    description:
      "Información más clara para acompañar mejor a sus hijos en la decisión de carrera, universidad o área profesional.",
  },
  {
    title: "Profesionistas y profesores",
    description:
      "Participación como ponentes, orientadores o perfiles invitados para compartir experiencia de forma práctica.",
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
  "Salud y bienestar",
  "Ingeniería y tecnología",
  "Negocios y organizaciones",
  "Arquitectura, diseño y ciudad",
  "Humanidades, comunicación y artes",
  "Impacto social e interdisciplinario",
];

const steps = [
  {
    title: "Escuela o preparatoria",
    description:
      "Puede registrar interés para organizar una sesión, plática o actividad vocacional con sus estudiantes.",
  },
  {
    title: "Ponente u orientador",
    description:
      "Puede compartir su experiencia académica o profesional con estudiantes que están por elegir carrera.",
  },
  {
    title: "Alumno o familia",
    description:
      "Puede registrar interés para recibir información sobre próximas sesiones, áreas vocacionales o perfiles participantes.",
  },
];

export default function PuenteVocacionalPage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
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
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                href="/contacto"
              >
                Registrar interés
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                href="/eventos/puente-vocacional-2026/red"
              >
                Red de orientadores vocacionales
              </a>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#526981]">
              No se trata de decirle a un estudiante qué carrera elegir. La idea es darle más información, ejemplos reales y preguntas útiles para tomar una mejor decisión.
            </p>
          </div>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-4">
            {audiences.map((item) => (
              <article
                className="rounded-[1.5rem] border border-[#d7dedf] bg-[#f7f4ed]/80 p-5 shadow-sm"
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
              El formato puede ajustarse según la escuela, el número de estudiantes, las áreas de interés y la disponibilidad de los ponentes.
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

        <section className="bg-[#10233f] px-6 py-16 text-white" id="red-orientadores">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                Red de orientadores vocacionales
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                Perfiles de Monterrey y Tampico organizados por área.
              </h2>
            </div>

            <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5">
              <p className="text-base leading-7 text-white/80">
                La red reúne estudiantes universitarios, profesionistas, profesores y perfiles académicos que pueden participar en sesiones vocacionales. Los perfiles se organizan por ciudad, institución y familia vocacional para que cada escuela pueda encontrar invitados relacionados con los intereses de sus estudiantes.
              </p>
              <Link
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white/90"
                href="/eventos/puente-vocacional-2026/red"
              >
                Ver red de orientadores vocacionales
              </Link>
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
                className="rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm"
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
              className="mt-5 inline-flex shrink-0 items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f] md:mt-0"
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
