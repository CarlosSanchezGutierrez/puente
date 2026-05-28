import { Archive } from "lucide-react";
import { InstitutionalDocsGrid } from "@/components/docs/institutional-docs-grid";
import { BookingLink } from "@/components/site/booking-link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Kit institucional",
  description:
    "Documentos institucionales de Puente Impacto para ONG, escuelas, programas, recursos y presentacion inicial.",
};

export default function KitPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-[#10233f] text-white shadow-sm">
              <Archive className="size-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526981]">
              Kit institucional
            </p>
            <h1 className="mt-4 max-w-4xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Documentos para compartir Puente Impacto.
            </h1>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-[#425875]">
              Presentaciones breves para conocer la iniciativa, revisar servicios, explicar Puente Vocacional, mostrar recursos y compartir programas.
            </p>
            <div className="mt-6">
              <BookingLink />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <InstitutionalDocsGrid />
      </section>
    </SiteShell>
  );
}
