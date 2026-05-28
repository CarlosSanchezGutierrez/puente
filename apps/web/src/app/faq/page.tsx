import { ArrowRight, HelpCircle } from "lucide-react";
import { BookingLink } from "@/components/site/booking-link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Preguntas frecuentes",
  description:
    "Preguntas frecuentes sobre Puente Impacto, ONG, escuelas, mentores, estudiantes, servicios y formas de colaboracion.",
};

const faqGroups = [
  {
    id: "general",
    title: "General",
    description: "Informacion base sobre Puente Impacto.",
    defaultOpen: true,
    questions: [
      {
        question: "\u00bfQu\u00e9 es Puente Impacto?",
        answer:
          "Puente Impacto es una iniciativa de tecnolog\u00eda social que conecta estudiantes, organizaciones, escuelas y comunidades con proyectos reales mediante herramientas digitales, documentaci\u00f3n, servicios de campo, programas educativos e investigaci\u00f3n aplicada.",
      },
      {
        question: "\u00bfPuente Impacto es una empresa, ONG o grupo estudiantil?",
        answer:
          "Puente Impacto es una iniciativa en construcci\u00f3n enfocada en tecnolog\u00eda social, educaci\u00f3n e impacto comunitario. Algunos proyectos pueden operar con l\u00f3gica social, educativa o de servicios profesionales, seg\u00fan el alcance y la naturaleza de cada colaboraci\u00f3n.",
      },
      {
        question: "\u00bfCon qu\u00e9 tipo de proyectos trabajan?",
        answer:
          "Trabajamos con proyectos donde exista una necesidad clara, responsables definidos y posibilidad de dar seguimiento. Podemos apoyar a organizaciones sociales, escuelas, estudiantes, comunidades, programas educativos y proyectos de impacto.",
      },
      {
        question: "\u00bfD\u00f3nde puedo conocer m\u00e1s o contactar?",
        answer:
          "Puedes visitar puenteimpacto.org, escribir a contacto@puenteimpacto.org, enviar WhatsApp o agendar una reuni\u00f3n breve desde la p\u00e1gina web.",
      },
    ],
  },
  {
    id: "ONG",
    title: "ONG",
    description: "Apoyo para organizaciones sociales y proyectos de impacto.",
    defaultOpen: false,
    questions: [
      {
        question: "\u00bfQu\u00e9 pueden hacer por una ONG?",
        answer:
          "Podemos apoyar con p\u00e1ginas web, aplicaciones m\u00f3viles, formularios, bases de datos, dashboards, gesti\u00f3n de donantes y voluntarios, documentaci\u00f3n, video documental, automatizaci\u00f3n, IA responsable y diagn\u00f3stico t\u00e9cnico b\u00e1sico.",
      },
      {
        question: "\u00bfTrabajan con ONG peque\u00f1as?",
        answer:
          "S\u00ed. Nos interesa apoyar organizaciones con necesidades claras, aunque sean peque\u00f1as o est\u00e9n empezando. El alcance se define seg\u00fan prioridad, tiempo, recursos disponibles y capacidad de seguimiento.",
      },
      {
        question: "\u00bfPueden hacer una p\u00e1gina web institucional?",
        answer:
          "S\u00ed. Podemos desarrollar sitios claros para presentar la organizaci\u00f3n, programas, servicios, campa\u00f1as, contacto, donativos, transparencia, testimonios y evidencia de impacto.",
      },
      {
        question: "\u00bfPueden hacer aplicaciones m\u00f3viles para Android y iOS?",
        answer:
          "S\u00ed, cuando la necesidad lo justifica. Primero revisamos si realmente se necesita una app m\u00f3vil o si una soluci\u00f3n web, formulario o dashboard puede resolver mejor el problema.",
      },
      {
        question: "\u00bfPueden ayudar con datos y reportes?",
        answer:
          "S\u00ed. Podemos apoyar con organizaci\u00f3n de datos, reportes, dashboards, indicadores y visualizaci\u00f3n de informaci\u00f3n para comunicar mejor actividades, beneficiarios, voluntarios, donativos o impacto.",
      },
      {
        question: "\u00bfPueden grabar videos o documentales para campa\u00f1as?",
        answer:
          "S\u00ed. Podemos apoyar con grabaci\u00f3n de testimonios, entrevistas, eventos, brigadas, c\u00e1psulas para redes y material audiovisual para comunicaci\u00f3n institucional o campa\u00f1as.",
      },
    ],
  },
  {
    id: "vocacional",
    title: "Escuelas y Puente Vocacional",
    description: "Preguntas para preparatorias, directivos y orientadores.",
    defaultOpen: false,
    questions: [
      {
        question: "\u00bfQu\u00e9 es Puente Vocacional 2026?",
        answer:
          "Puente Vocacional 2026 es un programa de orientaci\u00f3n vocacional para conectar estudiantes de preparatoria con universitarios, practicantes, profesionistas, docentes y orientadores que puedan compartir experiencia real sobre carreras, universidades y rutas profesionales.",
      },
      {
        question: "\u00bfCu\u00e1ndo ser\u00e1 Puente Vocacional 2026?",
        answer: "Est\u00e1 planeado para el semestre agosto-diciembre 2026.",
      },
      {
        question: "\u00bfCu\u00e1l es la meta del programa?",
        answer:
          "La meta inicial es llegar a 10 preparatorias, 1,000 estudiantes y 6 o m\u00e1s familias vocacionales, con seguimiento y documentaci\u00f3n del proceso.",
      },
      {
        question: "\u00bfQu\u00e9 necesita una preparatoria para participar?",
        answer:
          "Necesitamos conocer la ciudad o zona, cantidad aproximada de alumnos, semestre o grado, \u00e1reas vocacionales de mayor inter\u00e9s y un contacto institucional para coordinar la sesi\u00f3n.",
      },
      {
        question: "\u00bfEl programa solo ser\u00e1 una pl\u00e1tica?",
        answer:
          "No. La idea es crear espacios de conversaci\u00f3n, compartir recursos, conectar intereses con perfiles reales y dar seguimiento despu\u00e9s de la sesi\u00f3n.",
      },
      {
        question: "\u00bfSe documentar\u00e1n las sesiones?",
        answer:
          "Buscamos documentar parte del proceso con video, testimonios, c\u00e1psulas y reportes de impacto, siempre con autorizaci\u00f3n de imagen y cuidado de datos personales.",
      },
    ],
  },
  {
    id: "comunidad",
    title: "Mentores y estudiantes",
    description: "Formas de participar desde la comunidad estudiantil o profesional.",
    defaultOpen: false,
    questions: [
      {
        question: "\u00bfQui\u00e9n puede ser mentor?",
        answer:
          "Pueden participar universitarios, practicantes, profesionistas, docentes, orientadores o personas con experiencia real en una carrera, universidad, industria o ruta profesional.",
      },
      {
        question: "\u00bfQu\u00e9 har\u00eda un mentor?",
        answer:
          "Un mentor puede compartir experiencia, resolver dudas, explicar su carrera, hablar de su universidad o trabajo, recomendar recursos y ayudar a estudiantes a explorar opciones con m\u00e1s claridad.",
      },
      {
        question: "\u00bfPuedo participar si estoy en primeros semestres?",
        answer:
          "S\u00ed. Puente Impacto busca abrir espacios para que estudiantes puedan participar desde etapas tempranas, seg\u00fan su inter\u00e9s, disponibilidad y nivel de experiencia.",
      },
      {
        question: "\u00bfQu\u00e9 tipo de estudiantes pueden sumarse?",
        answer:
          "Estudiantes de distintas carreras pueden participar: ingenier\u00eda, salud, negocios, humanidades, arquitectura, dise\u00f1o, artes, comunicaci\u00f3n, ciencia de datos, tecnolog\u00eda, impacto social y otras \u00e1reas.",
      },
      {
        question: "\u00bfLos programas internos como CV, LinkedIn o c\u00edrculos de lectura son p\u00fablicos?",
        answer:
          "Algunos programas pueden ser internos, comunitarios o por invitaci\u00f3n seg\u00fan capacidad, fechas y disponibilidad. Se anunciar\u00e1n cuando haya convocatorias abiertas.",
      },
    ],
  },
  {
    id: "servicios",
    title: "Servicios, pagos y operaci\u00f3n",
    description: "Costos, factura, reuniones, alcance y condiciones.",
    defaultOpen: false,
    questions: [
      {
        question: "\u00bfLa reuni\u00f3n inicial tiene costo?",
        answer:
          "No, no tiene ning\u00fan costo. Es gratuita. La reuni\u00f3n general de 30 minutos sirve para revisar el proyecto, contexto y posible siguiente paso.",
      },
      {
        question: "\u00bfEmiten factura?",
        answer:
          "S\u00ed. Cuando el proyecto se formaliza como servicio, se puede emitir factura.",
      },
      {
        question: "\u00bfTienen descuentos para ONG?",
        answer:
          "En proyectos seleccionados pueden existir esquemas preferenciales para ONG, planes de pago o formas de colaboraci\u00f3n que reduzcan la fricci\u00f3n econ\u00f3mica. Cada caso se revisa seg\u00fan alcance, disponibilidad y naturaleza del proyecto.",
      },
      {
        question: "\u00bfQu\u00e9 significa hasta 85% de apoyo para ONG?",
        answer:
          "Significa que algunos proyectos sociales seleccionados pueden recibir un esquema preferencial sobre la cotizaci\u00f3n inicial. No es autom\u00e1tico ni aplica igual para todos los casos; depende del alcance, tiempo, complejidad, disponibilidad y valor social del proyecto.",
      },
      {
        question: "\u00bfC\u00f3mo trabajan un proyecto?",
        answer:
          "Normalmente empezamos entendiendo la necesidad, definiendo alcance, identificando responsables, construyendo o documentando la soluci\u00f3n y dando seguimiento con entregables claros.",
      },
      {
        question: "\u00bfLos asesores externos supervisan todos los proyectos?",
        answer:
          "No necesariamente. Puente Impacto puede apoyarse en asesores t\u00e9cnicos, acad\u00e9micos o profesionales para revisiones puntuales cuando el alcance lo requiere, seg\u00fan disponibilidad y perfil necesario.",
      },
      {
        question: "\u00bfEl uso de dron siempre est\u00e1 disponible?",
        answer:
          "No. Las tomas a\u00e9reas dependen de permisos, condiciones del espacio, clima, seguridad y viabilidad operativa.",
      },
      {
        question: "\u00bfLa cl\u00ednica t\u00e9cnica sustituye una auditor\u00eda especializada de ciberseguridad?",
        answer:
          "No. La cl\u00ednica t\u00e9cnica es una revisi\u00f3n b\u00e1sica de conectividad, red local, WiFi, c\u00e1maras, equipos conectados y documentaci\u00f3n m\u00ednima. No sustituye una auditor\u00eda formal o especializada de ciberseguridad.",
      },
    ],
  },
] as const;

export default function FAQPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-[#10233f] text-white shadow-sm">
              <HelpCircle className="size-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526981]">
              FAQ
            </p>
            <h1 className="mt-4 max-w-4xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              {"\\u00bfTienes dudas?"}
            </h1>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#425875]">
              Respuestas claras para organizaciones, escuelas, mentores, estudiantes y aliados interesados en colaborar con Puente Impacto.
            </p>
            <div className="mt-6">
              <BookingLink />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {faqGroups.map((group) => (
            <a
              className="rounded-[1.1rem] border border-[#d7dedf] bg-white/70 p-4 text-sm font-semibold text-[#10233f] transition hover:-translate-y-0.5 hover:bg-white"
              href={`#${group.id}`}
              key={group.id}
            >
              <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-[#526981]">
                Tema
              </span>
              <span className="mt-2 flex items-center justify-between gap-3">
                {group.title}
                <ArrowRight className="size-4 shrink-0" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-4">
          {faqGroups.map((group) => (
            <details
              className="group scroll-mt-28 rounded-[1.5rem] border border-[#d7dedf] bg-white/75 shadow-sm open:bg-white"
              id={group.id}
              key={group.title}
              open={group.defaultOpen}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 md:px-8">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
                    {group.description}
                  </span>
                  <span className="mt-2 block text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                    {group.title}
                  </span>
                </span>
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d7dedf] text-xl text-[#10233f] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-[#d7dedf] px-4 pb-5 md:px-6">
                <div className="grid gap-3 pt-5">
                  {group.questions.map((item) => (
                    <details
                      className="group/item rounded-[1.1rem] border border-[#d7dedf] bg-[#f7f4ed]/70 open:bg-[#f7f4ed]"
                      key={item.question}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                        <span className="text-base font-semibold tracking-[-0.025em] text-[#10233f]">
                          {item.question}
                        </span>
                        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-white/80 text-sm text-[#10233f] transition group-open/item:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="border-t border-[#d7dedf] px-5 py-4 text-sm leading-7 text-[#425875]">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 rounded-[1.75rem] border border-[#d7dedf] bg-[#10233f] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9cce0]">
              Siguiente paso
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
              Si tu duda requiere contexto, agenda una reuni\u00f3n breve.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#dbe7f3]">
              La reuni\u00f3n general es gratuita y dura 30 minutos.
            </p>
          </div>
          <BookingLink className="bg-white text-[#10233f] hover:bg-[#f7f4ed]" />
        </div>
      </section>
    </SiteShell>
  );
}
