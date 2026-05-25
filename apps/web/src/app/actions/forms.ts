"use server";

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

export type FormActionResult = {
  ok: boolean;
  message: string;
};

function createSuccessMessage(entity: string) {
  return `Solicitud de ${entity} recibida correctamente. El siguiente paso será conectarla a Supabase.`;
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

  console.log("Volunteer application validated:", parsed.data);

  return {
    ok: true,
    message: createSuccessMessage("voluntariado"),
  };
}

export async function submitNgoRequest(input: NgoRequestInput): Promise<FormActionResult> {
  const parsed = ngoRequestSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "La solicitud de la organización tiene datos incompletos o inválidos.",
    };
  }

  console.log("NGO request validated:", parsed.data);

  return {
    ok: true,
    message: createSuccessMessage("ONG/proyecto social"),
  };
}

export async function submitBookRequest(input: BookRequestInput): Promise<FormActionResult> {
  const parsed = bookRequestSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "La solicitud del libro tiene datos incompletos o inválidos.",
    };
  }

  console.log("Book request validated:", parsed.data);

  return {
    ok: true,
    message: createSuccessMessage("libro"),
  };
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

  console.log("Event registration validated:", parsed.data);

  return {
    ok: true,
    message: createSuccessMessage("evento"),
  };
}