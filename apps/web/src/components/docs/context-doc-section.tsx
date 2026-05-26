import { InstitutionalDocsGrid } from "@/components/docs/institutional-docs-grid";
import type { InstitutionalDocKey } from "@/lib/institutional-docs";

type ContextDocSectionProps = {
  title?: string;
  description?: string;
  docs: InstitutionalDocKey[];
};

export function ContextDocSection({
  title = "Documento relacionado",
  description = "Puedes abrir el PDF institucional correspondiente a esta seccion.",
  docs,
}: ContextDocSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-[1.5rem] border border-[#d7dedf] bg-white/60 p-5 md:p-6">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
            PDF
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#425875]">{description}</p>
        </div>
        <InstitutionalDocsGrid compact only={docs} />
      </div>
    </section>
  );
}
