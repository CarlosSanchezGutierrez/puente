import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendVocationalInterestNotification } from "@/lib/email/vocational-notifications";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ParticipantType = "school" | "mentor" | "student";

const participantTypes = new Set(["school", "mentor", "student"]);

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
    .slice(0, 12);
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

    const participantType = cleanText(body.participantType, 30) as ParticipantType;
    const fullName = cleanText(body.fullName, 180);
    const email = cleanText(body.email, 180).toLowerCase();
    const phone = cleanOptionalText(body.phone, 80);
    const organization = cleanOptionalText(body.organization, 180);
    const city = cleanOptionalText(body.city, 120);
    const roleOrCareer = cleanOptionalText(body.roleOrCareer, 180);
    const interestAreas = cleanStringArray(body.interestAreas);
    const message = cleanOptionalText(body.message, 1400);
    const preferredContactMethod = cleanText(body.preferredContactMethod, 30) || "email";
    const termsAccepted = Boolean(body.termsAccepted);

    if (!participantTypes.has(participantType)) {
      return NextResponse.json(
        { ok: false, error: "Selecciona un tipo de participante valido." },
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

    if (!termsAccepted) {
      return NextResponse.json(
        { ok: false, error: "Acepta el aviso de privacidad para continuar." },
        { status: 400 },
      );
    }

    const supabase = getSupabaseAdmin();

    const payload = {
      participant_type: participantType,
      full_name: fullName,
      email,
      phone,
      organization,
      city,
      role_or_career: roleOrCareer,
      interest_areas: interestAreas,
      message,
      preferred_contact_method: preferredContactMethod,
      privacy_accepted_at: new Date().toISOString(),
      source_path: "/eventos/puente-vocacional-2026/registro",
      metadata: {
        user_agent: request.headers.get("user-agent"),
        referer: request.headers.get("referer"),
      },
    };

    const { error } = await supabase
      .from("vocational_interest_submissions")
      .insert(payload);

    if (error) {
      console.error("vocational_interest_submissions insert error:", error);
      return NextResponse.json(
        { ok: false, error: "No pudimos guardar el registro. Intenta de nuevo." },
        { status: 500 },
      );
    }

    try {
      await sendVocationalInterestNotification({
        participantType,
        fullName,
        email,
        phone,
        organization,
        city,
        roleOrCareer,
        interestAreas,
        message,
        preferredContactMethod,
      });
    } catch (notificationError) {
      console.error("vocational interest notification exception:", notificationError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("vocational interest POST exception:", error);

    return NextResponse.json(
      { ok: false, error: "No pudimos procesar el registro." },
      { status: 500 },
    );
  }
}