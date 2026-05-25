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
import { TeamPhoto } from "@/components/team/team-photo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Nosotros",
  description:
    "Equipo de Puente Impacto y Salva Systems: software, datos, automatizacion, operaciones, ingenieria, documentacion y proyectos sociales.",
};

type TeamMember = {
  name: string;
  role: string;
  strategicRole: string;
  initials: string;
  photoSrc: string;
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
    name: "Carlos S\u00e1nchez Guti\u00e9rrez",
    role: "Digital Systems & Data Lead",
    strategicRole: "Software Architecture / Forward Deployed Engineering",
    initials: "CS",
    photoSrc: "/team/carlos-sanchez-gutierrez.jpg",
    description:
      "Dise\u00f1a, construye e integra sistemas digitales con enfoque en operacion, datos, arquitectura y automatizacion.",
    education:
      "Ingenier\u00eda en Tecnolog\u00edas Computacionales - Tecnol\u00f3gico de Monterrey",
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
      "Santander - Plataforma de anal\u00edtica operativa",
      "IEEE - Sistema con IA + IoT",
      "Oracle Cloud Infrastructure, Data Platform y AI Foundations",
      "Scrum Master y Product Owner",
      "English - C1",
    ],
    tags: ["Software", "Datos", "Arquitectura", "Cloud", "Automatizacion"],
    icon: Database,
  },
  {
    name: "Leonel Francisco Bail\u00f3n Sifuentes",
    role: "Systems Engineering & Automation Lead",
    strategicRole: "Software Architecture / Forward Deployed Engineering",
    initials: "LB",
    photoSrc: "/team/leonel-francisco-bailon-sifuentes.jpg",
    description:
      "Desarrolla soluciones full stack, automatizacion, redes e infraestructura tecnica para convertir necesidades operativas en sistemas utilizables.",
    education:
      "Ingenier\u00eda en Tecnolog\u00edas Computacionales - Tecnol\u00f3gico de Monterrey",
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
      "Lenovo Data Sales y Dell Storage & Server Certifications",
    ],
    tags: ["Full Stack", "Automatizacion", "Redes", "DevOps", "Soporte tecnico"],
    icon: Code2,
  },
  {
    name: "Lehi Salvador Rangel C\u00e1rdenas",
    role: "Business & Operations Lead",
    strategicRole: "Project Management / Business Operations",
    initials: "LS",
    photoSrc: "/team/lehi-salvador-rangel-cardenas.jpg",
    description:
      "Aporta criterio de operacion, gestion, documentacion y seguimiento para conectar tecnologia con necesidades reales.",
    education:
      "Ingenier\u00eda Industrial - Tecnol\u00f3gico de Monterrey",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/lehi-salvador/",
        external: true,
      },
    ],
    cvHref: "/cv/lehi-salvador-rangel-cardenas-cv.pdf",
    highlights: [
      "Sabor a M\u00ed - Operacion de negocio familiar",
      "Cooper / T. Smith - Experiencia empresarial",
      "Salva Exclusive Caps - Emprendimiento",
      "Gestion, documentacion y seguimiento operativo",
      "Apoyo en aterrizaje de procesos y necesidades de negocio",
    ],
    tags: ["Operacion", "Procesos", "Gestion", "Documentacion", "Negocio"],
    icon: Network,
  },
  {
    name: "Maximiliano Lozano Su\u00e1rez",
    role: "Engineering & Innovation Lead",
    strategicRole: "Engineering Research / Applied Innovation",
    initials: "ML",
    photoSrc: "/team/maximiliano-lozano-suarez.jpg",
    description:
      "Aporta criterio de ingenieria, investigacion e innovacion aplicada para evaluar soluciones con mayor profundidad tecnica.",
    education:
      "Ingenier\u00eda en Mecatr\u00f3nica - Tecnol\u00f3gico de Monterrey",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/maximiliano-lozano-suarez-161743339/",
        external: true,
      },
    ],
    cvHref: "/cv/maximiliano-lozano-suarez-cv.pdf",
    highlights: [
      "L\u00edder del Ma\u00f1ana - Tec de Monterrey",
      "McGill University - Estancia de investigacion en Canada",
      "Degas Caf\u00e9 - Proyecto sostenible",
      "LARC & LARS 2025 - Competencias internacionales",
      "IPECO - Maintenance Intern",
      "T\u00e9cnico Analista Programador - ICEST",
    ],
    tags: ["Mecatronica", "Investigacion", "Innovacion", "Robotica", "Sostenibilidad"],
    icon: Layers3,
  },
];

const capabilityAreas = [
  {
    title: "Arquitectura y desarrollo",
    description:
      "Diseno de sistemas, implementacion de software, integraciones, bases de datos, automatizacion y criterios tecnicos para construir con orden.",
    icon: Code2,
  },
  {
    title: "Operacion y gestion",
    description:
      "Organizacion de procesos, seguimiento, documentacion, priorizacion, levantamiento de necesidades y traduccion de problemas a planes accionables.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Ingenieria e investigacion",
    description:
      "Criterio de ingenieria aplicada, validacion tecnica, innovacion, sistemas fisicos, investigacion y analisis de soluciones de mayor complejidad.",
    icon: GraduationCap,
  },
];

const trustPrinciples = [
  "Todos formamos parte de Salva Systems, nuestra consultora de software.",
  "Puente Impacto se apoya en esa experiencia para construir soluciones sociales y educativas con una escala responsable.",
  "Cada integrante aporta desde un area distinta: desarrollo, automatizacion, operacion, gestion, documentacion, ingenieria o investigacion aplicada.",
  "Buscamos trabajar con documentacion, seguimiento, claridad tecnica y entregables comprensibles.",
  "La meta es ayudar con cuidado: escuchar primero, diagnosticar bien y construir solo lo que realmente tenga sentido.",
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
  const className =
    "inline-flex min-h-9 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-xs font-semibold text-[#10233f] transition hover:bg-white";

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
    <Card className="h-full overflow-hidden border-[#d7dedf] bg-white/78 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <CardContent className="flex h-full flex-col p-0">
        <div className="grid md:grid-cols-[0.86fr_1.14fr]">
          <div className="min-h-[280px] border-b border-[#d7dedf] md:border-b-0 md:border-r">
            <TeamPhoto alt={`Foto de ${member.name}`} initials={member.initials} src={member.photoSrc} />
          </div>

          <div className="p-6 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#0f7890]">
                  {member.role}
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#60738c]">
                  {member.strategicRole}
                </p>
              </div>

              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                <Icon className="size-5 text-[#10233f]" />
              </div>
            </div>

            <p className="mt-5 leading-7 text-[#425875]">{member.description}</p>

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
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 pt-0 md:p-7 md:pt-0">
          <div className="mt-7 grid gap-3 border-t border-[#d7dedf] pt-6">
            {member.highlights.map((highlight) => (
              <div className="grid grid-cols-[22px_1fr] gap-3" key={highlight}>
                <BadgeCheck className="mt-1 size-4 text-[#0f7890]" />
                <p className="text-sm leading-6 text-[#425875]">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {member.tags.map((tag) => (
              <span
                className="rounded-full border border-[#d7dedf] bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-[#425875]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 border-t border-[#d7dedf] pt-5 text-sm font-medium leading-6 text-[#60738c]">
            {member.education}
          </p>
        </div>
      </CardContent>
    </Card>
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
    <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
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
              Un equipo multidisciplinario construyendo con cuidado.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Puente Impacto es una iniciativa social y tecnologica impulsada por personas que tambien forman parte de Salva Systems. Combinamos software, datos, automatizacion, operacion, ingenieria, documentacion y vision comunitaria con una intencion clara: construir soluciones utiles y responsables.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <Code2 className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Software</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Sistemas, datos, automatizacion y arquitectura.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <Building2 className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Consultoria</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Base profesional desde Salva Systems.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <Users className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Comunidad</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Tecnologia aplicada a organizaciones y aprendizaje.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
            <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7c8dc]">
                  Forma de trabajo
                </span>
                <ShieldCheck className="size-6 text-[#d7e7f6]" />
              </div>

              <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                Cada integrante aporta desde una especialidad distinta. La prioridad es escuchar, ordenar y construir solo lo que realmente tenga sentido.
              </p>

              <div className="mt-10 grid gap-3">
                {trustPrinciples.slice(2).map((principle) => (
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
              Quienes construyen Puente.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#60738c]">
            Perfiles publicos del equipo. Si una foto o CV aun no esta cargado, la pagina mantiene una presentacion limpia con iniciales o enlace pendiente.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <SectionLabel>Capacidades</SectionLabel>
            <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Distintas areas, una misma intencion.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Presentamos al equipo con cuidado para que una organizacion pueda entender que tipo de criterio aporta cada integrante: desarrollo, automatizacion, operacion, documentacion, gestion, ingenieria o investigacion aplicada.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
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

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="rounded-[2rem] bg-[#10233f] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b7c8dc] md:text-sm">
                Salva Systems
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Puente se apoya en una base tecnica en crecimiento.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#c9d8e8]">
                Salva Systems es nuestra consultora de software. Puente Impacto se apoya en esa experiencia para construir herramientas, documentacion, diagnostico y soluciones orientadas a organizaciones sociales, comunidad y educacion, siempre con una escala responsable.
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