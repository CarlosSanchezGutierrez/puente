"use client";

import { AlertTriangle, ArrowLeft, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] bg-[#f7f4ed] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-6 shadow-sm md:p-10">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#10233f] text-white">
            <AlertTriangle className="size-7" />
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
            Error de aplicacion
          </p>

          <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] md:text-7xl">
            Algo no carg&oacute; correctamente.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#425875]">
            Puedes intentar recargar esta secci&oacute;n. Si el problema contin&uacute;a, vuelve al inicio
            o reporta el caso desde la p&aacute;gina de contacto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
              onClick={reset}
              type="button"
            >
              <RefreshCcw className="mr-2 size-4" />
              Intentar de nuevo
            </button>

            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
              href="/"
            >
              <ArrowLeft className="mr-2 size-4" />
              Volver al inicio
            </Link>
          </div>

          {error.digest ? (
            <p className="mt-8 text-xs text-[#60738c]">Referencia: {error.digest}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}