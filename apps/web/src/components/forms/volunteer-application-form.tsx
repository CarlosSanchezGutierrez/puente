"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { volunteerApplicationSchema, type VolunteerApplicationInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function VolunteerApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

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
    },
  });

  function onSubmit(values: VolunteerApplicationInput) {
    console.log("Volunteer application draft:", values);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] p-5 text-[#425875]">
        Recibimos tu aplicación localmente. El siguiente paso será conectar este formulario a Supabase.
      </div>
    );
  }

  return (
    <form className="mt-6 grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
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

      <Button className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]" type="submit">
        Enviar aplicación
      </Button>
    </form>
  );
}