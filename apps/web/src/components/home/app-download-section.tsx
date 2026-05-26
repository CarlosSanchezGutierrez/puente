import { ArrowRight, Download, Smartphone } from "lucide-react";
import Link from "next/link";

export function AppDownloadSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="grid gap-8 rounded-[1.5rem] border border-[#d7dedf] bg-white/72 p-6 md:grid-cols-[0.72fr_1.28fr] md:items-center md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#60738c]">App</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#10233f] md:text-5xl">
            Android beta.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <p className="text-sm leading-7 text-[#425875]">
            La primera APK de Puente Impacto abre la misma plataforma web dentro de una app Android. Es una version beta mientras se prepara una publicacion formal en tiendas.
          </p>

          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
            href="/descargar"
          >
            Descargar
            <Download className="ml-2 size-4" />
          </Link>
        </div>

        <div className="md:col-span-2 border-t border-[#d7dedf] pt-5">
          <div className="flex items-start gap-3 text-sm leading-7 text-[#60738c]">
            <Smartphone className="mt-1 size-5 shrink-0 text-[#10233f]" />
            <span>En Android, la instalacion fuera de Play Store puede mostrar una advertencia del sistema.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
