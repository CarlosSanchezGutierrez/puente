"use client";

import { submitVolunteerApplication, type FormActionResult } from "@/app/actions/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { volunteerApplicationSchema, type VolunteerApplicationInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { FormStatusMessage } from "@/components/forms/form-status-message";
import { PrivacyConsentField } from "@/components/forms/privacy-consent-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function VolunteerApplicationForm() {
  const [result, setResult] = useState<FormActionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<VolunteerApplicationInput>({
    resolver: zodResolver(volunteerApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      university: "",
      career: "",
      area: "",
      skills: "",
      motivation: "",
      availabilityHoursPerWeek: 3,
      linkedinUrl: "",
      githubUrl: "",
      privacyAccepted: false,
    },
  });

  async function onSubmit(values: VolunteerApplicationInput) {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await submitVolunteerApplication(values);
      setResult(response);

      if (response.ok) {
        form.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-6 grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
      <FormStatusMessage result={result} />

      <div className="grid gap-2">
        <Label>Nombre completo</Label>
        <Input placeholder="Tu nombre" {...form.register("fullName")} />
        <FormError message={form.formState.errors.fullName?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Correo</Label>
        <Input placeholder="tu@email.com" type="email" {...form.register("email")} />
        <FormError message={form.formState.errors.email?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Área de interés</Label>
        <Input placeholder="Software, investigación, comunidad, media..." {...form.register("area")} />
        <FormError message={form.formState.errors.area?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Disponibilidad semanal</Label>
        <Input type="number" min="1" max="40" {...form.register("availabilityHoursPerWeek")} />
        <FormError message={form.formState.errors.availabilityHoursPerWeek?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Habilidades</Label>
        <Input placeholder="React, diseño, SQL, investigación, idiomas..." {...form.register("skills")} />
        <FormError message={form.formState.errors.skills?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Motivación</Label>
        <Textarea placeholder="Cuéntanos por qué quieres participar." {...form.register("motivation")} />
        <FormError message={form.formState.errors.motivation?.message} />
      </div>

      <PrivacyConsentField
        registration={form.register("privacyAccepted")}
        message={form.formState.errors.privacyAccepted?.message}
      />

      <Button
        className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Enviando..." : "Enviar aplicación"}
      </Button>
    </form>
  );
}