"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type InterestType = "general" | "ngo" | "program" | "service" | "research" | "team";

const interestOptions: Array<{
  value: InterestType;
  label: string;
  description: string;
}> = [
  {
    value: "general",
    label: "General",
    description: "No estoy seguro de la ruta exacta.",
  },
  {
    value: "ngo",
    label: "ONGs",
    description: "Organizaciones, procesos, datos o sistemas.",
  },
  {
    value: "program",
    label: "Programas",
    description: "Eventos, orientacion vocacional o talleres.",
  },
  {
    value: "service",
    label: "Servicios",
    description: "Audiovisual, red, WiFi, camaras o soporte de campo.",
  },
  {
    value: "research",
    label: "Investigacion",
    description: "Reportes, prototipos o investigacion aplicada.",
  },
  {
    value: "team",
    label: "Equipo",
    description: "Colaboracion, voluntariado o participacion.",
  },
];

const initialState = {
  interestType: "general" as InterestType,
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  roleOrContext: "",
  message: "",
  preferredContactMethod: "email",
  termsAccepted: false,
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  function updateField(name: string, value: string | boolean) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error ?? "No pudimos guardar el mensaje.");
      }

      window.location.assign("/gracias?tipo=contacto");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Ocurrio un error al enviar el mensaje.");
    }
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-3">
        <label className="text-sm font-semibold text-[#10233f]">Tema</label>

        <div className="grid gap-3 md:grid-cols-2">
          {interestOptions.map((option) => {
            const selected = form.interestType === option.value;

            return (
              <button
                className={`rounded-[1.25rem] border p-4 text-left transition ${
                  selected
                    ? "border-[#10233f] bg-[#10233f] text-white"
                    : "border-[#d7dedf] bg-white/75 text-[#10233f] hover:bg-white"
                }`}
                key={option.value}
                onClick={() => updateField("interestType", option.value)}
                type="button"
              >
                <span className="block font-semibold">{option.label}</span>
                <span className={`mt-2 block text-sm leading-6 ${selected ? "text-[#d7e7f6]" : "text-[#60738c]"}`}>
                  {option.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Nombre</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("fullName", event.target.value)}
            required
            value={form.fullName}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Correo</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={form.email}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Telefono opcional</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("phone", event.target.value)}
            value={form.phone}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Organizacion opcional</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("organization", event.target.value)}
            value={form.organization}
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[#10233f]">Contexto breve</span>
        <input
          className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
          onChange={(event) => updateField("roleOrContext", event.target.value)}
          placeholder="Ej. escuela, ONG, evento, proyecto, colaboracion, investigacion..."
          value={form.roleOrContext}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[#10233f]">Mensaje</span>
        <textarea
          className="min-h-36 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 py-3 text-[#10233f] outline-none transition focus:border-[#10233f]"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Cuentanos que necesitas, que problema quieres resolver o que tipo de apoyo buscas."
          required
          value={form.message}
        />
      </label>

      <label className="hidden">
        Website
        <input
          autoComplete="off"
          name="website"
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          value={form.website}
        />
      </label>

      <label className="flex gap-3 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
        <input
          checked={form.termsAccepted}
          className="mt-1 size-4"
          onChange={(event) => updateField("termsAccepted", event.target.checked)}
          required
          type="checkbox"
        />
        <span className="text-sm leading-6 text-[#425875]">
          Acepto que Puente Impacto use esta informacion para dar seguimiento al mensaje,
          conforme al aviso de privacidad.
        </span>
      </label>

      {feedback ? (
        <div
          className={`rounded-[1.25rem] border p-4 text-sm leading-6 ${
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          <div className="flex items-start gap-3">
            {status === "success" ? <CheckCircle2 className="mt-0.5 size-5" /> : null}
            <span>{feedback}</span>
          </div>
        </div>
      ) : null}

      <button
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-6 text-sm font-medium text-white transition hover:bg-[#1b365f] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" ? (
          <Loader2 className="mr-2 size-4 animate-spin" />
        ) : (
          <Send className="mr-2 size-4" />
        )}
        Enviar mensaje
      </button>
    </form>
  );
}