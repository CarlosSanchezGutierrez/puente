import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  Camera,
  Mail,
  MapPin,
  Network,
  Phone,
  RadioTower,
  Router,
  User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { FieldServiceStatusControl } from "@/components/admin/field-service-status-control";
import { requireAdminAccess } from "@/lib/admin/access";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Detalle de servicio",
  description: "Detalle interno de solicitud de servicios de campo.",
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

const requestTypeLabels: Record<string, string> = {
  audiovisual: "Audiovisual",
  technical: "Clinica tecnica",
  both: "Ambas",
};

const statusLabels: Record<string, string> = {
  new: "Nuevo",
  reviewed: "Revisado",
  contacted: "Contactado",
  scheduled: "Agendado",
  closed: "Cerrado",
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

function formatDate(value: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatStatus(status: string) {
  return statusLabels[status] ?? status;
}

function formatRequestType(type: string) {
  return requestTypeLabels[type] ?? type;
}

function formatList(values: string[] | null) {
  if (!values || values.length === 0) {
    return "-";
  }

  return values.join(", ");
}

async function getRequest(id: string) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return {
      request: null as FieldServiceRequest | null,
      error: "Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.",
    };
  }

  const { data, error } = await supabase
    .from("field_service_requests")
    .select(
      "id, request_type, organization_name, contact_name, email, phone, city, location, event_date, audience_size, needs_drone, requested_services, context, preferred_contact_method, status, created_at, updated_at",
    )
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return {
      request: null as FieldServiceRequest | null,
      error: error.message,
    };
  }

  return {
    request: data as FieldServiceRequest | null,
    error: null,
  };
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) {
  return (
    <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
        {label}
      </p>
      <p className="mt-2 break-words text-sm leading-6 text-[#10233f]">
        {value === null || value === undefined || value === "" ? "-" : value}
      </p>
    </div>
  );
}

export default async function ServiceRequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminAccess("/admin/servicios");

  const { id } = await params;
  const { request, error } = await getRequest(id);

  if (!request && !error) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="inline-flex min-h-10 w-fit items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
            href="/admin/servicios"
          >
            <ArrowLeft className="mr-2 size-4" />
            Volver al tablero
          </Link>

          <form action="/api/admin/logout" method="post">
            <button
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
              type="submit"
            >
              Cerrar sesion
            </button>
          </form>
        </div>

        {error ? (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-5">
              <p className="font-semibold text-red-900">No se pudo cargar la solicitud.</p>
              <p className="mt-2 text-sm leading-6 text-red-800">{error}</p>
            </CardContent>
          </Card>
        ) : null}

        {request ? (
          <>
            <div className="mb-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
                  Solicitud de servicios
                </p>

                <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
                  {request.organization_name}
                </h1>
              </div>

              <p className="text-lg leading-8 text-[#425875]">
                Detalle interno de solicitud de servicios de campo.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
              <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[#10233f]">
                      <RadioTower className="size-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                        Seguimiento
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-[#60738c]">
                        Estado actual de la solicitud.
                      </p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
                      Estado
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[#10233f]">
                      {formatStatus(request.status)}
                    </p>
                  </div>

                  <FieldServiceStatusControl
                    currentStatus={request.status}
                    id={request.id}
                  />
                </CardContent>
              </Card>

              <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[#10233f]">
                      <BadgeCheck className="size-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                        Informacion principal
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-[#60738c]">
                        Datos enviados desde el formulario.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <DetailItem label="Tipo" value={formatRequestType(request.request_type)} />
                    <DetailItem label="Organizacion" value={request.organization_name} />
                    <DetailItem label="Contacto" value={request.contact_name} />
                    <DetailItem label="Correo" value={request.email} />
                    <DetailItem label="Telefono" value={request.phone} />
                    <DetailItem label="Ciudad" value={request.city} />
                    <DetailItem label="Ubicacion" value={request.location} />
                    <DetailItem label="Fecha del evento" value={request.event_date} />
                    <DetailItem label="Asistentes estimados" value={request.audience_size} />
                    <DetailItem label="Dron" value={request.needs_drone ? "Si" : "No"} />
                    <DetailItem label="Contacto preferido" value={request.preferred_contact_method} />
                    <DetailItem label="Creado" value={formatDate(request.created_at)} />
                    <DetailItem label="Actualizado" value={formatDate(request.updated_at)} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <Network className="size-5 text-[#10233f]" />
                    <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                      Servicios solicitados
                    </h2>
                  </div>
                  <p className="leading-7 text-[#425875]">{formatList(request.requested_services)}</p>
                </CardContent>
              </Card>

              <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <Mail className="size-5 text-[#10233f]" />
                    <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                      Contacto rapido
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                      href={`mailto:${request.email}`}
                    >
                      <Mail className="mr-2 size-4" />
                      Enviar correo
                    </a>

                    {request.phone ? (
                      <a
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                        href={`tel:${request.phone}`}
                      >
                        <Phone className="mr-2 size-4" />
                        Llamar
                      </a>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-[#d7dedf] bg-white/78 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <Router className="size-5 text-[#10233f]" />
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    Contexto
                  </h2>
                </div>

                <p className="whitespace-pre-wrap leading-8 text-[#425875]">
                  {request.context || "Sin contexto adicional."}
                </p>
              </CardContent>
            </Card>
          </>
        ) : null}
      </section>
    </SiteShell>
  );
}