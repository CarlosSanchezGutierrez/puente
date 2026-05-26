import { HelpCircle } from "lucide-react";
import { BookingLink } from "@/components/site/booking-link";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Preguntas frecuentes",
  description:
    "Preguntas frecuentes sobre Puente Impacto, ONGs, escuelas, mentores, estudiantes, servicios y formas de colaboracion.",
};

const faqGroups = [
  {
    title: "General",
    description: "Informacion base sobre Puente Impacto.",
    questions: [
      {
        question: "Que es Puente Impacto?",
        answer:
          "Puente Impacto es una iniciativa de tecnologia social que conecta estudiantes, organizaciones, escuelas y comunidades con proyectos reales mediante herramientas digitales, documentacion, servicios de campo, programas educativos e investigacion aplicada.",
      },
      {
        question: "Puente Impacto es una empresa, ONG o grupo estudiantil?",
        answer:
          "Puente Impacto es una iniciativa en construccion enfocada en tecnologia social, educacion e impacto comunitario. Algunos proyectos pueden operar con logica social, educativa o de servicios profesionales, segun el alcance y la naturaleza de cada colaboracion.",
      },
      {
        question: "Con que tipo de proyectos trabajan?",
        answer:
          "Trabajamos con proyectos donde exista una necesidad clara, responsables definidos y posibilidad de dar seguimiento. Podemos apoyar a organizaciones sociales, escuelas, estudiantes, comunidades, programas educativos y proyectos de impacto.",
      },
      {
        question: "Donde puedo conocer mas o contactar?",
        answer:
          "Puedes visitar puenteimpacto.org, escribir a contacto@puenteimpacto.org, enviar WhatsApp o agendar una reunion breve desde la pagina web.",
      },
    ],
  },
  {
    title: "ONGs",
    description: "Apoyo para organizaciones sociales y proyectos de impacto.",
    questions: [
      {
        question: "Que pueden hacer por una ONG?",
        answer:
          "Podemos apoyar con paginas web, aplicaciones moviles, formularios, bases de datos, dashboards, gestion de donantes y voluntarios, documentacion, video documental, automatizacion, IA responsable y diagnostico tecnico basico.",
      },
      {
        question: "Trabajan con ONGs pequenas?",
        answer:
          "Si. Nos interesa apoyar organizaciones con necesidades claras, aunque sean pequenas o esten empezando. El alcance se define segun prioridad, tiempo, recursos disponibles y capacidad de seguimiento.",
      },
      {
        question: "Pueden hacer una pagina web institucional?",
        answer:
          "Si. Podemos desarrollar sitios claros para presentar la organizacion, programas, servicios, campanas, contacto, donativos, transparencia, testimonios y evidencia de impacto.",
      },
      {
        question: "Pueden hacer aplicaciones moviles para Android y iOS?",
        answer:
          "Si, cuando la necesidad lo justifica. Primero revisamos si realmente se necesita una app movil o si una solucion web, formulario o dashboard puede resolver mejor el problema.",
      },
      {
        question: "Pueden ayudar con datos y reportes?",
        answer:
          "Si. Podemos apoyar con organizacion de datos, reportes, dashboards, indicadores y visualizacion de informacion para comunicar mejor actividades, beneficiarios, voluntarios, donativos o impacto.",
      },
      {
        question: "Pueden grabar videos o documentales para campanas?",
        answer:
          "Si. Podemos apoyar con grabacion de testimonios, entrevistas, eventos, brigadas, capsulas para redes y material audiovisual para comunicacion institucional o campanas.",
      },
    ],
  },
  {
    title: "Escuelas y Puente Vocacional",
    description: "Preguntas para preparatorias, directivos y orientadores.",
    questions: [
      {
        question: "Que es Puente Vocacional 2026?",
        answer:
          "Puente Vocacional 2026 es un programa de orientacion vocacional para conectar estudiantes de preparatoria con universitarios, practicantes, profesionistas, docentes y orientadores que puedan compartir experiencia real sobre carreras, universidades y rutas profesionales.",
      },
      {
        question: "Cuando sera Puente Vocacional 2026?",
        answer: "Esta planeado para el semestre agosto-diciembre 2026.",
      },
      {
        question: "Cual es la meta del programa?",
        answer:
          "La meta inicial es llegar a 10 preparatorias, 1,000 estudiantes y 6 o mas familias vocacionales, con seguimiento y documentacion del proceso.",
      },
      {
        question: "Que necesita una preparatoria para participar?",
        answer:
          "Necesitamos conocer la ciudad o zona, cantidad aproximada de alumnos, semestre o grado, areas vocacionales de mayor interes y un contacto institucional para coordinar la sesion.",
      },
      {
        question: "El programa solo sera una platica?",
        answer:
          "No. La idea es crear espacios de conversacion, compartir recursos, conectar intereses con perfiles reales y dar seguimiento despues de la sesion.",
      },
      {
        question: "Se documentaran las sesiones?",
        answer:
          "Buscamos documentar parte del proceso con video, testimonios, capsulas y reportes de impacto, siempre con autorizacion de imagen y cuidado de datos personales.",
      },
    ],
  },
  {
    title: "Mentores y estudiantes",
    description: "Formas de participar desde la comunidad estudiantil o profesional.",
    questions: [
      {
        question: "Quien puede ser mentor?",
        answer:
          "Pueden participar universitarios, practicantes, profesionistas, docentes, orientadores o personas con experiencia real en una carrera, universidad, industria o ruta profesional.",
      },
      {
        question: "Que haria un mentor?",
        answer:
          "Un mentor puede compartir experiencia, resolver dudas, explicar su carrera, hablar de su universidad o trabajo, recomendar recursos y ayudar a estudiantes a explorar opciones con mas claridad.",
      },
      {
        question: "Puedo participar si estoy en primeros semestres?",
        answer:
          "Si. Puente Impacto busca abrir espacios para que estudiantes puedan participar desde etapas tempranas, segun su interes, disponibilidad y nivel de experiencia.",
      },
      {
        question: "Que tipo de estudiantes pueden sumarse?",
        answer:
          "Estudiantes de distintas carreras pueden participar: ingenieria, salud, negocios, humanidades, arquitectura, diseno, artes, comunicacion, ciencia de datos, tecnologia, impacto social y otras areas.",
      },
      {
        question: "Los programas internos como CV, LinkedIn o circulos de lectura son publicos?",
        answer:
          "Algunos programas pueden ser internos, comunitarios o por invitacion segun capacidad, fechas y disponibilidad. Se anunciaran cuando haya convocatorias abiertas.",
      },
    ],
  },
  {
    title: "Servicios, pagos y operacion",
    description: "Costos, factura, reuniones, alcance y condiciones.",
    questions: [
      {
        question: "La reunion inicial tiene costo?",
        answer:
          "No, no tiene ningun costo. Es gratuita. La reunion general de 30 minutos sirve para revisar el proyecto, contexto y posible siguiente paso.",
      },
      {
        question: "Emiten factura?",
        answer:
          "Si. Cuando el proyecto se formaliza como servicio, se puede emitir factura.",
      },
      {
        question: "Tienen descuentos para ONGs?",
        answer:
          "En proyectos seleccionados pueden existir esquemas preferenciales para ONGs, planes de pago o formas de colaboracion que reduzcan la friccion economica. Cada caso se revisa segun alcance, disponibilidad y naturaleza del proyecto.",
      },
      {
        question: "Que significa hasta 85% de apoyo para ONGs?",
        answer:
          "Significa que algunos proyectos sociales seleccionados pueden recibir un esquema preferencial sobre la cotizacion inicial. No es automatico ni aplica igual para todos los casos; depende del alcance, tiempo, complejidad, disponibilidad y valor social del proyecto.",
      },
      {
        question: "Como trabajan un proyecto?",
        answer:
          "Normalmente empezamos entendiendo la necesidad, definiendo alcance, identificando responsables, construyendo o documentando la solucion y dando seguimiento con entregables claros.",
      },
      {
        question: "Los asesores externos supervisan todos los proyectos?",
        answer:
          "No necesariamente. Puente Impacto puede apoyarse en asesores tecnicos, academicos o profesionales para revisiones puntuales cuando el alcance lo requiere, segun disponibilidad y perfil necesario.",
      },
      {
        question: "El uso de dron siempre esta disponible?",
        answer:
          "No. Las tomas aereas dependen de permisos, condiciones del espacio, clima, seguridad y viabilidad operativa.",
      },
      {
        question: "La clinica tecnica sustituye una auditoria especializada de ciberseguridad?",
        answer:
          "No. La clinica tecnica es una revision basica de conectividad, red local, WiFi, camaras, equipos conectados y documentacion minima. No sustituye una auditoria formal o especializada de ciberseguridad.",
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
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-[#10233f] text-white">
              <HelpCircle className="size-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526981]">
              FAQ
            </p>
            <h1 className="mt-4 max-w-4xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Preguntas frecuentes.
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

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-4">
          {faqGroups.map((group) => (
            <details
              className="group rounded-[1.5rem] border border-[#d7dedf] bg-white/75 shadow-sm open:bg-white"
              key={group.title}
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
        <Card className="border-[#d7dedf] bg-[#10233f] text-white shadow-sm">
          <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9cce0]">
                Siguiente paso
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
                Si tu duda requiere contexto, agenda una reunion breve.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#dbe7f3]">
                La reunion general es gratuita y dura 30 minutos.
              </p>
            </div>
            <BookingLink className="bg-white text-[#10233f] hover:bg-[#f7f4ed]" />
          </CardContent>
        </Card>
      </section>
    </SiteShell>
  );
}
