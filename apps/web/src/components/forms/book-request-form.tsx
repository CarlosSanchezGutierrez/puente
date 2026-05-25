"use client";

import { submitBookRequest, type FormActionResult } from "@/app/actions/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookRequestSchema, type BookRequestInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { FormStatusMessage } from "@/components/forms/form-status-message";
import { PrivacyConsentField } from "@/components/forms/privacy-consent-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function BookRequestForm({ bookTitle }: { bookTitle?: string }) {
  const [result, setResult] = useState<FormActionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookRequestInput>({
    resolver: zodResolver(bookRequestSchema),
    defaultValues: {
      bookTitle: bookTitle ?? "",
      requesterName: "",
      requesterEmail: "",
      reason: "",
      privacyAccepted: false,
    },
  });

  async function onSubmit(values: BookRequestInput) {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await submitBookRequest(values);
      setResult(response);

      if (response.ok) {
        form.reset({
          bookTitle: bookTitle ?? "",
          requesterName: "",
          requesterEmail: "",
          reason: "",
          privacyAccepted: false,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-5 grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
      <FormStatusMessage result={result} />

      <input type="hidden" {...form.register("bookTitle")} />

      <div className="grid gap-2">
        <Label>Nombre</Label>
        <Input placeholder="Tu nombre" {...form.register("requesterName")} />
        <FormError message={form.formState.errors.requesterName?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Correo</Label>
        <Input placeholder="tu@email.com" type="email" {...form.register("requesterEmail")} />
        <FormError message={form.formState.errors.requesterEmail?.message} />
      </div>

      <div className="grid gap-2">
        <Label>¿Por qué te interesa este libro?</Label>
        <Textarea placeholder="Una razón breve es suficiente." {...form.register("reason")} />
        <FormError message={form.formState.errors.reason?.message} />
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
        {isSubmitting ? "Enviando..." : "Solicitar libro"}
      </Button>
    </form>
  );
}