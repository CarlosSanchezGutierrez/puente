import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!process.env.PUENTE_ADMIN_TOKEN || token !== process.env.PUENTE_ADMIN_TOKEN) {
    return NextResponse.json(
      {
        ok: false,
        error: "Unauthorized",
      },
      { status: 401 },
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? null;

  try {
    const supabase = createSupabaseAdminClient();

    const { count, error: countError } = await supabase
      .from("books")
      .select("id", { count: "exact", head: true });

    const { data, error: rowsError } = await supabase
      .from("books")
      .select("id,title,author,category,status,source,sort_order")
      .order("sort_order", { ascending: true })
      .order("title", { ascending: true })
      .limit(20);

    return NextResponse.json(
      {
        ok: !countError && !rowsError,
        supabaseUrl,
        env: {
          hasSupabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
          hasAnonKey: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
          hasServiceRole: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
          hasAdminToken: Boolean(process.env.PUENTE_ADMIN_TOKEN),
        },
        count: count ?? 0,
        countError: countError?.message ?? null,
        rowsError: rowsError?.message ?? null,
        sample: data ?? [],
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        supabaseUrl,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}