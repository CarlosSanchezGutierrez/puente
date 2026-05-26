import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { hasAdminAccess } from "@/lib/admin/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Submission = {
  id: string;
  participant_type: string;
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

function toCsv(rows: Submission[]) {
  const headers = [
    "id",
    "participant_type",
    "full_name",
    "email",
    "phone",
    "organization",
    "city",
    "role_or_career",
    "interest_areas",
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
        row.participant_type,
        row.full_name,
        row.email,
        row.phone,
        row.organization,
        row.city,
        row.role_or_career,
        row.interest_areas ?? [],
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
      .from("vocational_interest_submissions")
      .select(
        "id, participant_type, full_name, email, phone, organization, city, role_or_career, interest_areas, message, preferred_contact_method, status, created_at, updated_at",
      )
      .order("created_at", { ascending: false })
      .limit(5000);

    if (error) {
      console.error("vocational export error:", error);

      return NextResponse.json(
        { ok: false, error: "No se pudo exportar la informacion." },
        { status: 500 },
      );
    }

    const csv = toCsv((data ?? []) as Submission[]);
    const today = new Date().toISOString().slice(0, 10);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="puente-vocacional-registros-${today}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("vocational export exception:", error);

    return NextResponse.json(
      { ok: false, error: "No se pudo generar el archivo CSV." },
      { status: 500 },
    );
  }
}