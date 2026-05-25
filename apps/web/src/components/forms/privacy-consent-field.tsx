import Link from "next/link";
import type { UseFormRegisterReturn } from "react-hook-form";
import { FormError } from "@/components/forms/form-error";

export function PrivacyConsentField({
  registration,
  error,
}: {
  registration: UseFormRegisterReturn;
  error?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="flex items-start gap-3 rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#425875]">
        <input type="checkbox" className="mt-1" {...registration} />
        <span>
          Acepto el{" "}
          <Link className="font-medium text-[#10233f] underline" href="/privacidad">
            aviso de privacidad
          </Link>{" "}
          y autorizo que Puente use mis datos para dar seguimiento a esta solicitud.
        </span>
      </label>
      <FormError error={undefined} message={error} />
    </div>
  );
}