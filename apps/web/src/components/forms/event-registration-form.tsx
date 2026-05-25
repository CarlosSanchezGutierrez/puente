"use client";

import { submitEventRegistration, type FormActionResult } from "@/app/actions/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventRegistrationSchema, type EventRegistrationInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { FormStatusMessage } from "@/components/forms/form-status-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EventRegistrationForm({ eventTitle }: { eventTitle?: string }) {
  const [result, setResult] = useState<FormActionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EventRegistrationInput>({
    resolver: zodResolver(eventRegistrationSchema),
    defaultValues: {
      eventTitle: eventTitle ?? "",
      fullName: "",
      email: "",
      note: "",
    },
  });

  async function onSubmit(values: EventRegistrationInput) {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await submitEventRegistration(values);
      setResult(response);

      if (response.ok) {
        form.reset({
          eventTitle: eventTitle ?? "",
          fullName: "",
          email: "",
          note: "",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-5 grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
      <FormStatusMessage result={result} />

      <input type="hidden" {...form.register("eventTitle")} />

      <div className="grid gap-2">
        <Label>Nombre</Label>
        <Input placeholder="Tu nombre" {...form.register("fullName")} />
        <FormError message={form.formState.errors.fullName?.message} />
      </div>

      <div className="grid gap-2">
        <Label>Correo</Label>
        <Input placeholder="tu@email.com" type="email" {...form.register("email")} />
        <FormError message={form.formState.errors.email?.message} />
      </div>

      <Button
        className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Enviando..." : "Registrarme"}
      </Button>
    </form>
  );
}