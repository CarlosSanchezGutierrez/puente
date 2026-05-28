import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { TeamPhoto } from "@/components/team/team-photo";
import { ExternalAdvisorySection } from "@/components/team/external-advisory-section";

export const metadata = {
  title: "Equipo | Puente Impacto",
  description:
    "Equipo de Puente Impacto: software, datos, automatización, operación, documentación, ingeniería aplicada y proyectos sociales.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Equipo | Puente Impacto",
    description:
      "Perfiles del equipo que construye software gratuito para ONG, proyectos sociales, sustentables y eventos educativos.",
    url: "https://puenteimpacto.org/nosotros",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Equipo de Puente Impacto",
      },
    ],
  },
};

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  initials: string;
  photoSrc?: string;
  description: string;
  education: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
  cvHref?: string;
  highlights: string[];
  tags: string[];
  icon: LucideIcon;
};

const team: TeamMember[] = [
  {
    name: "Carlos Sánchez Gutiérrez",
    role: "Software, datos y arquitectura",
    focus: "Dirección técnica / producto / documentación",
    initials: "CS",
    photoSrc: "/team/carlos-sanchez-gutierrez.jpg",
    description:
      "Diseña y construye sistemas digitales con enfoque en operación, datos, arquitectura, documentación y automatización.",
    education:
      "Ingeniería en Tecnologías Computacionales - Tecnológico de Monterrey",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/carlos-sanchez-gutierrez-tec/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/CarlosSanchezGutierrez",
        external: true,
      },
    ],
    cvHref: "/cv/carlos-sanchez-gutierrez-cv.pdf",
    highlights: [
      "CEMEX - Data Science Intern en plataformas globales de datos",
      "Santander - Plataforma de analítica operativa",
      "IEEE - Sistema con IA + IoT",
      "Oracle Cloud Infrastructure, Data Platform y AI Foundations",
      "Scrum Master y Product Owner",
    ],
    tags: ["Software", "Datos", "Arquitectura", "Cloud", "Automatización"],
    icon: Database,
  },
  {
    name: "Leonel Francisco Bailón Sifuentes",
    role: "Desarrollo, automatización e infraestructura",
    focus: "Full stack / redes / soporte técnico",
    initials: "LB",
    photoSrc: "/team/leonel-francisco-bailon-sifuentes.jpg",
    description:
      "Desarrolla soluciones full stack, automatización, redes e infraestructura técnica para convertir necesidades operativas en sistemas utilizables.",
    education:
      "Ingeniería en Tecnologías Computacionales - Tecnológico de Monterrey",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/leonelbailonsifuentes/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/herrdelta83",
        external: true,
      },
    ],
    cvHref: "/cv/leonel-francisco-bailon-sifuentes-cv.pdf",
    highlights: [
      "Profucom - IT Support / Automation & Processes Development",
      "QuoteMaster Pro - AI-powered sales quoting orchestrator",
      "Santander - Backend TypeScript/Node.js + Unity training game",
      "Velatia - Network Design (#1 Ranked Team)",
      "HackMTY 2025 - Wallet Mobile App con Flutter",
    ],
    tags: ["Full Stack", "Automatización", "Redes", "DevOps", "Soporte técnico"],
    icon: Code2,
  },
  {
    name: "Lehi Salvador Rangel Cárdenas",
    role: "Operación, procesos y gestión",
    focus: "Seguimiento / negocio / documentación",
    initials: "LS",
    photoSrc: undefined,
    description:
      "Aporta criterio de operación, gestión, documentación y seguimiento para conectar tecnología con necesidades reales.",
    education: "Ingeniería Industrial - Tecnológico de Monterrey",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/lehi-salvador/",
        external: true,
      },
    ],
    cvHref: undefined,
    highlights: [
      "Sabor a Mí - Operación de negocio familiar",
      "Cooper / T. Smith - Experiencia empresarial",
      "Salva Exclusive Caps - Emprendimiento",
      "Gestión, documentación y seguimiento operativo",
      "Apoyo en aterrizaje de procesos y necesidades de negocio",
    ],
    tags: ["Operación", "Procesos", "Gestión", "Documentación", "Negocio"],
    icon: Network,
  },
  {
    name: "Maximiliano Lozano Suárez",
    role: "Ingeniería e innovación aplicada",
    focus: "Investigación / validación técnica / sistemas físicos",
    initials: "ML",
    photoSrc: "/team/maximiliano-lozano-suarez.jpg",
    description:
      "Aporta criterio de ingeniería, investigación e innovación aplicada para evaluar soluciones con mayor profundidad técnica.",
    education: "Ingeniería en Mecatrónica - Tecnológico de Monterrey",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maximiliano-lozano-suarez-161743339/",
        external: true,
      },
    ],
    cvHref: "/cv/maximiliano-lozano-suarez-cv.pdf",
    highlights: [
      "Líder del Mañana - Tec de Monterrey",
      "McGill University - Estancia de investigación en Canadá",
      "Degas Café - Proyecto sostenible",
      "LARC & LARS 2025 - Competencias internacionales",
      "IPECO - Maintenance Intern",
    ],
    tags: ["Mecatrónica", "Investigación", "Innovación", "Robótica", "Sostenibilidad"],
    icon: Layers3,
  },
];

const capabilityAreas = [
  {
    title: "Software y datos",
    description:
      "Páginas web, apps, bases de datos, formularios, dashboards, automatización e integraciones.",
    icon: Code2,
  },
  {
    title: "Operación y gestión",
    description:
      "Levantamiento de necesidades, documentación, seguimiento, priorización y orden operativo.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Ingeniería aplicada",
    description:
      "Criterio técnico, investigación, validación de soluciones, sistemas físicos e innovación responsable.",
    icon: GraduationCap,
  },
];

const workingPrinciples = [
  "Escuchar primero y definir bien el problema.",
  "Construir solo lo que tenga sentido para la organización o escuela.",
  "Documentar para que el proyecto pueda usarse después de la entrega.",
  "Mantener alcances claros, sostenibles y revisables.",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
      {children}
    </p>
  );
}

function ExternalButton({
  href,
  children,
  external = true,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "inline-flex min-h-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-4 text-xs font-semibold text-[#10233f] transition hover:bg-white";

  if (external) {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <a className={className} href={href} target="_blank">
      {children}
    </a>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const Icon = member.icon;

  return (
    <article className="flex min-h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#d7dedf] bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <div className="grid md:grid-cols-[0.82fr_1.18fr]">
        <div className="min-h-[260px] border-b border-[#d7dedf] md:border-b-0 md:border-r">
          {member.photoSrc ? (
            <TeamPhoto alt={`Foto de ${member.name}`} initials={member.initials} src={member.photoSrc} />
          ) : (
            <div className="flex h-full min-h-[260px] w-full items-center justify-center bg-[#f7f4ed]">
              <div className="flex size-24 items-center justify-center rounded-full border border-[#d7dedf] bg-white text-2xl font-semibold tracking-[0.16em] text-[#10233f] shadow-sm">
                {member.initials}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#10233f]">{member.role}</p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#526981]">
                {member.focus}
              </p>
            </div>

            <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]">
              <Icon className="size-5 text-[#10233f]" />
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#425875]">{member.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {member.links.map((link) => (
              <ExternalButton external={link.external} href={link.href} key={link.href}>
                {link.label}
                <ExternalLink className="ml-2 size-3.5" />
              </ExternalButton>
            ))}

            {member.cvHref ? (
              <ExternalButton external={false} href={member.cvHref}>
                Ver CV
                <FileText className="ml-2 size-3.5" />
              </ExternalButton>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 pt-0 md:p-6 md:pt-0">
        <div className="mt-5 grid gap-2 border-t border-[#d7dedf] pt-5">
          {member.highlights.map((highlight) => (
            <div className="grid grid-cols-[20px_1fr] gap-3" key={highlight}>
              <BadgeCheck className="mt-1 size-4 text-[#10233f]" />
              <p className="text-sm leading-6 text-[#425875]">{highlight}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {member.tags.map((tag) => (
            <span
              className="rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-1.5 text-xs font-semibold text-[#425875]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 border-t border-[#d7dedf] pt-4 text-sm font-medium leading-6 text-[#526981]">
          {member.education}
        </p>
      </div>
    </article>
  );
}

function CapabilityCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="rounded-[1.35rem] border border-[#d7dedf] bg-white/75 p-5 shadow-sm">
      <div className="mb-5 flex size-10 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]">
        <Icon className="size-5 text-[#10233f]" />
      </div>

      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#425875]">{description}</p>
    </article>
  );
}

export default function NosotrosPage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <SectionLabel>Equipo</SectionLabel>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
              Equipo que construye software, operación y proyectos educativos.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875]">
              Puente Impacto trabaja con perfiles de software, datos, operación, documentación e ingeniería aplicada. La página presenta qué aporta cada integrante, sin inflar credenciales ni prometer más de lo que se puede sostener.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                href="#equipo"
              >
                Ver equipo
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                href="/contacto"
              >
                Contactar
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
              <ShieldCheck className="size-4 text-[#10233f]" />
              Forma de trabajo
            </div>

            <p className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#10233f]">
              Primero se entiende la necesidad. Después se define qué herramienta conviene construir.
            </p>

            <div className="mt-6 grid gap-2">
              {workingPrinciples.map((principle) => (
                <div
                  className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-4 py-3 text-sm font-medium leading-6 text-[#425875]"
                  key={principle}
                >
                  {principle}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-3">
            {capabilityAreas.map((area) => (
              <CapabilityCard
                description={area.description}
                icon={area.icon}
                key={area.title}
                title={area.title}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16" id="equipo">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Perfiles</SectionLabel>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-5xl">
                Integrantes del equipo.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#526981]">
              Cada perfil se presenta por lo que aporta al proyecto: desarrollo, datos, operación, documentación, ingeniería o gestión.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-[#10233f] p-6 text-white shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                Salva Systems
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
                Base técnica y operativa del equipo.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-white/80">
                Parte del equipo también trabaja desde Salva Systems, una consultora de software. Puente Impacto toma esa experiencia para apoyar proyectos sociales, educativos y comunitarios con herramientas digitales concretas.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#10233f] transition hover:bg-[#f3efe6]"
                  href="https://salvasystems.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver Salva Systems
                  <ExternalLink className="ml-2 size-4" />
                </a>

                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/15"
                  href="/contacto"
                >
                  Contactar al equipo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ExternalAdvisorySection />
      </main>
    </SiteShell>
  );
}