"use client";

import { submitNgoRequest, type FormActionResult } from "@/app/actions/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { ngoRequestSchema, type NgoRequestInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { FormStatusMessage } from "@/components/forms/form-status-message";
import { PrivacyConsentField } from "@/components/forms/privacy-consent-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function NgoRequestForm() {
  const [result, setResult] = useState<FormActionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NgoRequestInput>({
    resolver: zodResolver(ngoRequestSchema),
    defaultValues: {
      organizationName: "",
      organizationType: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      city: "",
      peopleServedEstimate: "",
      problemDescription: "",
      currentProcess: "",
      desiredSolution: "",
      urgency: "",
      approximateBudgetMxn: "",
      wantsAnnualFreeProgram: false,
      wantsSocialDiscountQuote: true,
      privacyAccepted: false,
    },
  });

  async function onSubmit(values: NgoRequestInput) {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await submitNgoRequest(values);
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
        <Label>Nombre de la organización</Label>
        <Input placeholder="Nombre de la ONG o proyecto social" {...form.register("organizationName")} />
        <FormError message={form.formState.errors.organizationName?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Persona de contacto</Label>
        <Input placeholder="Nombre completo" {...form.register("contactName")} />
        <FormError message={form.formState.errors.contactName?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Correo</Label>
        <Input placeholder="contacto@organizacion.org" type="email" {...form.register("contactEmail")} />
        <FormError message={form.formState.errors.contactEmail?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Ciudad</Label>
        <Input placeholder="Monterrey, Tampico, CDMX..." {...form.register("city")} />
        <FormError message={form.formState.errors.city?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Personas beneficiadas aproximadamente</Label>
        <Input type="number" min="0" placeholder="Ej. 500" {...form.register("peopleServedEstimate")} />
        <FormError message={form.formState.errors.peopleServedEstimate?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Problema o proceso que quieren mejorar</Label>
        <Textarea placeholder="Cuéntanos qué hacen hoy, qué problema tienen y qué les gustaría mejorar." {...form.register("problemDescription")} />
        <FormError message={form.formState.errors.problemDescription?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Solución deseada</Label>
        <Textarea placeholder="Sistema, app, dashboard, formulario, automatización, base de datos..." {...form.register("desiredSolution")} />
        <FormError message={form.formState.errors.desiredSolution?.message} />
      </div>

      <label className="flex items-start gap-3 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm text-[#425875]">
        <input type="checkbox" className="mt-1" {...form.register("wantsAnnualFreeProgram")} />
        <span>Queremos participar en la convocatoria del proyecto gratuito anual.</span>
      </label>

      <label className="flex items-start gap-3 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm text-[#425875]">
        <input type="checkbox" className="mt-1" {...form.register("wantsSocialDiscountQuote")} />
        <span>Queremos recibir una cotización con cuota social si el proyecto no entra al programa gratuito.</span>
      </label>

      <PrivacyConsentField
        registration={form.register("privacyAccepted")}
        message={form.formState.errors.privacyAccepted?.message}
      />

      <Button
        className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </Button>
    </form>
  );
}