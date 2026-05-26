import {
  BadgeCheck,
  Camera,
  ClipboardList,
  Download,
  Network,
  RadioTower,
  Router,
  Search,
  Video,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { FieldServiceStatusControl } from "@/components/admin/field-service-status-control";
import { requireAdminAccess } from "@/lib/admin/access";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Admin Servicios",
  description: "Tablero interno de solicitudes de servicios de campo.",
};

export const dynamic = "force-dynamic";

type FieldServiceRequest = {
  id: string;
  request_type: "audiovisual" | "technical" | "both";
  organization_name: string;
  contact_name: string;
  email: string;
  phone: string | null;
  city: string | null;
  location: string | null;
  event_date: string | null;
  audience_size: number | null;
  needs_drone: boolean;
  requested_services: string[] | null;
  context: string | null;
  preferred_contact_method: string;
  status: string;
  created_at: string;
  updated_at: string | null;
};

type PageSearchParams = {
  type?: string;
  status?: string;
  drone?: string;
};

type Filters = {
  type: string;
  status: string;
  drone: string;
};

const requestTypeLabels: Record<string, string> = {
  all: "Todos",
  audiovisual: "Audiovisual",
  technical: "Clinica tecnica",
  both: "Ambas",
};

const statusLabels: Record<string, string> = {
  all: "Todos",
  new: "Nuevo",
  reviewed: "Revisado",
  contacted: "Contactado",
  scheduled: "Agendado",
  closed: "Cerrado",
};

const droneLabels: Record<string, string> = {
  all: "Todos",
  yes: "Con dron",
  no: "Sin dron",
};

const allowedTypes = new Set(["all", "audiovisual", "technical", "both"]);
const allowedStatuses = new Set(["all", "new", "reviewed", "contacted", "scheduled", "closed"]);
const allowedDrone = new Set(["all", "yes", "no"]);

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

function formatRequestType(type: FieldServiceRequest["request_type"]) {
  return requestTypeLabels[type] ?? type;
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

function countByType(requests: FieldServiceRequest[], type: FieldServiceRequest["request_type"]) {
  return requests.filter((request) => request.request_type === type).length;
}

function countDrone(requests: FieldServiceRequest[]) {
  return requests.filter((request) => request.needs_drone).length;
}

function countStatuses(requests: FieldServiceRequest[]) {
  const counts = new Map<string, number>();

  for (const request of requests) {
    counts.set(request.status, (counts.get(request.status) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([status, count]) => ({ status, count }))
    .sort((a, b) => b.count - a.count);
}

function countServices(requests: FieldServiceRequest[]) {
  const counts = new Map<string, number>();

  for (const request of requests) {
    for (const service of request.requested_services ?? []) {
      counts.set(service, (counts.get(service) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([service, count]) => ({ service, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

async function getRequests(filters: Filters) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return {
      requests: [] as FieldServiceRequest[],
      error: "Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.",
    };
  }

  let query = supabase
    .from("field_service_requests")
    .select(
      "id, request_type, organization_name, contact_name, email, phone, city, location, event_date, audience_size, needs_drone, requested_services, context, preferred_contact_method, status, created_at, updated_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);

  if (filters.type !== "all") {
    query = query.eq("request_type", filters.type);
  }

  if (filters.status !== "all") {
    query = query.eq("status", filters.status);
  }

  if (filters.drone === "yes") {
    query = query.eq("needs_drone", true);
  }

  if (filters.drone === "no") {
    query = query.eq("needs_drone", false);
  }

  const { data, error } = await query;

  if (error) {
    return {
      requests: [] as FieldServiceRequest[],
      error: error.message,
    };
  }

  return {
    requests: (data ?? []) as FieldServiceRequest[],
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
        <form className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto_auto]" method="get">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#10233f]">Tipo</span>
            <select
              className="min-h-11 rounded-2xl border border-[#d7dedf] bg-white px-4 text-sm text-[#10233f]"
              defaultValue={filters.type}
              name="type"
            >
              {Object.entries(requestTypeLabels).map(([value, label]) => (
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

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#10233f]">Dron</span>
            <select
              className="min-h-11 rounded-2xl border border-[#d7dedf] bg-white px-4 text-sm text-[#10233f]"
              defaultValue={filters.drone}
              name="drone"
            >
              {Object.entries(droneLabels).map(([value, label]) => (
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
            href="/admin/servicios"
          >
            Limpiar
          </Link>
        </form>
      </CardContent>
    </Card>
  );
}

export default async function AdminServiciosPage({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}) {
  await requireAdminAccess("/admin/servicios");

  const params = await searchParams;
  const filters = {
    type: normalizeFilter(params.type, allowedTypes),
    status: normalizeFilter(params.status, allowedStatuses),
    drone: normalizeFilter(params.drone, allowedDrone),
  };

  const { requests, error } = await getRequests(filters);
  const services = countServices(requests);
  const statuses = countStatuses(requests);
  const recent = requests.slice(0, 20);

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#10233f] px-4 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            href="/api/admin/field-services/export"
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
              Servicios de campo
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Seguimiento operativo de solicitudes. Los filtros permiten revisar por
            tipo de solicitud, estado y uso potencial de dron.
          </p>
        </div>

        <FilterPanel filters={filters} />

        {error ? (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="p-5">
              <p className="font-semibold text-red-900">No se pudieron cargar solicitudes.</p>
              <p className="mt-2 text-sm leading-6 text-red-800">{error}</p>
            </CardContent>
          </Card>
        ) : null}

        <div className="mb-5 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#60738c]">
          Mostrando {requests.length} solicitudes con tipo "{requestTypeLabels[filters.type]}", estado "{statusLabels[filters.status]}" y dron "{droneLabels[filters.drone]}".
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <MetricCard
            description="Solicitudes cargadas con los filtros actuales."
            icon={ClipboardList}
            title="Total"
            value={requests.length.toString()}
          />
          <MetricCard
            description="Solicitudes de foto, video o entrevistas."
            icon={Video}
            title="Audiovisual"
            value={countByType(requests, "audiovisual").toString()}
          />
          <MetricCard
            description="Solicitudes de internet, red, WiFi o camaras."
            icon={Wifi}
            title="Tecnica"
            value={countByType(requests, "technical").toString()}
          />
          <MetricCard
            description="Solicitudes que combinan apoyo audiovisual y tecnico."
            icon={Network}
            title="Ambas"
            value={countByType(requests, "both").toString()}
          />
          <MetricCard
            description="Solicitudes que piden evaluar tomas aereas."
            icon={Camera}
            title="Dron"
            value={countDrone(requests).toString()}
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
                    Servicios mas pedidos
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#60738c]">
                    Intereses seleccionados en las solicitudes.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {services.length > 0 ? (
                  services.map((item) => (
                    <div
                      className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4"
                      key={item.service}
                    >
                      <p className="text-sm font-medium text-[#10233f]">{item.service}</p>
                      <span className="rounded-full bg-[#10233f] px-3 py-1 text-xs font-semibold text-white">
                        {item.count}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#60738c]">
                    Aun no hay servicios registrados con estos filtros.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                  <RadioTower className="size-5 text-[#10233f]" />
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
                <Router className="size-5 text-[#10233f]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                  Solicitudes recientes
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Ultimas solicitudes recibidas con los filtros actuales.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1260px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#d7dedf] text-xs uppercase tracking-[0.16em] text-[#60738c]">
                    <th className="py-3 pr-4">Fecha</th>
                    <th className="py-3 pr-4">Tipo</th>
                    <th className="py-3 pr-4">Organizacion</th>
                    <th className="py-3 pr-4">Contacto</th>
                    <th className="py-3 pr-4">Correo</th>
                    <th className="py-3 pr-4">Ciudad</th>
                    <th className="py-3 pr-4">Evento</th>
                    <th className="py-3 pr-4">Dron</th>
                    <th className="py-3 pr-4">Estado</th>
                    <th className="py-3 pr-4">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.length > 0 ? (
                    recent.map((request) => (
                      <tr className="border-b border-[#edf0f0]" key={request.id}>
                        <td className="py-4 pr-4 text-[#60738c]">
                          {formatDate(request.created_at)}
                        </td>
                        <td className="py-4 pr-4 font-medium text-[#10233f]">
                          {formatRequestType(request.request_type)}
                        </td>
                        <td className="py-4 pr-4 text-[#10233f]">
                          {request.organization_name}
                        </td>
                        <td className="py-4 pr-4 text-[#425875]">
                          {request.contact_name}
                        </td>
                        <td className="py-4 pr-4 text-[#425875]">{request.email}</td>
                        <td className="py-4 pr-4 text-[#425875]">
                          {request.city ?? "-"}
                        </td>
                        <td className="py-4 pr-4 text-[#425875]">
                          {request.event_date ?? "-"}
                        </td>
                        <td className="py-4 pr-4 text-[#425875]">
                          {request.needs_drone ? "Si" : "No"}
                        </td>
                        <td className="py-4 pr-4">
                          <span className="rounded-full border border-[#d7dedf] bg-[#fbfaf7] px-3 py-1 text-xs font-medium text-[#425875]">
                            {formatStatus(request.status)}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          <FieldServiceStatusControl
                            currentStatus={request.status}
                            id={request.id}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-6 text-[#60738c]" colSpan={10}>
                        No hay solicitudes con estos filtros.
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