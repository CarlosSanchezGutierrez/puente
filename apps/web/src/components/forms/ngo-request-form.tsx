"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ngoRequestSchema, type NgoRequestInput } from "@puente/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function NgoRequestForm() {
  const [submitted, setSubmitted] = useState(false);

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
    },
  });

  function onSubmit(values: NgoRequestInput) {
    console.log("NGO request draft:", values);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] p-5 text-[#425875]">
        Recibimos tu solicitud localmente. El siguiente paso será conectarla a Supabase.
      </div>
    );
  }

  return (
    <form className="mt-6 grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
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

      <Button className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]" type="submit">
        Enviar solicitud
      </Button>
    </form>
  );
}