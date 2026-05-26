import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { hasAdminAccess } from "@/lib/admin/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedStatuses = new Set([
  "new",
  "reviewed",
  "contacted",
  "scheduled",
  "closed",
]);

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

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const allowed = await hasAdminAccess();

  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: "Acceso no autorizado." },
      { status: 401 },
    );
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const status = typeof body.status === "string" ? body.status.trim() : "";

    if (!id) {
      return NextResponse.json(
        { ok: false, error: "Falta el identificador de la solicitud." },
        { status: 400 },
      );
    }

    if (!allowedStatuses.has(status)) {
      return NextResponse.json(
        { ok: false, error: "Estado no valido." },
        { status: 400 },
      );
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("field_service_requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("field service status update error:", error);

      return NextResponse.json(
        { ok: false, error: "No pudimos actualizar el estado." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true, status });
  } catch (error) {
    console.error("field service status PATCH exception:", error);

    return NextResponse.json(
      { ok: false, error: "No pudimos procesar la actualizacion." },
      { status: 500 },
    );
  }
}