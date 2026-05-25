"use server";

import { revalidatePath } from "next/cache";
import {
  bookRequestSchema,
  eventRegistrationSchema,
  ngoRequestSchema,
  volunteerApplicationSchema,
  type BookRequestInput,
  type EventRegistrationInput,
  type NgoRequestInput,
  type VolunteerApplicationInput,
} from "@puente/schemas";
import { createClient as createSupabaseServerClient } from "@/lib/supabase/server";

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

  try {
    const supabase = await createSupabaseServerClient();

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

  try {
    const supabase = await createSupabaseServerClient();

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

  try {
    const supabase = await createSupabaseServerClient();

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

  try {
    const supabase = await createSupabaseServerClient();

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