import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  School,
  Search,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { VocationalStatusControl } from "@/components/admin/vocational-status-control";
import { requireAdminAccess } from "@/lib/admin/access";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Admin Vocacional",
  description: "Tablero interno de seguimiento para Puente Vocacional 2026.",
};

export const dynamic = "force-dynamic";

type Submission = {
  id: string;
  participant_type: "school" | "mentor" | "student";
  full_name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  city: string | null;
  role_or_career: string | null;
  interest_areas: string[] | null;
  message: string | null;
  preferred_contact_method: string;
  status: string;
  created_at: string;
  updated_at: string | null;
};

type PageSearchParams = {
  type?: string;
  status?: string;
};

type Filters = {
  type: string;
  status: string;
};

const participantLabels: Record<string, string> = {
  all: "Todos",
  school: "Preparatorias",
  mentor: "Mentores",
  student: "Estudiantes",
};

const statusLabels: Record<string, string> = {
  all: "Todos",
  new: "Nuevo",
  reviewed: "Revisado",
  contacted: "Contactado",
  scheduled: "Agendado",
  closed: "Cerrado",
};

const allowedTypes = new Set(["all", "school", "mentor", "student"]);
const allowedStatuses = new Set(["all", "new", "reviewed", "contacted", "scheduled", "closed"]);

function normalizeFilter(value: string | undefined, allowed: Set<string>) {
  if (!value) {
    return "all";
  }

  return allowed.has(value) ? value : "all";
}

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

function formatParticipantType(type: Submission["participant_type"]) {
  return participantLabels[type] ?? type;
}

function formatStatus(status: string) {
  return statusLabels[status] ?? status;
}

function formatDate(value: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function countByType(submissions: Submission[], type: Submission["participant_type"]) {
  return submissions.filter((submission) => submission.participant_type === type).length;
}

function countAreas(submissions: Submission[]) {
  const counts = new Map<string, number>();

  for (const submission of submissions) {
    for (const area of submission.interest_areas ?? []) {
      counts.set(area, (counts.get(area) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([area, count]) => ({ area, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

function countStatuses(submissions: Submission[]) {
  const counts = new Map<string, number>();

  for (const submission of submissions) {
    counts.set(submission.status, (counts.get(submission.status) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([status, count]) => ({ status, count }))
    .sort((a, b) => b.count - a.count);
}

async function getSubmissions(filters: Filters) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return {
      submissions: [] as Submission[],
      error: "Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.",
    };
  }

  let query = supabase
    .from("vocational_interest_submissions")
    .select(
      "id, participant_type, full_name, email, phone, organization, city, role_or_career, interest_areas, message, preferred_contact_method, status, created_at, updated_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);

  if (filters.type !== "all") {
    query = query.eq("participant_type", filters.type);
  }

  if (filters.status !== "all") {
    query = query.eq("status", filters.status);
  }

  const { data, error } = await query;

  if (error) {
    return {
      submissions: [] as Submission[],
      error: error.message,
    };
  }

  return {
    submissions: (data ?? []) as Submission[],
    error: null,
  };
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

function FilterPanel({ filters }: { filters: Filters }) {
  return (
    <Card className="mb-8 border-[#d7dedf] bg-white/78 shadow-sm">
      <CardContent className="p-5">
        <form className="grid gap-4 md:grid-cols-[1fr_1fr_auto_auto]" method="get">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#10233f]">Tipo</span>
            <select
              className="min-h-11 rounded-2xl border border-[#d7dedf] bg-white px-4 text-sm text-[#10233f]"
              defaultValue={filters.type}
              name="type"
            >
              {Object.entries(participantLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#10233f]">Estado</span>
            <select
              className="min-h-11 rounded-2xl border border-[#d7dedf] bg-white px-4 text-sm text-[#10233f]"
              defaultValue={filters.status}
              name="status"
            >
              {Object.entries(statusLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <button
            className="inline-flex min-h-11 items-center justify-center self-end rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            type="submit"
          >
            Filtrar
            <Search className="ml-2 size-4" />
          </button>

          <Link
            className="inline-flex min-h-11 items-center justify-center self-end rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
            href="/admin/vocacional"
          >
            Limpiar
          </Link>
        </form>
      </CardContent>
    </Card>
  );
}

export default async function AdminVocacionalPage({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}) {
  await requireAdminAccess("/admin/vocacional");

  const params = await searchParams;
  const filters = {
    type: normalizeFilter(params.type, allowedTypes),
    status: normalizeFilter(params.status, allowedStatuses),
  };

  const { submissions, error } = await getSubmissions(filters);

  const areas = countAreas(submissions);
  const statuses = countStatuses(submissions);
  const recent = submissions.slice(0, 20);

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#10233f] px-4 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            href="/api/admin/vocational/export"
          >
            Exportar CSV
          </a>

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
              Tablero interno
            </p>

            <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Puente Vocacional 2026
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Seguimiento operativo de registros recibidos. Los filtros permiten revisar
            registros por tipo de participante y estado de seguimiento.
          </p>
        </div>

        <FilterPanel filters={filters} />

        {error ? (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="p-5">
              <p className="font-semibold text-red-900">No se pudieron cargar registros.</p>
              <p className="mt-2 text-sm leading-6 text-red-800">{error}</p>
            </CardContent>
          </Card>
        ) : null}

        <div className="mb-5 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#60738c]">
          Mostrando {submissions.length} registros con tipo "{participantLabels[filters.type]}" y estado "{statusLabels[filters.status]}".
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            description="Registros cargados con los filtros actuales."
            icon={ClipboardList}
            title="Total"
            value={submissions.length.toString()}
          />
          <MetricCard
            description="Escuelas o representantes institucionales."
            icon={School}
            title="Preparatorias"
            value={countByType(submissions, "school").toString()}
          />
          <MetricCard
            description="Universitarios, profesionistas o perfiles orientadores."
            icon={BriefcaseBusiness}
            title="Mentores"
            value={countByType(submissions, "mentor").toString()}
          />
          <MetricCard
            description="Alumnos interesados en recibir orientacion o recursos."
            icon={GraduationCap}
            title="Estudiantes"
            value={countByType(submissions, "student").toString()}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                  <BadgeCheck className="size-5 text-[#10233f]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    Areas vocacionales
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">
                    Intereses mas seleccionados.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {areas.length > 0 ? (
                  areas.map((item) => (
                    <div
                      className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
                      key={item.area}
                    >
                      <p className="text-sm font-medium text-[#10233f]">{item.area}</p>
                      <span className="rounded-full bg-[#10233f] px-3 py-1 text-xs font-semibold text-white">
                        {item.count}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#60738c]">
                    Aun no hay areas registradas con estos filtros.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                  <CalendarDays className="size-5 text-[#10233f]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    Estados
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">
                    Distribucion actual de seguimiento.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {statuses.length > 0 ? (
                  statuses.map((item) => (
                    <div
                      className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
                      key={item.status}
                    >
                      <p className="text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
                        {item.count}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#60738c]">
                        {formatStatus(item.status)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#60738c]">
                    Aun no hay estados registrados con estos filtros.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-[#d7dedf] bg-white/78 shadow-sm">
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                <Users className="size-5 text-[#10233f]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                  Registros recientes
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Ultimos registros recibidos con los filtros actuales.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#d7dedf] text-xs uppercase tracking-[0.16em] text-[#60738c]">
                    <th className="py-3 pr-4">Fecha</th>
                    <th className="py-3 pr-4">Tipo</th>
                    <th className="py-3 pr-4">Nombre</th>
                    <th className="py-3 pr-4">Correo</th>
                    <th className="py-3 pr-4">Organizacion</th>
                    <th className="py-3 pr-4">Ciudad</th>
                    <th className="py-3 pr-4">Estado</th>
                    <th className="py-3 pr-4">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.length > 0 ? (
                    recent.map((submission) => (
                      <tr className="border-b border-[#edf0f0]" key={submission.id}>
                        <td className="py-4 pr-4 text-[#60738c]">
                          {formatDate(submission.created_at)}
                        </td>
                        <td className="py-4 pr-4 font-medium text-[#10233f]">
                          {formatParticipantType(submission.participant_type)}
                        </td>
                        <td className="py-4 pr-4 text-[#10233f]">{submission.full_name}</td>
                        <td className="py-4 pr-4 text-[#425875]">{submission.email}</td>
                        <td className="py-4 pr-4 text-[#425875]">
                          {submission.organization ?? "-"}
                        </td>
                        <td className="py-4 pr-4 text-[#425875]">
                          {submission.city ?? "-"}
                        </td>
                        <td className="py-4 pr-4">
                          <span className="rounded-full border border-[#d7dedf] bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-[#425875]">
                            {formatStatus(submission.status)}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          <VocationalStatusControl
                            currentStatus={submission.status}
                            id={submission.id}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-6 text-[#60738c]" colSpan={8}>
                        No hay registros con estos filtros.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteShell>
  );
}