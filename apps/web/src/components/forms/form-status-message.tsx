import type { FormActionResult } from "@/app/actions/forms";

export function FormStatusMessage({ result }: { result: FormActionResult | null }) {
  if (!result) {
    return null;
  }

  return (
    <div
      className={`rounded-2xl border p-4 text-sm ${
        result.ok
          ? "border-[#d7dedf] bg-[#fbfaf7] text-[#425875]"
          : "border-red-200 bg-red-50 text-red-800"
      }`}
    >
      {result.message}
    </div>
  );
}