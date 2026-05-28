import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CalendarCheck,
  Code2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { VolunteerApplicationForm } from "@/components/forms/volunteer-application-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Voluntariado",
  description: "Formas de participar en Puente Impacto mediante tecnologia, educacion, comunidad, contenido, eventos y proyectos sociales.",
};

const tracks = [
  {
    title: "Tecnolog\u00eda",
    description:
      "Apoyo en software, datos, documentacion, pruebas, automatizacion, soporte tecnico o prototipos.",
    icon: Code2,
  },
  {
    title: "Educaci\u00f3n",
    description:
      "Talleres, regularizacion, idiomas, CV, LinkedIn, entrevistas, lectura o grupos de estudio.",
    icon: GraduationCap,
  },
  {
    title: "Comunidad",
    description:
      "Organizacion de eventos, contacto con aliados, apoyo operativo, seguimiento y logistica.",
    icon: Users,
  },
  {
    title: "Contenido",
    description:
      "Guias, videos, entrevistas, documentales cortos, recursos educativos y comunicacion social.",
    icon: Megaphone,
  },
];

const principles = [
  "Participar con responsabilidad, no solo con entusiasmo.",
  "Hacer compromisos pequenos pero cumplibles.",
  "Documentar lo aprendido para que otra persona pueda continuar.",
  "Cuidar el trato humano, la claridad y la continuidad.",
];

const waysToHelp = [
  {
    title: "Construir",
    text: "Ayudar a convertir problemas reales en herramientas simples, mantenibles y utiles.",
    icon: BrainCircuit,
  },
  {
    title: "Ense\u00f1ar",
    text: "Compartir conocimiento con estudiantes, lectores, voluntarios o comunidades.",
    icon: BookOpen,
  },
  {
    title: "Conectar",
    text: "Acercar personas, escuelas, organizaciones, profesores, mentores o aliados.",
    icon: Network,
  },
];

const expectations = [
  {
    title: "Claridad",
    description:
      "Decir que puedes aportar, cuanto tiempo tienes y que tipo de actividades si puedes sostener.",
  },
  {
    title: "Continuidad",
    description:
      "Puente prefiere compromisos pequenos y constantes antes que promesas grandes sin seguimiento.",
  },
  {
    title: "Cuidado",
    description:
      "Al trabajar con comunidad, ONG o estudiantes, la responsabilidad y la comunicacion importan.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function TrackCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="border-[#d7dedf] bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
          <Icon className="size-6 text-[#10233f]" />
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-[#425875]">{description}</p>
      </CardContent>
    </Card>
  );
}

function HelpCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-[1.35rem] border border-white/15 bg-white/10 p-5">
      <Icon className="mb-8 size-7 text-[#d7e7f6]" />
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
      <p className="mt-3 leading-7 text-[#c9d8e8]">{text}</p>
    </div>
  );
}

export default function VoluntariadoPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.85fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Puente Comunidad
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Voluntariado con estructura, criterio y continuidad.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Puente busca personas que quieran aportar conocimiento, tiempo o habilidades para
              fortalecer proyectos educativos, comunitarios, tecnologicos y sociales.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <p className="text-2xl font-semibold text-[#10233f]">4</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  areas iniciales de participacion
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <p className="text-2xl font-semibold text-[#10233f]">Flexible</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  segun tiempo y habilidades reales
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <p className="text-2xl font-semibold text-[#10233f]">Real</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  proyectos con utilidad concreta
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Enfoque de participaci&oacute;n
                </span>
                <HeartHandshake className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                El voluntariado no debe depender de improvisaci&oacute;n. Debe tener roles claros, seguimiento y respeto por el tiempo de todos.
              </p>

              <div className="mt-10 grid gap-3">
                {principles.map((principle) => (
                  <div
                    className="grid grid-cols-[36px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                    key={principle}
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/10">
                      <ShieldCheck className="size-5 text-[#d7e7f6]" />
                    </div>
                    <p className="leading-7 text-[#c9d8e8]">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>&Aacute;reas de apoyo</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              No todo voluntariado se ve igual.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Algunas personas pueden programar. Otras pueden ense&ntilde;ar, coordinar, escribir,
            dise&ntilde;ar, documentar, contactar aliados o acompa&ntilde;ar proyectos. Todo puede servir si se ordena bien.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tracks.map((track) => (
            <TrackCard
              description={track.description}
              icon={track.icon}
              key={track.title}
              title={track.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Formas de aportar</SectionLabel>
              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Ayudar tambi&eacute;n necesita dise&ntilde;o.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                La idea es evitar participaciones sueltas sin continuidad. Cada persona debe poder
                entender donde aporta, que se espera y como se dara seguimiento.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {waysToHelp.map((item) => (
                <HelpCard icon={item.icon} key={item.title} text={item.text} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Expectativas</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Mejor poco y constante que mucho y desordenado.
            </h2>
          </div>

          <div className="grid gap-4">
            {expectations.map((item, index) => (
              <Card className="border-[#d7dedf] bg-white/75 shadow-sm" key={item.title}>
                <CardContent className="grid gap-4 p-6 md:grid-cols-[72px_1fr]">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-[#425875]">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-6 shadow-sm md:p-8">
            <CalendarCheck className="mb-8 size-8 text-[#10233f]" />

            <h2 className="font-[var(--font-serif)] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-6xl">
              Cu&eacute;ntanos c&oacute;mo quieres participar.
            </h2>

            <p className="mt-6 leading-8 text-[#425875]">
              Este formulario sirve para entender tu perfil, disponibilidad e intereses. Despu&eacute;s
              se revisar&aacute; si existe una actividad, proyecto o grupo donde tu apoyo pueda tener sentido.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-[#60738c]">
              <div className="flex gap-3">
                <Lightbulb className="mt-0.5 size-5 shrink-0 text-[#10233f]" />
                <p>No necesitas saber programar para participar.</p>
              </div>

              <div className="flex gap-3">
                <Users className="mt-0.5 size-5 shrink-0 text-[#10233f]" />
                <p>Tambien cuentan habilidades de comunicacion, organizacion, ense&ntilde;anza y seguimiento.</p>
              </div>

              <div className="flex gap-3">
                <ArrowRight className="mt-0.5 size-5 shrink-0 text-[#10233f]" />
                <p>La asignacion dependera de proyectos activos y disponibilidad real.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm md:p-6">
            <VolunteerApplicationForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}