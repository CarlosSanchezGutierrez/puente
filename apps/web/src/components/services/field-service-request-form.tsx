"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type RequestType = "audiovisual" | "technical" | "both";

const requestTypes: Array<{
  value: RequestType;
  label: string;
  description: string;
}> = [
  {
    value: "audiovisual",
    label: "Cobertura audiovisual",
    description: "Foto, video, entrevistas, recorridos y material de comunicacion.",
  },
  {
    value: "technical",
    label: "Clinica tecnica",
    description: "Revision basica de internet, WiFi, red local, camaras y dispositivos.",
  },
  {
    value: "both",
    label: "Ambas",
    description: "Apoyo audiovisual y revision tecnica para el mismo evento o sede.",
  },
];

const serviceOptions = [
  "Cobertura de evento",
  "Entrevistas o testimonios",
  "Video para redes o reporte",
  "Tomas aereas con dron",
  "Revision de internet",
  "Optimizacion de WiFi",
  "Diagnostico de cableado Ethernet",
  "Revision de camaras IP",
  "Inventario de dispositivos",
  "Documentacion tecnica",
  "Recomendaciones de compra",
  "Monitoreo basico",
];

const initialState = {
  requestType: "audiovisual" as RequestType,
  organizationName: "",
  contactName: "",
  email: "",
  phone: "",
  city: "",
  location: "",
  eventDate: "",
  audienceSize: "",
  needsDrone: false,
  requestedServices: [] as string[],
  context: "",
  preferredContactMethod: "email",
  termsAccepted: false,
  website: "",
};

export function FieldServiceRequestForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  function updateField(name: string, value: string | boolean | string[]) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function toggleService(service: string) {
    setForm((current) => {
      const exists = current.requestedServices.includes(service);

      return {
        ...current,
        requestedServices: exists
          ? current.requestedServices.filter((item) => item !== service)
          : [...current.requestedServices, service],
      };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setFeedback(null);

    try {
      const response = await fetch("/api/field-service-requests", {
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
        throw new Error(data?.error ?? "No pudimos guardar la solicitud.");
      }

      window.location.assign("/gracias?tipo=servicios");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Ocurrio un error al enviar la solicitud.");
    }
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="grid gap-3">
        <label className="text-sm font-semibold text-[#10233f]">Tipo de solicitud</label>

        <div className="grid gap-3 md:grid-cols-3">
          {requestTypes.map((option) => {
            const selected = form.requestType === option.value;

            return (
              <button
                className={`rounded-[1.25rem] border p-4 text-left transition ${
                  selected
                    ? "border-[#10233f] bg-[#10233f] text-white"
                    : "border-[#d7dedf] bg-white/75 text-[#10233f] hover:bg-white"
                }`}
                key={option.value}
                onClick={() => updateField("requestType", option.value)}
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
          <span className="text-sm font-semibold text-[#10233f]">Organizacion, escuela o evento</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("organizationName", event.target.value)}
            required
            value={form.organizationName}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Persona de contacto</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("contactName", event.target.value)}
            required
            value={form.contactName}
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
          <span className="text-sm font-semibold text-[#10233f]">Ciudad o zona</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("city", event.target.value)}
            value={form.city}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Ubicacion o sede</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("location", event.target.value)}
            value={form.location}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Fecha tentativa</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            onChange={(event) => updateField("eventDate", event.target.value)}
            type="date"
            value={form.eventDate}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[#10233f]">Asistentes estimados</span>
          <input
            className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
            min="1"
            onChange={(event) => updateField("audienceSize", event.target.value)}
            type="number"
            value={form.audienceSize}
          />
        </label>
      </div>

      <div className="grid gap-3">
        <span className="text-sm font-semibold text-[#10233f]">Servicios de interes</span>

        <div className="grid gap-2 md:grid-cols-2">
          {serviceOptions.map((service) => {
            const checked = form.requestedServices.includes(service);

            return (
              <button
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                  checked
                    ? "border-[#10233f] bg-[#10233f] text-white"
                    : "border-[#d7dedf] bg-white/75 text-[#425875] hover:bg-white"
                }`}
                key={service}
                onClick={() => toggleService(service)}
                type="button"
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <label className="flex gap-3 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
        <input
          checked={form.needsDrone}
          className="mt-1 size-4"
          onChange={(event) => updateField("needsDrone", event.target.checked)}
          type="checkbox"
        />
        <span className="text-sm leading-6 text-[#425875]">
          Me interesa evaluar tomas con dron. Entiendo que depende de permisos,
          condiciones del espacio, clima y seguridad.
        </span>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[#10233f]">Contexto de la solicitud</span>
        <textarea
          className="min-h-36 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 py-3 text-[#10233f] outline-none transition focus:border-[#10233f]"
          onChange={(event) => updateField("context", event.target.value)}
          placeholder="CuÃ©ntanos quÃ© evento, sede o proyecto quieres apoyar, quÃ© problema buscas resolver y quÃ© resultado esperas."
          value={form.context}
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
          Acepto que Puente Impacto use esta informacion para dar seguimiento a la solicitud,
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
        Enviar solicitud
      </button>
    </form>
  );
}