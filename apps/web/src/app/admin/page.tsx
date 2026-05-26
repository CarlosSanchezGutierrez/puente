import {
  ArrowRight,
  ClipboardList,
  Download,
  GraduationCap,
  Mail,
  RadioTower,
  ShieldCheck,
  Users,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { requireAdminAccess } from "@/lib/admin/access";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Admin",
  description: "Hub interno de administracion de Puente Impacto.",
};

export const dynamic = "force-dynamic";

type AdminCounts = {
  vocationalTotal: number;
  vocationalSchools: number;
  vocationalMentors: number;
  vocationalStudents: number;
  fieldServicesTotal: number;
  fieldServicesAudiovisual: number;
  fieldServicesTechnical: number;
  fieldServicesBoth: number;
  fieldServicesDrone: number;
  contactTotal: number;
  contactNgos: number;
  contactPrograms: number;
  contactServices: number;
  contactResearch: number;
  error: string | null;
};

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

async function countRows(
  table: string,
  filter?: {
    column: string;
    value: string | boolean;
  },
) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.");
  }

  let query = supabase
    .from(table)
    .select("id", {
      count: "exact",
      head: true,
    });

  if (filter) {
    query = query.eq(filter.column, filter.value);
  }

  const { count, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return count ?? 0;
}

async function getCounts(): Promise<AdminCounts> {
  try {
    const [
      vocationalTotal,
      vocationalSchools,
      vocationalMentors,
      vocationalStudents,
      fieldServicesTotal,
      fieldServicesAudiovisual,
      fieldServicesTechnical,
      fieldServicesBoth,
      fieldServicesDrone,
      contactTotal,
      contactNgos,
      contactPrograms,
      contactServices,
      contactResearch,
    ] = await Promise.all([
      countRows("vocational_interest_submissions"),
      countRows("vocational_interest_submissions", { column: "participant_type", value: "school" }),
      countRows("vocational_interest_submissions", { column: "participant_type", value: "mentor" }),
      countRows("vocational_interest_submissions", { column: "participant_type", value: "student" }),
      countRows("field_service_requests"),
      countRows("field_service_requests", { column: "request_type", value: "audiovisual" }),
      countRows("field_service_requests", { column: "request_type", value: "technical" }),
      countRows("field_service_requests", { column: "request_type", value: "both" }),
      countRows("field_service_requests", { column: "needs_drone", value: true }),
      countRows("contact_submissions"),
      countRows("contact_submissions", { column: "interest_type", value: "ngo" }),
      countRows("contact_submissions", { column: "interest_type", value: "program" }),
      countRows("contact_submissions", { column: "interest_type", value: "service" }),
      countRows("contact_submissions", { column: "interest_type", value: "research" }),
    ]);

    return {
      vocationalTotal,
      vocationalSchools,
      vocationalMentors,
      vocationalStudents,
      fieldServicesTotal,
      fieldServicesAudiovisual,
      fieldServicesTechnical,
      fieldServicesBoth,
      fieldServicesDrone,
      contactTotal,
      contactNgos,
      contactPrograms,
      contactServices,
      contactResearch,
      error: null,
    };
  } catch (error) {
    return {
      vocationalTotal: 0,
      vocationalSchools: 0,
      vocationalMentors: 0,
      vocationalStudents: 0,
      fieldServicesTotal: 0,
      fieldServicesAudiovisual: 0,
      fieldServicesTechnical: 0,
      fieldServicesBoth: 0,
      fieldServicesDrone: 0,
      contactTotal: 0,
      contactNgos: 0,
      contactPrograms: 0,
      contactServices: 0,
      contactResearch: 0,
      error: error instanceof Error ? error.message : "No se pudieron cargar metricas.",
    };
  }
}

function MetricCard({
  title,
  value,
  description,
  icon: Icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
      <CardContent className="p-5">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
            <Icon className="size-5 text-[#10233f]" />
          </div>
          <p className="text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
            {value}
          </p>
        </div>

        <h3 className="font-semibold text-[#10233f]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#60738c]">{description}</p>
      </CardContent>
    </Card>
  );
}

function AdminAreaCard({
  title,
  description,
  href,
  exportHref,
  icon: Icon,
  metrics,
}: {
  title: string;
  description: string;
  href: string;
  exportHref: string;
  icon: LucideIcon;
  metrics: Array<{
    label: string;
    value: number;
  }>;
}) {
  return (
    <Card className="h-full border-[#d7dedf] bg-white/78 shadow-sm">
      <CardContent className="flex h-full flex-col p-6 md:p-7">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#10233f]">
            <Icon className="size-6 text-white" />
          </div>

          <span className="rounded-full border border-[#d7dedf] bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-[#60738c]">
            Interno
          </span>
        </div>

        <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
          {title}
        </h2>

        <p className="mt-4 flex-1 leading-7 text-[#425875]">{description}</p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div
              className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
              key={metric.label}
            >
              <p className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                {metric.value}
              </p>
              <p className="mt-1 text-sm leading-6 text-[#60738c]">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            href={href}
          >
            Abrir tablero
            <ArrowRight className="ml-2 size-4" />
          </Link>

          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
            href={exportHref}
          >
            Exportar CSV
            <Download className="ml-2 size-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function AdminPage() {
  await requireAdminAccess("/admin");

  const counts = await getCounts();

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <form action="/api/admin/logout" method="post">
            <button
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
              type="submit"
            >
              Cerrar sesion
            </button>
          </form>
        </div>

        <div className="mb-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
              Administracion interna
            </p>

            <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Hub operativo de Puente.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Acceso rapido a tableros, registros, seguimiento y exportaciones.
          </p>
        </div>

        {counts.error ? (
          <Card className="mb-8 border-yellow-200 bg-yellow-50">
            <CardContent className="p-5">
              <p className="font-semibold text-yellow-900">Metricas incompletas.</p>
              <p className="mt-2 text-sm leading-6 text-yellow-800">{counts.error}</p>
            </CardContent>
          </Card>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            description="Registros vocacionales recibidos."
            icon={GraduationCap}
            title="Vocacional"
            value={counts.vocationalTotal.toString()}
          />
          <MetricCard
            description="Solicitudes de servicios de campo."
            icon={RadioTower}
            title="Servicios"
            value={counts.fieldServicesTotal.toString()}
          />
          <MetricCard
            description="Mensajes generales de contacto."
            icon={Mail}
            title="Contacto"
            value={counts.contactTotal.toString()}
          />
          <MetricCard
            description="Solicitudes que piden evaluar dron."
            icon={Wifi}
            title="Dron"
            value={counts.fieldServicesDrone.toString()}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <AdminAreaCard
            description="Seguimiento de preparatorias, mentores, estudiantes, areas vocacionales, estados y conexiones."
            exportHref="/api/admin/vocational/export"
            href="/admin/vocacional"
            icon={Users}
            metrics={[
              { label: "Preparatorias", value: counts.vocationalSchools },
              { label: "Mentores", value: counts.vocationalMentors },
              { label: "Estudiantes", value: counts.vocationalStudents },
              { label: "Total", value: counts.vocationalTotal },
            ]}
            title="Vocacional"
          />

          <AdminAreaCard
            description="Seguimiento de solicitudes de cobertura audiovisual, clinica tecnica, dron, red, WiFi, camaras y documentacion."
            exportHref="/api/admin/field-services/export"
            href="/admin/servicios"
            icon={ClipboardList}
            metrics={[
              { label: "Audiovisual", value: counts.fieldServicesAudiovisual },
              { label: "Tecnica", value: counts.fieldServicesTechnical },
              { label: "Ambas", value: counts.fieldServicesBoth },
              { label: "Dron", value: counts.fieldServicesDrone },
            ]}
            title="Servicios"
          />

          <AdminAreaCard
            description="Seguimiento de mensajes generales enviados desde la pagina de contacto."
            exportHref="/api/admin/contact/export"
            href="/admin/contacto"
            icon={Mail}
            metrics={[
              { label: "ONGs", value: counts.contactNgos },
              { label: "Programas", value: counts.contactPrograms },
              { label: "Servicios", value: counts.contactServices },
              { label: "Investigacion", value: counts.contactResearch },
            ]}
            title="Contacto"
          />
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#d7dedf] bg-[#fbfaf7] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[52px_1fr] md:items-start">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-white">
              <ShieldCheck className="size-6 text-[#10233f]" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                Uso interno
              </h2>
              <p className="mt-3 leading-7 text-[#425875]">
                Este hub es solo para administracion operativa. Los tableros no estan en el sitemap
                y requieren acceso interno mediante contrasena configurada en variables de entorno.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
                  href="/eventos/puente-vocacional-2026/registro"
                >
                  Registro vocacional
                </Link>

                <Link
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
                  href="/servicios/solicitud"
                >
                  Solicitud de servicios
                </Link>

                <Link
                  className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
                  href="/contacto"
                >
                  Contacto publico
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}