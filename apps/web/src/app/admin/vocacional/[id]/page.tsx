import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { VocationalStatusControl } from "@/components/admin/vocational-status-control";
import { requireAdminAccess } from "@/lib/admin/access";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Detalle vocacional",
  description: "Detalle interno de registro de Puente Vocacional 2026.",
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

const participantLabels: Record<string, string> = {
  school: "Preparatoria",
  mentor: "Mentor",
  student: "Estudiante",
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

function formatParticipant(type: string) {
  return participantLabels[type] ?? type;
}

function formatList(values: string[] | null) {
  if (!values || values.length === 0) {
    return "-";
  }

  return values.join(", ");
}

async function getSubmission(id: string) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return {
      submission: null as Submission | null,
      error: "Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.",
    };
  }

  const { data, error } = await supabase
    .from("vocational_interest_submissions")
    .select(
      "id, participant_type, full_name, email, phone, organization, city, role_or_career, interest_areas, message, preferred_contact_method, status, created_at, updated_at",
    )
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return {
      submission: null as Submission | null,
      error: error.message,
    };
  }

  return {
    submission: data as Submission | null,
    error: null,
  };
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) {
  return (
    <div className="rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
        {label}
      </p>
      <p className="mt-2 break-words text-sm leading-6 text-[#10233f]">{value || "-"}</p>
    </div>
  );
}

export default async function VocationalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdminAccess("/admin/vocacional");

  const { id } = await params;
  const { submission, error } = await getSubmission(id);

  if (!submission && !error) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="inline-flex min-h-10 w-fit items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
            href="/admin/vocacional"
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
              <p className="font-semibold text-red-900">No se pudo cargar el registro.</p>
              <p className="mt-2 text-sm leading-6 text-red-800">{error}</p>
            </CardContent>
          </Card>
        ) : null}

        {submission ? (
          <>
            <div className="mb-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
                  Registro vocacional
                </p>

                <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
                  {submission.full_name}
                </h1>
              </div>

              <p className="text-lg leading-8 text-[#425875]">
                Detalle interno del registro recibido para Puente Vocacional 2026.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
              <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[#10233f]">
                      <User className="size-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                        Seguimiento
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-[#60738c]">
                        Estado actual del registro.
                      </p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
                      Estado
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[#10233f]">
                      {formatStatus(submission.status)}
                    </p>
                  </div>

                  <VocationalStatusControl
                    currentStatus={submission.status}
                    id={submission.id}
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
                    <DetailItem label="Tipo" value={formatParticipant(submission.participant_type)} />
                    <DetailItem label="Nombre" value={submission.full_name} />
                    <DetailItem label="Correo" value={submission.email} />
                    <DetailItem label="Telefono" value={submission.phone} />
                    <DetailItem label="Organizacion" value={submission.organization} />
                    <DetailItem label="Ciudad" value={submission.city} />
                    <DetailItem label="Carrera o area" value={submission.role_or_career} />
                    <DetailItem label="Contacto preferido" value={submission.preferred_contact_method} />
                    <DetailItem label="Creado" value={formatDate(submission.created_at)} />
                    <DetailItem label="Actualizado" value={formatDate(submission.updated_at)} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Card className="border-[#d7dedf] bg-white/78 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <GraduationCap className="size-5 text-[#10233f]" />
                    <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                      Areas de interes
                    </h2>
                  </div>
                  <p className="leading-7 text-[#425875]">{formatList(submission.interest_areas)}</p>
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
                      href={`mailto:${submission.email}`}
                    >
                      <Mail className="mr-2 size-4" />
                      Enviar correo
                    </a>

                    {submission.phone ? (
                      <a
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
                        href={`tel:${submission.phone}`}
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
                  <Building2 className="size-5 text-[#10233f]" />
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    Mensaje
                  </h2>
                </div>

                <p className="whitespace-pre-wrap leading-8 text-[#425875]">
                  {submission.message || "Sin mensaje."}
                </p>
              </CardContent>
            </Card>
          </>
        ) : null}
      </section>
    </SiteShell>
  );
}