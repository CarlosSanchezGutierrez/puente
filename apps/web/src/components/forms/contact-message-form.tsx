"use client";

import { submitContactMessage, type FormActionResult } from "@/app/actions/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactMessageSchema, type ContactMessageInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { FormStatusMessage } from "@/components/forms/form-status-message";
import { PrivacyConsentField } from "@/components/forms/privacy-consent-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactMessageForm() {
  const [result, setResult] = useState<FormActionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      privacyAccepted: false,
    },
  });

  async function onSubmit(values: ContactMessageInput) {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await submitContactMessage(values);
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
        <Label>Asunto</Label>
        <Input placeholder="Voluntariado, ONG, biblioteca, taller..." {...form.register("subject")} />
        <FormError message={form.formState.errors.subject?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Mensaje</Label>
        <Textarea
          placeholder="Cuéntanos cómo podemos ayudarte o cómo quieres participar."
          {...form.register("message")}
        />
        <FormError message={form.formState.errors.message?.message} />
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
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}