"use client";

import { Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const statusOptions = [
  { value: "new", label: "Nuevo" },
  { value: "reviewed", label: "Revisado" },
  { value: "contacted", label: "Contactado" },
  { value: "scheduled", label: "Agendado" },
  { value: "closed", label: "Cerrado" },
];

export function FieldServiceStatusControl({
  id,
  currentStatus,
}: {
  id: string;
  currentStatus: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const hasChanged = status !== currentStatus;

  async function saveStatus() {
    setIsSaving(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/field-service-requests/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error ?? "No se pudo actualizar el estado.");
      }

      setMessage("Guardado");
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Error al guardar.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="grid min-w-[190px] gap-2">
      <select
        className="min-h-10 rounded-xl border border-[#d7dedf] bg-white px-3 text-sm font-medium text-[#10233f] outline-none transition focus:border-[#10233f]"
        disabled={isSaving}
        onChange={(event) => setStatus(event.target.value)}
        value={status}
      >
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        className="inline-flex min-h-9 items-center justify-center rounded-full bg-[#10233f] px-4 text-xs font-medium text-white transition hover:bg-[#1b365f] disabled:cursor-not-allowed disabled:opacity-55"
        disabled={!hasChanged || isSaving}
        onClick={saveStatus}
        type="button"
      >
        {isSaving ? (
          <Loader2 className="mr-2 size-3.5 animate-spin" />
        ) : (
          <Check className="mr-2 size-3.5" />
        )}
        Guardar
      </button>

      {message ? (
        <p className="text-xs leading-5 text-[#60738c]">{message}</p>
      ) : null}
    </div>
  );
}