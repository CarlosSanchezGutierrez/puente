"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { bookRequestSchema, type BookRequestInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function BookRequestForm({ bookTitle }: { bookTitle?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookRequestInput>({
    resolver: zodResolver(bookRequestSchema),
    defaultValues: {
      bookTitle: bookTitle ?? "",
      requesterName: "",
      requesterEmail: "",
      reason: "",
    },
  });

  function onSubmit(values: BookRequestInput) {
    console.log("Book request draft:", values);
    setSubmitted(true);
    form.reset({
      bookTitle: bookTitle ?? "",
      requesterName: "",
      requesterEmail: "",
      reason: "",
    });
  }

  if (submitted) {
    return (
      <div className="mt-4 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm text-[#425875]">
        Solicitud registrada localmente. Después la conectaremos a Supabase.
      </div>
    );
  }

  return (
    <form className="mt-5 grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
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

      <Button className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]" type="submit">
        Solicitar libro
      </Button>
    </form>
  );
}