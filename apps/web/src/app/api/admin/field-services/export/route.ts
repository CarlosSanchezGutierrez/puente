import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { hasAdminAccess } from "@/lib/admin/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type FieldServiceRequest = {
  id: string;
  request_type: string;
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

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function csvCell(value: unknown) {
  if (value === null || value === undefined) {
    return '""';
  }

  const text = Array.isArray(value) ? value.join("; ") : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

function toCsv(rows: FieldServiceRequest[]) {
  const headers = [
    "id",
    "request_type",
    "organization_name",
    "contact_name",
    "email",
    "phone",
    "city",
    "location",
    "event_date",
    "audience_size",
    "needs_drone",
    "requested_services",
    "context",
    "preferred_contact_method",
    "status",
    "created_at",
    "updated_at",
  ];

  const lines = [
    headers.map(csvCell).join(","),
    ...rows.map((row) =>
      [
        row.id,
        row.request_type,
        row.organization_name,
        row.contact_name,
        row.email,
        row.phone,
        row.city,
        row.location,
        row.event_date,
        row.audience_size,
        row.needs_drone,
        row.requested_services ?? [],
        row.context,
        row.preferred_contact_method,
        row.status,
        row.created_at,
        row.updated_at,
      ]
        .map(csvCell)
        .join(","),
    ),
  ];

  return lines.join("\r\n");
}

export async function GET() {
  const allowed = await hasAdminAccess();

  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "Acceso no autorizado." },
      { status: 401 },
    );
  }

  try {
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("field_service_requests")
      .select(
        "id, request_type, organization_name, contact_name, email, phone, city, location, event_date, audience_size, needs_drone, requested_services, context, preferred_contact_method, status, created_at, updated_at",
      )
      .order("created_at", { ascending: false })
      .limit(5000);

    if (error) {
      console.error("field service export error:", error);

      return NextResponse.json(
        { ok: false, error: "No se pudo exportar la informacion." },
        { status: 500 },
      );
    }

    const csv = toCsv((data ?? []) as FieldServiceRequest[]);
    const today = new Date().toISOString().slice(0, 10);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="puente-servicios-campo-${today}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("field service export exception:", error);

    return NextResponse.json(
      { ok: false, error: "No se pudo generar el archivo CSV." },
      { status: 500 },
    );
  }
}