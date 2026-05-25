import { TeamTrustSection } from "@/components/home/team-trust-section";
import {
  ArrowRight,
  BookOpen,
  Braces,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Library,
  Microscope,
  Network,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Puente Systems",
    description:
      "Software, aplicaciones y herramientas digitales para organizaciones sociales, comunidades y proyectos con utilidad publica.",
    href: "/ongs",
    icon: Braces,
  },
  {
    title: "Puente Lab",
    description:
      "Investigacion aplicada, datos, prototipos y analisis para entender mejor problemas sociales y convertirlos en soluciones medibles.",
    href: "/recursos",
    icon: Microscope,
  },
  {
    title: "Puente Comunidad",
    description:
      "Biblioteca, circulos de lectura, voluntariado, mentorias, talleres y grupos de aprendizaje para estudiantes y profesionales.",
    href: "/biblioteca",
    icon: GraduationCap,
  },
  {
    title: "Puente Media",
    description:
      "Historias, entrevistas, guias y contenido educativo para explicar tecnologia, comunidad, carrera profesional e impacto social.",
    href: "/eventos",
    icon: PlayCircle,
  },
];

const operatingModel = [
  "Escuchar el problema antes de proponer tecnologia.",
  "Ordenar procesos, datos, roles y reglas con claridad.",
  "Construir herramientas simples, mantenibles y utiles.",
  "Documentar aprendizajes para que otros puedan continuar.",
];

const publicActions = [
  {
    label: "Explorar biblioteca",
    description: "Catalogo comunitario de libros tecnicos, literatura, idiomas, ciencia y desarrollo profesional.",
    href: "/biblioteca",
    icon: Library,
  },
  {
    label: "Participar como voluntario",
    description: "Sumarte en tecnologia, educacion, eventos, investigacion, contenido o apoyo operativo.",
    href: "/voluntariado",
    icon: HeartHandshake,
  },
  {
    label: "Solicitar apoyo para una ONG",
    description: "Presentar un problema social, proceso manual o necesidad digital para evaluacion.",
    href: "/ongs",
    icon: ShieldCheck,
  },
];

const principles = [
  {
    title: "Utilidad real",
    text: "No construir por apariencia. Construir porque resuelve, ordena o facilita algo concreto.",
  },
  {
    title: "Claridad operativa",
    text: "Cada proyecto necesita procesos, responsables, datos y reglas comprensibles.",
  },
  {
    title: "Acceso al conocimiento",
    text: "La tecnologia y la educacion deben estar al servicio de mas personas, no solo de perfiles privilegiados.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
      {children}
    </p>
  );
}

function ArrowLink({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const classes =
    variant === "dark"
      ? "bg-[#10233f] text-white hover:bg-[#1b365f]"
      : "border border-[#d7dedf] bg-white/75 text-[#10233f] hover:bg-white";

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-medium transition ${classes}`}
      href={href}
    >
      {children}
      <ArrowRight className="ml-2 size-4" />
    </Link>
  );
}

function PillarCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: typeof Braces;
}) {
  return (
    <Link href={href}>
      <Card className="h-full border-[#d7dedf] bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
        <CardContent className="p-6 md:p-7">
          <div className="mb-10 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
            <Icon className="size-6 text-[#10233f]" />
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-[#425875]">{description}</p>

          <p className="mt-6 inline-flex items-center text-sm font-medium text-[#10233f]">
            Ver secci&oacute;n
            <ArrowRight className="ml-2 size-4" />
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

function ActionCard({
  label,
  description,
  href,
  icon: Icon,
}: {
  label: string;
  description: string;
  href: string;
  icon: typeof Library;
}) {
  return (
    <Link
      className="grid gap-4 rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-left transition hover:bg-white/15 md:grid-cols-[48px_1fr_auto] md:items-center"
      href={href}
    >
      <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
        <Icon className="size-6 text-white" />
      </div>

      <div>
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{label}</h3>
        <p className="mt-2 leading-7 text-[#c9d8e8]">{description}</p>
      </div>

      <ArrowRight className="hidden size-5 text-[#d7e7f6] md:block" />
    </Link>
  );
}

export const metadata = {
  title: "Inicio",
  description: "Tecnologia civica, biblioteca comunitaria, voluntariado, recursos abiertos y software para impacto social.",
};
export default function Home() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Tecnolog&iacute;a c&iacute;vica, comunidad y aprendizaje aplicado
            </Badge>

            <h1 className="max-w-5xl text-balance font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Un puente entre conocimiento, comunidad y acci&oacute;n.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Puente conecta software, investigaci&oacute;n aplicada, libros, talleres y voluntariado
              para convertir buenas intenciones en proyectos sociales m&aacute;s claros, medibles y sostenibles.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ArrowLink href="/ongs">Solicitar apoyo</ArrowLink>
              <ArrowLink href="/biblioteca" variant="light">Ver biblioteca</ArrowLink>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-[#60738c] sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-white/60 p-4">
                <p className="font-semibold text-[#10233f]">Software</p>
                <p className="mt-1">Herramientas para procesos sociales.</p>
              </div>
              <div className="rounded-2xl border border-[#d7dedf] bg-white/60 p-4">
                <p className="font-semibold text-[#10233f]">Comunidad</p>
                <p className="mt-1">Lectura, talleres y voluntariado.</p>
              </div>
              <div className="rounded-2xl border border-[#d7dedf] bg-white/60 p-4">
                <p className="font-semibold text-[#10233f]">Impacto</p>
                <p className="mt-1">Problemas reales, soluciones claras.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/75 p-4 shadow-sm backdrop-blur md:p-5">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Puente OS
                </span>
                <Network className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                La tecnolog&iacute;a importa m&aacute;s cuando ayuda a ordenar, acompa&ntilde;ar y multiplicar la capacidad de servir.
              </p>

              <div className="mt-10 grid gap-3">
                {operatingModel.map((item, index) => (
                  <div
                    className="grid grid-cols-[40px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                    key={item}
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-[#d7e7f6]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="leading-7 text-[#c9d8e8]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-5">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">110</p>
                <p className="mt-2 text-sm leading-6 text-[#60738c]">
                  libros iniciales en biblioteca comunitaria
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-5">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">4</p>
                <p className="mt-2 text-sm leading-6 text-[#60738c]">
                  l&iacute;neas de trabajo para crecer sin mezclar todo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <SectionLabel>Qu&eacute; es Puente</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Una plataforma modular para construir con prop&oacute;sito.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Puente no es solo una p&aacute;gina, una biblioteca o una iniciativa de software.
            Es una estructura para conectar personas, conocimiento, herramientas y causas
            sociales con una forma de trabajo m&aacute;s ordenada.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <PillarCard
              description={pillar.description}
              href={pillar.href}
              icon={pillar.icon}
              key={pillar.title}
              title={pillar.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Acciones abiertas</SectionLabel>
              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Participar no debe ser confuso.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                La plataforma debe permitir que una persona entienda r&aacute;pido c&oacute;mo leer,
                ayudar, aprender, solicitar apoyo o sumarse a un proyecto.
              </p>
            </div>

            <div className="grid gap-3">
              {publicActions.map((action) => (
                <ActionCard
                  description={action.description}
                  href={action.href}
                  icon={action.icon}
                  key={action.label}
                  label={action.label}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Principios</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Menos discurso. M&aacute;s criterio.
            </h2>
          </div>

          <div className="grid gap-4">
            {principles.map((principle) => (
              <Card className="border-[#d7dedf] bg-white/75 shadow-sm" key={principle.title}>
                <CardContent className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:items-center">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-[#10233f]" />
                    <h3 className="font-semibold tracking-[-0.02em] text-[#10233f]">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="leading-7 text-[#425875]">{principle.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-6 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <div className="mb-5 flex gap-3 text-[#10233f]">
                <Sparkles className="size-6" />
                <BookOpen className="size-6" />
                <HeartHandshake className="size-6" />
              </div>

              <h2 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
                Empezar peque&ntilde;o tambi&eacute;n puede ser serio.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#425875]">
                Puente puede iniciar con una biblioteca, formularios, eventos y recursos gratuitos,
                pero la direcci&oacute;n es mayor: crear infraestructura cultural, educativa y tecnol&oacute;gica
                para proyectos con valor social.
              </p>
            </div>

            <div className="grid gap-3">
              <ArrowLink href="/voluntariado">Quiero participar</ArrowLink>
              <ArrowLink href="/contacto" variant="light">Contactar a Puente</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    
      <TeamTrustSection />
</SiteShell>
  );
}