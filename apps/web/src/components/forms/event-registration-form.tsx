"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { eventRegistrationSchema, type EventRegistrationInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EventRegistrationForm({ eventTitle }: { eventTitle?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<EventRegistrationInput>({
    resolver: zodResolver(eventRegistrationSchema),
    defaultValues: {
      eventTitle: eventTitle ?? "",
      fullName: "",
      email: "",
      note: "",
    },
  });

  function onSubmit(values: EventRegistrationInput) {
    console.log("Event registration draft:", values);
    setSubmitted(true);
    form.reset({
      eventTitle: eventTitle ?? "",
      fullName: "",
      email: "",
      note: "",
    });
  }

  if (submitted) {
    return (
      <div className="mt-4 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm text-[#425875]">
        Registro guardado localmente. Después lo conectaremos a Supabase.
      </div>
    );
  }

  return (
    <form className="mt-5 grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
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

      <Button className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]" type="submit">
        Registrarme
      </Button>
    </form>
  );
}