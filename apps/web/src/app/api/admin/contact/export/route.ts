import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { hasAdminAccess } from "@/lib/admin/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactSubmission = {
  id: string;
  interest_type: string;
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

  return `"${String(value).replaceAll('"', '""')}"`;
}

function toCsv(rows: ContactSubmission[]) {
  const headers = [
    "id",
    "interest_type",
    "full_name",
    "email",
    "phone",
    "organization",
    "role_or_context",
    "message",
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
        row.interest_type,
        row.full_name,
        row.email,
        row.phone,
        row.organization,
        row.role_or_context,
        row.message,
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
      .from("contact_submissions")
      .select(
        "id, interest_type, full_name, email, phone, organization, role_or_context, message, preferred_contact_method, status, created_at, updated_at",
      )
      .order("created_at", { ascending: false })
      .limit(5000);

    if (error) {
      console.error("contact export error:", error);

      return NextResponse.json(
        { ok: false, error: "No se pudo exportar la informacion." },
        { status: 500 },
      );
    }

    const csv = toCsv((data ?? []) as ContactSubmission[]);
    const today = new Date().toISOString().slice(0, 10);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="puente-contacto-${today}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("contact export exception:", error);

    return NextResponse.json(
      { ok: false, error: "No se pudo generar el archivo CSV." },
      { status: 500 },
    );
  }
}