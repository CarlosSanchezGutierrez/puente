import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  School,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const pathways = [
  {
    title: "Soy preparatoria",
    eyebrow: "Escuelas y directivos",
    description:
      "Para instituciones que quieran recibir una sesion de orientacion vocacional con estudiantes universitarios, practicantes, profesionistas, docentes y orientadores.",
    fields: [
      "Nombre de la preparatoria",
      "Ciudad o zona",
      "Cantidad aproximada de alumnos",
      "Semestre o grado de los alumnos",
      "Areas vocacionales de mayor interes",
      "Contacto institucional",
    ],
    cta: "Registrar interes",
    href: "/contacto",
    icon: School,
  },
  {
    title: "Quiero ser mentor",
    eyebrow: "Universitarios y profesionistas",
    description:
      "Para personas que quieran compartir su experiencia de carrera, practicas, universidad, campo laboral, dudas frecuentes y recomendaciones utiles.",
    fields: [
      "Nombre completo",
      "Carrera o profesion",
      "Universidad o empresa",
      "Area vocacional que puede orientar",
      "Disponibilidad estimada",
      "LinkedIn o contacto publico",
    ],
    cta: "Registrar interes",
    href: "/voluntariado",
    icon: BriefcaseBusiness,
  },
  {
    title: "Soy estudiante",
    eyebrow: "Alumnos de preparatoria",
    description:
      "Para estudiantes que quieran explorar carreras, recibir recursos, resolver dudas y conectar con perfiles cercanos a sus intereses.",
    fields: [
      "Nombre",
      "Preparatoria",
      "Carreras de interes",
      "Universidades que esta considerando",
      "Dudas principales",
      "Correo de seguimiento",
    ],
    cta: "Registrar interes",
    href: "/recursos",
    icon: GraduationCap,
  },
];

export function VocationalInterestSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="mb-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
            Registro de interes
          </p>

          <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
            Tres formas de sumarse al programa.
          </h2>
        </div>

        <p className="text-lg leading-8 text-[#425875]">
          Antes de crear formularios definitivos, dejamos clara la informacion que necesitaremos
          para coordinar escuelas, mentores y estudiantes interesados. Esto ayuda a ordenar el
          proceso desde el inicio.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {pathways.map((pathway) => (
          <Card
            className="h-full border-[#d7dedf] bg-white/78 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            key={pathway.title}
          >
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                  <pathway.icon className="size-6 text-[#10233f]" />
                </div>

                <span className="rounded-full border border-[#d7dedf] bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-[#60738c]">
                  {pathway.eyebrow}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                {pathway.title}
              </h3>

              <p className="mt-4 leading-7 text-[#425875]">{pathway.description}</p>

              <div className="mt-7 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                <p className="mb-3 text-sm font-semibold text-[#10233f]">
                  Datos que pediremos
                </p>

                <div className="grid gap-2">
                  {pathway.fields.map((field) => (
                    <div className="grid grid-cols-[22px_1fr] gap-3" key={field}>
                      <BookOpen className="mt-1 size-4 text-[#0f7890]" />
                      <p className="text-sm leading-6 text-[#425875]">{field}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                href={pathway.href}
              >
                {pathway.cta}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-[#d7dedf] bg-[#fbfaf7] p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#10233f]">
              <Mail className="size-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-[#10233f]">Siguiente etapa</p>
              <p className="mt-1 text-sm leading-6 text-[#60738c]">
                Formularios dedicados por tipo de participante.
              </p>
            </div>
          </div>

          <p className="leading-7 text-[#425875]">
            Cuando validemos la estructura final, podemos crear formularios conectados a Supabase
            para registrar escuelas, mentores, alumnos, carreras de interes, conexiones realizadas
            y metricas de seguimiento del programa.
          </p>
        </div>
      </div>
    </section>
  );
}