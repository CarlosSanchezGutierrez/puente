import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  const startedAt = Date.now();

  const requiredEnv = {
    NEXT_PUBLIC_SUPABASE_URL: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    SUPABASE_SERVICE_ROLE_KEY: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    PUENTE_ADMIN_TOKEN: Boolean(process.env.PUENTE_ADMIN_TOKEN),
  };

  const missingEnv = Object.entries(requiredEnv)
    .filter(([, exists]) => !exists)
    .map(([name]) => name);

  let database = {
    ok: false,
    message: "not_checked",
  };

  if (missingEnv.length === 0) {
    try {
      const supabase = createSupabaseAdminClient();

      const { error } = await supabase
        .from("resources")
        .select("id", { count: "exact", head: true })
        .limit(1);

      database = {
        ok: !error,
        message: error?.message ?? "ok",
      };
    } catch (error) {
      database = {
        ok: false,
        message: error instanceof Error ? error.message : "unknown_error",
      };
    }
  } else {
    database = {
      ok: false,
      message: "missing_env",
    };
  }

  const ok = missingEnv.length === 0 && database.ok;

  return NextResponse.json(
    {
      ok,
      app: "puente-web",
      status: ok ? "healthy" : "degraded",
      timestamp: new Date().toISOString(),
      latencyMs: Date.now() - startedAt,
      checks: {
        env: {
          ok: missingEnv.length === 0,
          missing: missingEnv,
        },
        database,
      },
    },
    {
      status: ok ? 200 : 503,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}