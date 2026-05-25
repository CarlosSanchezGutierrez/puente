"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import {
  bookRequestSchema,
  contactMessageSchema,
  eventRegistrationSchema,
  ngoRequestSchema,
  volunteerApplicationSchema,
  type BookRequestInput,
  type ContactMessageInput,
  type EventRegistrationInput,
  type NgoRequestInput,
  type VolunteerApplicationInput,
} from "@puente/schemas";
import { sendAdminNotification } from "@/lib/email/notifications";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type FormActionResult = {
  ok: boolean;
  message: string;
  id?: string;
};

function toNullableString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();

  return trimmed.length > 0 ? trimmed : null;
}

function toNullableNumber(value: unknown): number | null {
  if (value === "" || value === null || value === undefined) {
    return null;
  }

  const number = Number(value);

  return Number.isFinite(number) ? number : null;
}

function csvToArray(value: unknown): string[] {
  if (typeof value !== "string") {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Error desconocido.";
}

async function getRequestMetadata() {
  const headerStore = await headers();

  const forwardedFor = headerStore.get("x-forwarded-for");
  const realIp = headerStore.get("x-real-ip");
  const userAgent = headerStore.get("user-agent");

  const ipAddress = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";

  return {
    ipAddress,
    userAgent,
  };
}

async function enforceRateLimit({
  action,
  identifier,
  maxRequests = 5,
  windowMinutes = 10,
}: {
  action: string;
  identifier: string;
  maxRequests?: number;
  windowMinutes?: number;
}): Promise<FormActionResult | null> {
  const supabase = createSupabaseAdminClient();
  const metadata = await getRequestMetadata();

  const normalizedIdentifier = identifier.trim().toLowerCase() || "anonymous";
  const combinedIdentifier = `${normalizedIdentifier}:${metadata.ipAddress}`;
  const since = new Date(Date.now() - windowMinutes * 60 * 1000).toISOString();

  const { count, error: countError } = await supabase
    .from("rate_limit_events")
    .select("id", { count: "exact", head: true })
    .eq("action", action)
    .eq("identifier", combinedIdentifier)
    .gte("created_at", since);

  if (countError) {
    console.error("rate limit count error:", countError);

    return {
      ok: false,
      message: "No pudimos validar el envío. Intenta de nuevo en unos minutos.",
    };
  }

  if ((count ?? 0) >= maxRequests) {
    return {
      ok: false,
      message: "Demasiados intentos recientes. Intenta de nuevo en unos minutos.",
    };
  }

  const { error: insertError } = await supabase.from("rate_limit_events").insert({
    action,
    identifier: combinedIdentifier,
    ip_address: metadata.ipAddress,
    user_agent: metadata.userAgent,
  });

  if (insertError) {
    console.error("rate limit insert error:", insertError);

    return {
      ok: false,
      message: "No pudimos validar el envío. Intenta de nuevo en unos minutos.",
    };
  }

  return null;
}

export async function submitVolunteerApplication(
  input: VolunteerApplicationInput,
): Promise<FormActionResult> {
  const parsed = volunteerApplicationSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "La aplicación tiene datos incompletos o inválidos.",
    };
  }

  const rateLimitResult = await enforceRateLimit({
    action: "volunteer_application",
    identifier: parsed.data.email,
  });

  if (rateLimitResult) {
    return rateLimitResult;
  }

  try {
    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
      .from("volunteer_applications")
      .insert({
        full_name: parsed.data.fullName,
        email: parsed.data.email,
        phone: toNullableString(parsed.data.phone),
        city: toNullableString(parsed.data.city),
        university: toNullableString(parsed.data.university),
        career: toNullableString(parsed.data.career),
        area: parsed.data.area,
        skills: csvToArray(parsed.data.skills),
        motivation: parsed.data.motivation,
        availability_hours_per_week: parsed.data.availabilityHoursPerWeek,
        linkedin_url: toNullableString(parsed.data.linkedinUrl),
        github_url: toNullableString(parsed.data.githubUrl),
        privacy_accepted_at: new Date().toISOString(),
        source_path: "/voluntariado",
      })
      .select("id")
      .single();

    if (error) {
      console.error("submitVolunteerApplication error:", error);

      return {
        ok: false,
        message: "No pudimos guardar tu aplicación. Intenta de nuevo.",
      };
    }

    await sendAdminNotification({
      type: "volunteer_application",
      title: parsed.data.fullName,
      summary: `${parsed.data.email} quiere participar en ${parsed.data.area}.`,
      recordId: data.id,
      sourcePath: "/voluntariado",
    });

    revalidatePath("/voluntariado");

    return {
      ok: true,
      id: data.id,
      message: "Tu aplicación de voluntariado fue recibida correctamente.",
    };
  } catch (error) {
    console.error("submitVolunteerApplication exception:", getErrorMessage(error));

    return {
      ok: false,
      message: "Ocurrió un error inesperado al guardar tu aplicación.",
    };
  }
}

export async function submitNgoRequest(input: NgoRequestInput): Promise<FormActionResult> {
  const parsed = ngoRequestSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "La solicitud de la organización tiene datos incompletos o inválidos.",
    };
  }

  const rateLimitResult = await enforceRateLimit({
    action: "ngo_request",
    identifier: parsed.data.contactEmail,
  });

  if (rateLimitResult) {
    return rateLimitResult;
  }

  try {
    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
      .from("ngo_requests")
      .insert({
        organization_name: parsed.data.organizationName,
        organization_type: toNullableString(parsed.data.organizationType),
        contact_name: parsed.data.contactName,
        contact_email: parsed.data.contactEmail,
        contact_phone: toNullableString(parsed.data.contactPhone),
        city: toNullableString(parsed.data.city),
        people_served_estimate: toNullableNumber(parsed.data.peopleServedEstimate),
        problem_description: parsed.data.problemDescription,
        current_process: toNullableString(parsed.data.currentProcess),
        desired_solution: toNullableString(parsed.data.desiredSolution),
        urgency: toNullableString(parsed.data.urgency),
        approximate_budget_mxn: toNullableNumber(parsed.data.approximateBudgetMxn),
        wants_annual_free_program: parsed.data.wantsAnnualFreeProgram,
        wants_social_discount_quote: parsed.data.wantsSocialDiscountQuote,
        privacy_accepted_at: new Date().toISOString(),
        source_path: "/ongs",
      })
      .select("id")
      .single();

    if (error) {
      console.error("submitNgoRequest error:", error);

      return {
        ok: false,
        message: "No pudimos guardar la solicitud. Intenta de nuevo.",
      };
    }

    await sendAdminNotification({
      type: "ngo_request",
      title: parsed.data.organizationName,
      summary: `${parsed.data.contactName} (${parsed.data.contactEmail}) envió una solicitud de organización social.`,
      recordId: data.id,
      sourcePath: "/ongs",
    });

    revalidatePath("/ongs");

    return {
      ok: true,
      id: data.id,
      message: "La solicitud de la organización fue recibida correctamente.",
    };
  } catch (error) {
    console.error("submitNgoRequest exception:", getErrorMessage(error));

    return {
      ok: false,
      message: "Ocurrió un error inesperado al guardar la solicitud.",
    };
  }
}

export async function submitBookRequest(input: BookRequestInput): Promise<FormActionResult> {
  const parsed = bookRequestSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "La solicitud del libro tiene datos incompletos o inválidos.",
    };
  }

  const rateLimitResult = await enforceRateLimit({
    action: "book_request",
    identifier: parsed.data.requesterEmail,
  });

  if (rateLimitResult) {
    return rateLimitResult;
  }

  try {
    const supabase = createSupabaseAdminClient();

    const { data: book } = await supabase
      .from("books")
      .select("id")
      .eq("title", parsed.data.bookTitle)
      .maybeSingle();

    if (!book?.id) {
      return {
        ok: false,
        message: "No encontramos ese libro en el catálogo.",
      };
    }

    const { data, error } = await supabase
      .from("book_requests")
      .insert({
        book_id: book.id,
        requester_name: parsed.data.requesterName,
        requester_email: parsed.data.requesterEmail,
        reason: parsed.data.reason,
        privacy_accepted_at: new Date().toISOString(),
        source_path: "/biblioteca",
      })
      .select("id")
      .single();

    if (error) {
      console.error("submitBookRequest error:", error);

      return {
        ok: false,
        message: "No pudimos guardar la solicitud del libro. Intenta de nuevo.",
      };
    }

    await sendAdminNotification({
      type: "book_request",
      title: parsed.data.bookTitle,
      summary: `${parsed.data.requesterName} (${parsed.data.requesterEmail}) solicitó un libro.`,
      recordId: data.id,
      sourcePath: "/biblioteca",
    });

    revalidatePath("/biblioteca");

    return {
      ok: true,
      id: data.id,
      message: "Tu solicitud de libro fue recibida correctamente.",
    };
  } catch (error) {
    console.error("submitBookRequest exception:", getErrorMessage(error));

    return {
      ok: false,
      message: "Ocurrió un error inesperado al guardar la solicitud del libro.",
    };
  }
}

export async function submitEventRegistration(
  input: EventRegistrationInput,
): Promise<FormActionResult> {
  const parsed = eventRegistrationSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "El registro al evento tiene datos incompletos o inválidos.",
    };
  }

  const rateLimitResult = await enforceRateLimit({
    action: "event_registration",
    identifier: parsed.data.email,
  });

  if (rateLimitResult) {
    return rateLimitResult;
  }

  try {
    const supabase = createSupabaseAdminClient();

    const { data: event } = await supabase
      .from("events")
      .select("id")
      .eq("title", parsed.data.eventTitle)
      .maybeSingle();

    if (!event?.id) {
      return {
        ok: false,
        message: "No encontramos ese evento en el catálogo.",
      };
    }

    const { data, error } = await supabase
      .from("event_registrations")
      .insert({
        event_id: event.id,
        full_name: parsed.data.fullName,
        email: parsed.data.email,
        privacy_accepted_at: new Date().toISOString(),
        source_path: "/eventos",
      })
      .select("id")
      .single();

    if (error) {
      console.error("submitEventRegistration error:", error);

      return {
        ok: false,
        message: "No pudimos guardar tu registro al evento. Intenta de nuevo.",
      };
    }

    await sendAdminNotification({
      type: "event_registration",
      title: parsed.data.eventTitle,
      summary: `${parsed.data.fullName} (${parsed.data.email}) se registró a un evento.`,
      recordId: data.id,
      sourcePath: "/eventos",
    });

    revalidatePath("/eventos");

    return {
      ok: true,
      id: data.id,
      message: "Tu registro al evento fue recibido correctamente.",
    };
  } catch (error) {
    console.error("submitEventRegistration exception:", getErrorMessage(error));

    return {
      ok: false,
      message: "Ocurrió un error inesperado al guardar tu registro.",
    };
  }
}

export async function submitContactMessage(
  input: ContactMessageInput,
): Promise<FormActionResult> {
  const parsed = contactMessageSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "El mensaje tiene datos incompletos o inválidos.",
    };
  }

  const rateLimitResult = await enforceRateLimit({
    action: "contact_message",
    identifier: parsed.data.email,
  });

  if (rateLimitResult) {
    return rateLimitResult;
  }

  try {
    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        full_name: parsed.data.fullName,
        email: parsed.data.email,
        subject: toNullableString(parsed.data.subject),
        message: parsed.data.message,
        privacy_accepted_at: new Date().toISOString(),
        source_path: "/contacto",
      })
      .select("id")
      .single();

    if (error) {
      console.error("submitContactMessage error:", error);

      return {
        ok: false,
        message: "No pudimos guardar tu mensaje. Intenta de nuevo.",
      };
    }

    await sendAdminNotification({
      type: "contact_message",
      title: parsed.data.subject || "Mensaje de contacto",
      summary: `${parsed.data.fullName} (${parsed.data.email}) envió un mensaje.`,
      recordId: data.id,
      sourcePath: "/contacto",
    });

    revalidatePath("/contacto");

    return {
      ok: true,
      id: data.id,
      message: "Tu mensaje fue recibido correctamente.",
    };
  } catch (error) {
    console.error("submitContactMessage exception:", getErrorMessage(error));

    return {
      ok: false,
      message: "Ocurrió un error inesperado al guardar tu mensaje.",
    };
  }
}