import { FAQLinkSection } from "@/components/site/faq-link-section";
import { ArrowRight, Building2, GraduationCap, Handshake, School, UserRoundCheck } from "lucide-react";
import Link from "next/link";
import { BookingLink } from "@/components/site/booking-link";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";
import { contactLinks } from "@/lib/site-contact";

export const metadata = {
  title: "Colabora",
  description: "Formas de colaborar con Puente Impacto como ONG, escuela, mentor, estudiante o aliado.",
};

const paths = [
  {
    title: "Soy ONG",
    description:
      "Para organizaciones sociales que buscan apoyo con herramientas digitales, documentacion, datos, comunicacion, video, automatizacion o servicios de campo.",
    href: "/ongs",
    action: "Ver apoyo para ONG",
    icon: Building2,
    external: false,
  },
  {
    title: "Soy preparatoria",
    description:
      "Para escuelas interesadas en recibir una sesion de Puente Vocacional 2026 o explorar colaboraciones educativas con seguimiento medible.",
    href: "/eventos/puente-vocacional-2026",
    action: "Ver Puente Vocacional",
    icon: School,
    external: false,
  },
  {
    title: "Quiero ser mentor",
    description:
      "Para universitarios, practicantes, profesionistas, docentes u orientadores que quieran compartir experiencia real con estudiantes.",
    href: contactLinks.booking,
    action: "Agendar reunion",
    icon: UserRoundCheck,
    external: true,
  },
  {
    title: "Soy estudiante",
    description:
      "Para estudiantes que quieren aprender, participar en proyectos reales, explorar carreras, conectar con mentores o sumarse a programas.",
    href: "/contacto",
    action: "Contactar",
    icon: GraduationCap,
    external: false,
  },
] as const;

const principles = [
  "Entender primero la necesidad.",
  "Definir un alcance claro.",
  "Documentar el proceso.",
  "Dar seguimiento con orden.",
];

export default function ColaboraPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-[#10233f] text-white">
              <Handshake className="size-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526981]">
              Colabora
            </p>
            <h1 className="mt-4 max-w-4xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Encuentra la forma correcta de sumarte.
            </h1>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#425875]">
              Puente Impacto conecta organizaciones, escuelas, estudiantes, mentores y aliados con proyectos reales de tecnologia social, educacion, documentacion e investigacion aplicada.
            </p>
            <div className="mt-6">
              <BookingLink />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {paths.map((item) => {
            const Icon = item.icon;
            const content = (
              <Card className="h-full border-[#d7dedf] bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
                <CardContent className="flex h-full flex-col p-6 md:p-7">
                  <div className="mb-6 inline-flex size-11 items-center justify-center rounded-full bg-[#10233f] text-white">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                    {item.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#425875]">{item.description}</p>
                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#10233f]">
                    {item.action}
                    <ArrowRight className="ml-2 size-4" />
                  </div>
                </CardContent>
              </Card>
            );

            if (item.external) {
              return (
                <a href={item.href} key={item.title} rel="noreferrer" target="_blank">
                  {content}
                </a>
              );
            }

            return (
              <Link href={item.href} key={item.title}>
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-8 rounded-[1.75rem] border border-[#d7dedf] bg-[#10233f] p-6 text-white md:grid-cols-[0.85fr_1.15fr] md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9cce0]">
              Forma de trabajo
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Colaboraciones con alcance claro.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((item, index) => (
              <div className="rounded-[1.25rem] border border-white/15 bg-white/8 p-5" key={item}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9cce0]">
                  0{index + 1}
                </p>
                <p className="mt-3 text-base font-medium leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
          <FAQLinkSection />
    </SiteShell>
  );
}
