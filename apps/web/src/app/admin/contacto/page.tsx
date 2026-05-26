import {
  BadgeCheck,
  ClipboardList,
  Download,
  Mail,
  MessageSquareText,
  Search,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { ContactStatusControl } from "@/components/admin/contact-status-control";
import { requireAdminAccess } from "@/lib/admin/access";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Admin Contacto",
  description: "Tablero interno de mensajes generales de contacto.",
};

export const dynamic = "force-dynamic";

type ContactSubmission = {
  id: string;
  interest_type: "general" | "ngo" | "program" | "service" | "research" | "team";
  full_name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  role_or_context: string | null;
  message: string;
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

const interestLabels: Record<string, string> = {
  all: "Todos",
  general: "General",
  ngo: "ONGs",
  program: "Programas",
  service: "Servicios",
  research: "Investigacion",
  team: "Equipo",
};

const statusLabels: Record<string, string> = {
  all: "Todos",
  new: "Nuevo",
  reviewed: "Revisado",
  contacted: "Contactado",
  scheduled: "Agendado",
  closed: "Cerrado",
};

const allowedTypes = new Set(["all", "general", "ngo", "program", "service", "research", "team"]);
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

function formatInterest(type: string) {
  return interestLabels[type] ?? type;
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

function countByType(submissions: ContactSubmission[], type: ContactSubmission["interest_type"]) {
  return submissions.filter((submission) => submission.interest_type === type).length;
}

function countStatuses(submissions: ContactSubmission[]) {
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
      submissions: [] as ContactSubmission[],
      error: "Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.",
    };
  }

  let query = supabase
    .from("contact_submissions")
    .select(
      "id, interest_type, full_name, email, phone, organization, role_or_context, message, preferred_contact_method, status, created_at, updated_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);

  if (filters.type !== "all") {
    query = query.eq("interest_type", filters.type);
  }

  if (filters.status !== "all") {
    query = query.eq("status", filters.status);
  }

  const { data, error } = await query;

  if (error) {
    return {
      submissions: [] as ContactSubmission[],
      error: error.message,
    };
  }

  return {
    submissions: (data ?? []) as ContactSubmission[],
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
            <span className="text-sm font-semibold text-[#10233f]">Tema</span>
            <select
              className="min-h-11 rounded-2xl border border-[#d7dedf] bg-white px-4 text-sm text-[#10233f]"
              defaultValue={filters.type}
              name="type"
            >
              {Object.entries(interestLabels).map(([value, label]) => (
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
            href="/admin/contacto"
          >
            Limpiar
          </Link>
        </form>
      </CardContent>
    </Card>
  );
}

export default async function AdminContactoPage({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}) {
  await requireAdminAccess("/admin/contacto");

  const params = await searchParams;
  const filters = {
    type: normalizeFilter(params.type, allowedTypes),
    status: normalizeFilter(params.status, allowedStatuses),
  };

  const { submissions, error } = await getSubmissions(filters);
  const statuses = countStatuses(submissions);
  const recent = submissions.slice(0, 20);

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#10233f] px-4 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            href="/api/admin/contact/export"
          >
            Exportar CSV
            <Download className="ml-2 size-4" />
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
              Contacto
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Seguimiento de mensajes generales recibidos desde la pagina de contacto.
          </p>
        </div>

        <FilterPanel filters={filters} />

        {error ? (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="p-5">
              <p className="font-semibold text-red-900">No se pudieron cargar mensajes.</p>
              <p className="mt-2 text-sm leading-6 text-red-800">{error}</p>
            </CardContent>
          </Card>
        ) : null}

        <div className="mb-5 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#60738c]">
          Mostrando {submissions.length} mensajes con tema &quot;{interestLabels[filters.type]}&quot; y estado &quot;{statusLabels[filters.status]}&quot;.
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            description="Mensajes cargados con los filtros actuales."
            icon={ClipboardList}
            title="Total"
            value={submissions.length.toString()}
          />
          <MetricCard
            description="Mensajes de organizaciones sociales."
            icon={Users}
            title="ONGs"
            value={countByType(submissions, "ngo").toString()}
          />
          <MetricCard
            description="Mensajes de servicios de campo."
            icon={MessageSquareText}
            title="Servicios"
            value={countByType(submissions, "service").toString()}
          />
          <MetricCard
            description="Mensajes de investigacion aplicada."
            icon={BadgeCheck}
            title="Investigacion"
            value={countByType(submissions, "research").toString()}
          />
        </div>

        <Card className="mt-8 border-[#d7dedf] bg-white/78 shadow-sm">
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                <Mail className="size-5 text-[#10233f]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                  Mensajes recientes
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Ultimos mensajes recibidos con los filtros actuales.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#d7dedf] text-xs uppercase tracking-[0.16em] text-[#60738c]">
                    <th className="py-3 pr-4">Fecha</th>
                    <th className="py-3 pr-4">Tema</th>
                    <th className="py-3 pr-4">Nombre</th>
                    <th className="py-3 pr-4">Correo</th>
                    <th className="py-3 pr-4">Organizacion</th>
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
                          {formatInterest(submission.interest_type)}
                        </td>
                        <td className="py-4 pr-4 text-[#10233f]">
                          <Link
                            className="font-semibold underline-offset-4 hover:underline"
                            href={`/admin/contacto/${submission.id}`}
                          >
                            {submission.full_name}
                          </Link>
                        </td>
                        <td className="py-4 pr-4 text-[#425875]">{submission.email}</td>
                        <td className="py-4 pr-4 text-[#425875]">
                          {submission.organization ?? "-"}
                        </td>
                        <td className="py-4 pr-4">
                          <span className="rounded-full border border-[#d7dedf] bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-[#425875]">
                            {formatStatus(submission.status)}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          <ContactStatusControl
                            currentStatus={submission.status}
                            id={submission.id}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-6 text-[#60738c]" colSpan={7}>
                        No hay mensajes con estos filtros.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-[#d7dedf] bg-white/78 shadow-sm">
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                <BadgeCheck className="size-5 text-[#10233f]" />
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

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
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
                  Aun no hay estados registrados.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteShell>
  );
}