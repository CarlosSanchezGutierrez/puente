import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const interestTypes = new Set([
  "general",
  "ngo",
  "program",
  "service",
  "research",
  "team",
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

function cleanText(value: unknown, maxLength = 500) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function cleanOptionalText(value: unknown, maxLength = 500) {
  const cleaned = cleanText(value, maxLength);
  return cleaned.length > 0 ? cleaned : null;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const honeypot = cleanText(body.website, 100);
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const interestType = cleanText(body.interestType, 40) || "general";
    const fullName = cleanText(body.fullName, 180);
    const email = cleanText(body.email, 180).toLowerCase();
    const phone = cleanOptionalText(body.phone, 80);
    const organization = cleanOptionalText(body.organization, 180);
    const roleOrContext = cleanOptionalText(body.roleOrContext, 220);
    const message = cleanText(body.message, 1800);
    const preferredContactMethod = cleanText(body.preferredContactMethod, 30) || "email";
    const termsAccepted = Boolean(body.termsAccepted);

    if (!interestTypes.has(interestType)) {
      return NextResponse.json(
        { ok: false, error: "Selecciona un tipo de contacto valido." },
        { status: 400 },
      );
    }

    if (!fullName) {
      return NextResponse.json(
        { ok: false, error: "Escribe tu nombre." },
        { status: 400 },
      );
    }

    if (!email || !isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Escribe un correo valido." },
        { status: 400 },
      );
    }

    if (!message) {
      return NextResponse.json(
        { ok: false, error: "Escribe un mensaje breve." },
        { status: 400 },
      );
    }

    if (!termsAccepted) {
      return NextResponse.json(
        { ok: false, error: "Acepta el aviso de privacidad para continuar." },
        { status: 400 },
      );
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        interest_type: interestType,
        full_name: fullName,
        email,
        phone,
        organization,
        role_or_context: roleOrContext,
        message,
        preferred_contact_method: preferredContactMethod,
        privacy_accepted_at: new Date().toISOString(),
        source_path: "/contacto",
        metadata: {
          user_agent: request.headers.get("user-agent"),
          referer: request.headers.get("referer"),
        },
      });

    if (error) {
      console.error("contact_submissions insert error:", error);

      return NextResponse.json(
        { ok: false, error: "No pudimos guardar el mensaje. Intenta de nuevo." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact POST exception:", error);

    return NextResponse.json(
      { ok: false, error: "No pudimos procesar el mensaje." },
      { status: 500 },
    );
  }
}