"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type ParticipantType = "school" | "mentor" | "student";

const participantOptions: Array<{
  value: ParticipantType;
  label: string;
  description: string;
}> = [
  {
    value: "school",
    label: "Preparatoria",
    description: "Quiero proponer una escuela o sesion institucional.",
  },
  {
    value: "mentor",
    label: "Mentor vocacional",
    description: "Quiero compartir experiencia desde mi carrera o profesion.",
  },
  {
    value: "student",
    label: "Estudiante",
    description: "Quiero recibir recursos y resolver dudas vocacionales.",
  },
];

const interestAreaOptions = [
  "Salud y bienestar",
  "Ingenieria y tecnologia",
  "Arquitectura, diseno y ciudad",
  "Negocios y organizaciones",
  "Humanidades, comunicacion y artes",
  "Impacto social e interdisciplinario",
];

const initialState = {
  participantType: "school" as ParticipantType,
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  city: "",
  roleOrCareer: "",
  interestAreas: [] as string[],
  message: "",
  preferredContactMethod: "email",
  termsAccepted: false,
  website: "",
};

export function VocationalInterestForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  function updateField(name: string, value: string | boolean | string[]) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function toggleArea(area: string) {
    setForm((current) => {
      const exists = current.interestAreas.includes(area);

      return {
        ...current,
        interestAreas: exists
          ? current.interestAreas.filter((item) => item !== area)
          : [...current.interestAreas, area],
      };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setFeedback(null);

    try {
      const response = await fetch("/api/vocational-interest", {
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
        throw new Error(data?.error ?? "No pudimos guardar el registro.");
      }

      window.location.assign("/gracias?tipo=vocacional");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Ocurrio un error al enviar el registro.");
    }
  }

  const selectedOption = participantOptions.find(
    (option) => option.value === form.participantType,
  );

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-3">
        <label className="text-sm font-semibold text-[#10233f]">Tipo de participante</label>

        <div className="grid gap-3 md:grid-cols-3">
          {participantOptions.map((option) => {
            const selected = form.participantType === option.value;

            return (
              <button
                className={`rounded-[1.25rem] border p-4 text-left transition ${
                  selected
                    ? "border-[#10233f] bg-[#10233f] text-white"
                    : "border-[#d7dedf] bg-white/75 text-[#10233f] hover:bg-white"
                }`}
                key={option.value}
                onClick={() => updateField("participantType", option.value)}
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
          <span className="text-sm font-semibold text-[#10233f]">Nombre completo</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            name="fullName"
            onChange={(event) => updateField("fullName", event.target.value)}
            required
            value={form.fullName}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Correo</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            name="email"
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
            name="phone"
            onChange={(event) => updateField("phone", event.target.value)}
            value={form.phone}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">
            {form.participantType === "school"
              ? "Preparatoria"
              : form.participantType === "mentor"
                ? "Universidad, empresa u organizacion"
                : "Preparatoria o escuela"}
          </span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            name="organization"
            onChange={(event) => updateField("organization", event.target.value)}
            value={form.organization}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Ciudad o zona</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            name="city"
            onChange={(event) => updateField("city", event.target.value)}
            value={form.city}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">
            {form.participantType === "mentor"
              ? "Carrera, profesion o area"
              : "Carreras o areas de interes"}
          </span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            name="roleOrCareer"
            onChange={(event) => updateField("roleOrCareer", event.target.value)}
            value={form.roleOrCareer}
          />
        </label>
      </div>

      <div className="grid gap-3">
        <span className="text-sm font-semibold text-[#10233f]">Areas vocacionales</span>

        <div className="grid gap-2 md:grid-cols-2">
          {interestAreaOptions.map((area) => {
            const checked = form.interestAreas.includes(area);

            return (
              <button
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                  checked
                    ? "border-[#10233f] bg-[#10233f] text-white"
                    : "border-[#d7dedf] bg-white/75 text-[#425875] hover:bg-white"
                }`}
                key={area}
                onClick={() => toggleArea(area)}
                type="button"
              >
                {area}
              </button>
            );
          })}
        </div>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[#10233f]">
          Mensaje o contexto
        </span>
        <textarea
          className="min-h-36 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 py-3 text-[#10233f] outline-none transition focus:border-[#10233f]"
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={
            selectedOption
              ? `CuÃ©ntanos brevemente tu caso como ${selectedOption.label.toLowerCase()}.`
              : "CuÃ©ntanos brevemente tu caso."
          }
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
          Acepto que Puente Impacto use esta informacion para dar seguimiento al programa vocacional,
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
        Enviar registro
      </button>
    </form>
  );
}