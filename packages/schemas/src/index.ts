import { z } from "zod";

export const volunteerApplicationSchema = z.object({
  fullName: z.string().min(2, "Escribe tu nombre completo.").max(120),
  email: z.string().email("Escribe un correo válido."),
  phone: z.string().max(40).optional().or(z.literal("")),
  city: z.string().max(120).optional().or(z.literal("")),
  university: z.string().max(160).optional().or(z.literal("")),
  career: z.string().max(160).optional().or(z.literal("")),
  area: z.string().min(2, "Escribe un área de interés.").max(80),
  skills: z.string().max(500).optional().or(z.literal("")),
  motivation: z.string().min(20, "Cuéntanos un poco más.").max(1000),
  availabilityHoursPerWeek: z.coerce
    .number()
    .int()
    .min(1, "Mínimo 1 hora por semana.")
    .max(40, "Máximo 40 horas por semana."),
  linkedinUrl: z.string().url("Escribe una URL válida.").optional().or(z.literal("")),
  githubUrl: z.string().url("Escribe una URL válida.").optional().or(z.literal("")),
});

export const ngoRequestSchema = z.object({
  organizationName: z.string().min(2, "Escribe el nombre de la organización.").max(160),
  organizationType: z.string().max(120).optional().or(z.literal("")),
  contactName: z.string().min(2, "Escribe el nombre de contacto.").max(120),
  contactEmail: z.string().email("Escribe un correo válido."),
  contactPhone: z.string().max(40).optional().or(z.literal("")),
  city: z.string().max(120).optional().or(z.literal("")),
  peopleServedEstimate: z.coerce.number().int().min(0).optional().or(z.literal("")),
  problemDescription: z
    .string()
    .min(40, "Describe el problema con más detalle.")
    .max(2000),
  currentProcess: z.string().max(1500).optional().or(z.literal("")),
  desiredSolution: z.string().max(1500).optional().or(z.literal("")),
  urgency: z.string().max(120).optional().or(z.literal("")),
  approximateBudgetMxn: z.coerce.number().int().min(0).optional().or(z.literal("")),
  wantsAnnualFreeProgram: z.boolean(),
  wantsSocialDiscountQuote: z.boolean(),
});

export const bookRequestSchema = z.object({
  bookTitle: z.string().min(1, "Selecciona o escribe un libro."),
  requesterName: z.string().min(2, "Escribe tu nombre.").max(120),
  requesterEmail: z.string().email("Escribe un correo válido."),
  reason: z.string().min(10, "Cuéntanos brevemente por qué lo quieres solicitar.").max(500),
});

export const eventRegistrationSchema = z.object({
  eventTitle: z.string().min(1, "Selecciona o escribe un evento."),
  fullName: z.string().min(2, "Escribe tu nombre.").max(120),
  email: z.string().email("Escribe un correo válido."),
  note: z.string().max(500).optional().or(z.literal("")),
});

export const contactMessageSchema = z.object({
  fullName: z.string().min(2, "Escribe tu nombre.").max(120),
  email: z.string().email("Escribe un correo válido."),
  subject: z.string().max(160).optional().or(z.literal("")),
  message: z.string().min(10, "Escribe un mensaje más completo.").max(1500),
});

export type VolunteerApplicationInput = z.infer<typeof volunteerApplicationSchema>;
export type NgoRequestInput = z.infer<typeof ngoRequestSchema>;
export type BookRequestInput = z.infer<typeof bookRequestSchema>;
export type EventRegistrationInput = z.infer<typeof eventRegistrationSchema>;
export type ContactMessageInput = z.infer<typeof contactMessageSchema>;