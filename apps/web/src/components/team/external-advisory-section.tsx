import { CalendarCheck, ClipboardCheck, ShieldCheck, UsersRound } from "lucide-react";

const reviewItems = [
  {
    title: "Revision tecnica puntual",
    description:
      "Apoyo para revisar arquitectura, alcance, integraciones, datos, infraestructura o criterios tecnicos cuando el proyecto lo requiere.",
    icon: ShieldCheck,
  },
  {
    title: "Criterio academico y profesional",
    description:
      "Retroalimentacion de perfiles tecnicos, academicos o profesionales con experiencia en ingenieria, software, ciencia de datos, investigacion o consultoria.",
    icon: UsersRound,
  },
  {
    title: "Validacion de alcance y riesgos",
    description:
      "Acompanamiento para identificar limites, supuestos, riesgos, prioridades y siguientes pasos antes de construir o escalar una solucion.",
    icon: ClipboardCheck,
  },
  {
    title: "Sesiones bajo disponibilidad",
    description:
      "En proyectos seleccionados, la cotizacion puede incluir una sesion breve de revision con un asesor segun perfil requerido, disponibilidad y alcance.",
    icon: CalendarCheck,
  },
];

export function ExternalAdvisorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="grid gap-8 rounded-[1.75rem] border border-[#d7dedf] bg-white/72 p-6 shadow-sm md:grid-cols-[0.82fr_1.18fr] md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Revision externa
          </p>
          <h2 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-6xl">
            Asesoria tecnica y criterio profesional.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#425875]">
            Puente Impacto puede apoyarse en una red de asesores tecnicos, academicos y profesionales para revisar proyectos especificos cuando el alcance lo requiere.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#526981]">
            Su participacion se plantea de forma puntual: revision de arquitectura, criterios tecnicos, validacion conceptual, recomendaciones de alcance, analisis de riesgos o retroalimentacion profesional.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reviewItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="rounded-[1.35rem] border border-[#d7dedf] bg-[#f7f4ed]/72 p-5"
                key={item.title}
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-[#10233f] text-white">
                  <Icon className="size-4" />
                </div>
                <h3 className="text-base font-semibold tracking-[-0.025em] text-[#10233f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#425875]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-5 rounded-[1.25rem] border border-[#d7dedf] bg-[#10233f] px-5 py-4 text-sm leading-7 text-[#dbe7f3]">
        Esta red no sustituye la responsabilidad del equipo base ni implica supervision permanente. Se activa de forma puntual, segun disponibilidad, perfil requerido y naturaleza del proyecto.
      </div>
    </section>
  );
}
