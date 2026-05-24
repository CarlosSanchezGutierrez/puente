import { z } from "zod";

export const volunteerApplicationSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  area: z.string().min(2).max(80),
  motivation: z.string().min(20).max(1000),
  availabilityHoursPerWeek: z.number().int().min(1).max(40),
});

export const ngoRequestSchema = z.object({
  organizationName: z.string().min(2).max(160),
  contactName: z.string().min(2).max(120),
  email: z.string().email(),
  problemDescription: z.string().min(40).max(2000),
  wantsAnnualFreeProgram: z.boolean().default(false),
});

export const bookRequestSchema = z.object({
  bookId: z.string().min(1),
  requesterId: z.string().min(1),
  reason: z.string().min(10).max(500),
});
