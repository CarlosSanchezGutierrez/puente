import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const requestTypes = new Set(["audiovisual", "technical", "both"]);

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

function cleanStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 16);
}

function cleanInteger(value: unknown) {
  const numberValue = Number(value);

  if (!Number.isFinite(numberValue) || numberValue <= 0) {
    return null;
  }

  return Math.floor(numberValue);
}

function cleanDate(value: unknown) {
  const text = cleanText(value, 20);

  if (!text) {
    return null;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return null;
  }

  return text;
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

    const requestType = cleanText(body.requestType, 40);
    const organizationName = cleanText(body.organizationName, 180);
    const contactName = cleanText(body.contactName, 180);
    const email = cleanText(body.email, 180).toLowerCase();
    const phone = cleanOptionalText(body.phone, 80);
    const city = cleanOptionalText(body.city, 120);
    const location = cleanOptionalText(body.location, 220);
    const eventDate = cleanDate(body.eventDate);
    const audienceSize = cleanInteger(body.audienceSize);
    const needsDrone = Boolean(body.needsDrone);
    const requestedServices = cleanStringArray(body.requestedServices);
    const context = cleanOptionalText(body.context, 1600);
    const preferredContactMethod = cleanText(body.preferredContactMethod, 30) || "email";
    const termsAccepted = Boolean(body.termsAccepted);

    if (!requestTypes.has(requestType)) {
      return NextResponse.json(
        { ok: false, error: "Selecciona un tipo de solicitud valido." },
        { status: 400 },
      );
    }

    if (!organizationName) {
      return NextResponse.json(
        { ok: false, error: "Escribe el nombre de la organizacion, escuela o evento." },
        { status: 400 },
      );
    }

    if (!contactName) {
      return NextResponse.json(
        { ok: false, error: "Escribe el nombre de la persona de contacto." },
        { status: 400 },
      );
    }

    if (!email || !isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Escribe un correo valido." },
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
      .from("field_service_requests")
      .insert({
        request_type: requestType,
        organization_name: organizationName,
        contact_name: contactName,
        email,
        phone,
        city,
        location,
        event_date: eventDate,
        audience_size: audienceSize,
        needs_drone: needsDrone,
        requested_services: requestedServices,
        context,
        preferred_contact_method: preferredContactMethod,
        privacy_accepted_at: new Date().toISOString(),
        source_path: "/servicios/solicitud",
        metadata: {
          user_agent: request.headers.get("user-agent"),
          referer: request.headers.get("referer"),
        },
      });

    if (error) {
      console.error("field_service_requests insert error:", error);

      return NextResponse.json(
        { ok: false, error: "No pudimos guardar la solicitud. Intenta de nuevo." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("field service request POST exception:", error);

    return NextResponse.json(
      { ok: false, error: "No pudimos procesar la solicitud." },
      { status: 500 },
    );
  }
}