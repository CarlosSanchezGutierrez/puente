import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  Handshake,
  Layers3,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Nosotros",
  description:
    "Equipo de Puente Impacto y Salva Systems: software, datos, arquitectura, operaciones, ingeniería, automatización y proyectos sociales.",
};

type TeamMember = {
  name: string;
  role: string;
  strategicRole: string;
  initials: string;
  description: string;
  education: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
  cvHref: string;
  highlights: string[];
  tags: string[];
  icon: LucideIcon;
};

const team: TeamMember[] = [
  {
    name: "Carlos Sánchez Gutiérrez",
    role: "Digital Systems & Data Lead",
    strategicRole: "Forward Deployed Engineer / Software Architect",
    initials: "CS",
    description:
      "Diseña, construye e integra sistemas digitales con enfoque en operación, datos y automatización.",
    education:
      "Ingeniería en Tecnologías Computacionales · Tecnológico de Monterrey",
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
      "CEMEX · Data Science Intern (plataformas globales de datos)",
      "Santander · Plataforma de analítica operativa",
      "IEEE · Sistema con IA + IoT",
      "Oracle Cloud Infrastructure · Data Platform · AI Foundations",
      "Scrum Master (CSM) · Product Owner",
      "English · C1",
    ],
    tags: ["Software", "Datos", "Arquitectura", "Cloud", "Automatización"],
    icon: Database,
  },
  {
    name: "Leonel Francisco Bailón Sifuentes",
    role: "Systems Engineering & Automation Lead",
    strategicRole: "Forward Deployed Engineer / Software Architect",
    initials: "LB",
    description:
      "Construye soluciones full stack, automatización, redes e infraestructura técnica para convertir necesidades operativas en sistemas utilizables.",
    education:
      "Ingeniería en Tecnologías Computacionales · Tecnológico de Monterrey",
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
    cvHref: "/cv/leonel-francisco-bail%C3%B3n-sifuentes-cv.pdf",
    highlights: [
      "Profucom · IT Support / Automation & Processes Development",
      "QuoteMaster Pro · AI-powered sales quoting orchestrator",
      "Santander · Backend TypeScript/Node.js + Unity training game",
      "Velatia · Network Design (#1 Ranked Team)",
      "HackMTY 2025 · Wallet Mobile App Flutter",
      "Lenovo Data Sales · Dell Storage & Server Certifications",
    ],
    tags: ["Full Stack", "Automatización", "Redes", "DevOps", "Soporte técnico"],
    icon: Code2,
  },
  {
    name: "Lehi Salvador Rangel Cárdenas",
    role: "Business & Operations Lead",
    strategicRole: "Project Management / Business Operations",
    initials: "LS",
    description:
      "Aterriza soluciones conectando tecnología con la operación del negocio.",
    education:
      "Ingeniería Industrial · Tecnológico de Monterrey",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/lehi-salvador/",
        external: true,
      },
    ],
    cvHref: "/cv/lehi-salvador-rangel-cardenas-cv.pdf",
    highlights: [
      "Sabor a Mí · Operación de negocio familiar",
      "Cooper / T. Smith · Experiencia empresarial",
      "Salva Exclusive Caps · Emprendimiento",
    ],
    tags: ["Operación", "Procesos", "Gestión", "Documentación", "Negocio"],
    icon: Network,
  },
  {
    name: "Maximiliano Lozano Suárez",
    role: "Engineering & Innovation Lead",
    strategicRole: "Engineering Research / Applied Innovation",
    initials: "ML",
    description:
      "Aporta profundidad técnica, estructura de ingeniería e innovación aplicada en proyectos de alto nivel.",
    education:
      "Ingeniería en Mecatrónica · Tecnológico de Monterrey",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maximiliano-lozano-suarez-161743339/",
        external: true,
      },
    ],
    cvHref: "/cv/maximiliano-lozano-suarez-cv.pdf",
    highlights: [
      "Líder del Mañana · Tec de Monterrey (beca de excelencia académica y liderazgo)",
      "McGill University · Estancia de investigación (Canadá)",
      "Degas Café · Proyecto sostenible",
      "LARC & LARS 2025 · Competencias internacionales",
      "IPECO · Maintenance Intern",
      "Técnico Analista Programador · ICEST",
    ],
    tags: ["Mecatrónica", "Investigación", "Innovación", "Robótica", "Sostenibilidad"],
    icon: Layers3,
  },
];

const operatingRoles = [
  {
    title: "Ejecución técnica diaria",
    people: "Carlos + Leonel",
    description:
      "Discovery técnico, arquitectura, desarrollo, automatización, datos, documentación técnica, soporte de implementación y construcción directa de sistemas.",
    icon: Code2,
  },
  {
    title: "Operación y project management",
    people: "Lehi",
    description:
      "Gestión, documentación, seguimiento, aterrizaje operativo, procesos, validación de necesidades y conexión entre tecnología y negocio.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Ingeniería e innovación aplicada",
    people: "Max",
    description:
      "Criterio de ingeniería, investigación aplicada, sistemas físicos, innovación técnica, mecatrónica y validación de proyectos de mayor complejidad.",
    icon: GraduationCap,
  },
];

const trustPrinciples = [
  "Todos formamos parte de Salva Systems, nuestra consultora de software.",
  "Puente Impacto aprovecha esa capacidad técnica para crear infraestructura social, educativa y comunitaria.",
  "No vendemos improvisación: trabajamos con documentación, arquitectura, seguimiento y entregables claros.",
  "Carlos y Leonel ejecutan la mayor parte del trabajo técnico día a día.",
  "Lehi y Max complementan el equipo con operación, gestión, ingeniería, investigación y criterio multidisciplinario.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
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
  children: React.ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        className="inline-flex min-h-9 items-center justify-center rounded-full border border-cyan-400/35 bg-cyan-400/10 px-4 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/15"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className="inline-flex min-h-9 items-center justify-center rounded-full border border-cyan-400/35 bg-cyan-400/10 px-4 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/15"
      href={href}
      target="_blank"
    >
      {children}
    </Link>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const Icon = member.icon;

  return (
    <Card className="overflow-hidden border-cyan-400/20 bg-[#08111f] text-white shadow-sm">
      <CardContent className="flex h-full flex-col p-0">
        <div className="flex aspect-[1.55] items-center justify-center border-b border-cyan-400/15 bg-[#0b1424]">
          <div className="flex size-24 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/5 text-2xl font-semibold tracking-[0.18em] text-cyan-300">
            {member.initials}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-cyan-300">
                {member.role}
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                {member.strategicRole}
              </p>
            </div>

            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5">
              <Icon className="size-5 text-cyan-300" />
            </div>
          </div>

          <p className="mt-6 leading-7 text-slate-300">{member.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {member.links.map((link) => (
              <ExternalButton external={link.external} href={link.href} key={link.href}>
                {link.label}
                <ExternalLink className="ml-2 size-3.5" />
              </ExternalButton>
            ))}

            <ExternalButton external={false} href={member.cvHref}>
              Ver CV
              <FileText className="ml-2 size-3.5" />
            </ExternalButton>
          </div>

          <div className="mt-7 grid gap-3 border-t border-cyan-400/15 pt-6">
            {member.highlights.map((highlight) => (
              <div className="grid grid-cols-[22px_1fr] gap-3" key={highlight}>
                <BadgeCheck className="mt-1 size-4 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-300">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {member.tags.map((tag) => (
              <span
                className="rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-medium text-cyan-300"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 border-t border-cyan-400/15 pt-5 text-sm font-medium leading-6 text-slate-400">
            {member.education}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function RoleCard({
  title,
  people,
  description,
  icon: Icon,
}: {
  title: string;
  people: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
      <CardContent className="p-6">
        <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
          <Icon className="size-6 text-[#10233f]" />
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
          {title}
        </h3>

        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#60738c]">
          {people}
        </p>

        <p className="mt-4 leading-7 text-[#425875]">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function NosotrosPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[660px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.9fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Equipo Puente Impacto + Salva Systems
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Un equipo técnico construyendo impacto real.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Puente Impacto es una iniciativa social y tecnológica impulsada por el equipo de
              Salva Systems. Combinamos software, datos, automatización, operación, ingeniería,
              documentación y visión comunitaria para construir soluciones con seriedad.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <Code2 className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Software real</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Sistemas, datos, automatización y arquitectura.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <Building2 className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Consultoría</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Todos somos parte de Salva Systems.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <HeartIcon />
                <p className="font-semibold text-[#10233f]">Impacto</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Tecnología aplicada a organizaciones y comunidad.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Estructura de equipo
                </span>
                <ShieldCheck className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                Carlos y Leonel ejecutan la mayor parte del trabajo técnico. Lehi y Max fortalecen operación, gestión, ingeniería e innovación.
              </p>

              <div className="mt-10 grid gap-3">
                {trustPrinciples.slice(0, 4).map((principle) => (
                  <div
                    className="grid grid-cols-[36px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                    key={principle}
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/10">
                      <Handshake className="size-5 text-[#d7e7f6]" />
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
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Equipo</SectionLabel>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-6xl">
              Quiénes construyen Puente.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#60738c]">
            Perfiles públicos del equipo. Los botones de CV apuntan a archivos PDF que deben
            cargarse en <span className="font-mono">/public/cv</span>.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Responsabilidades</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Cada perfil cumple una función estratégica.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            No presentamos al equipo como una lista decorativa. La intención es que una organización
            entienda quién ejecuta, quién gestiona, quién documenta y quién aporta criterio técnico
            para que el trabajo sea confiable.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {operatingRoles.map((role) => (
            <RoleCard
              description={role.description}
              icon={role.icon}
              key={role.title}
              people={role.people}
              title={role.title}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Salva Systems</SectionLabel>
              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Puente no nace desde cero: nace desde capacidad técnica.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                Salva Systems es nuestra consultora de software. Puente Impacto usa esa misma base
                profesional para construir herramientas, documentación, diagnóstico y soluciones
                orientadas a organizaciones sociales, comunidad y educación.
              </p>
            </div>

            <div className="grid gap-3">
              {trustPrinciples.map((principle) => (
                <div
                  className="grid grid-cols-[40px_1fr] gap-4 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                  key={principle}
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                    <BadgeCheck className="size-5 text-[#d7e7f6]" />
                  </div>
                  <p className="leading-7 text-[#c9d8e8]">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#10233f] transition hover:bg-[#f3efe6]"
              href="https://salvasystems.com"
              rel="noreferrer"
              target="_blank"
            >
              Ver Salva Systems
              <ExternalLink className="ml-2 size-4" />
            </a>

            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/15"
              href="/contacto"
            >
              Contactar al equipo
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function HeartIcon() {
  return (
    <div className="mb-4 flex size-5 items-center justify-center text-[#10233f]">
      <Users className="size-5" />
    </div>
  );
}