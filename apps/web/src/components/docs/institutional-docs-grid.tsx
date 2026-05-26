import { ArrowRight, Download, FileText } from "lucide-react";
import { institutionalDocs, type InstitutionalDocKey } from "@/lib/institutional-docs";

type InstitutionalDocsGridProps = {
  only?: InstitutionalDocKey[];
  compact?: boolean;
};

export function InstitutionalDocsGrid({ only, compact = false }: InstitutionalDocsGridProps) {
  const docs = only
    ? institutionalDocs.filter((doc) => only.includes(doc.key))
    : institutionalDocs;

  return (
    <div className={compact ? "grid gap-3" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-5"}>
      {docs.map((doc) => (
        <a
          className={
            compact
              ? "group flex items-center justify-between gap-4 rounded-[1.25rem] border border-[#d7dedf] bg-white/72 p-4 transition hover:-translate-y-0.5 hover:bg-white"
              : "group flex min-h-[220px] flex-col rounded-[1.5rem] border border-[#d7dedf] bg-white/72 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
          }
          href={doc.href}
          key={doc.key}
          rel="noreferrer"
          target="_blank"
        >
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#10233f] text-white">
            <FileText className="size-5" />
          </span>

          <span className={compact ? "min-w-0 flex-1" : "mt-5 flex flex-1 flex-col"}>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
              {doc.label}
            </span>
            <span className="mt-2 block text-lg font-semibold tracking-[-0.035em] text-[#10233f]">
              {doc.title}
            </span>
            {!compact ? (
              <span className="mt-3 block text-sm leading-7 text-[#425875]">{doc.description}</span>
            ) : null}
          </span>

          <span className={compact ? "shrink-0 text-[#10233f]" : "mt-5 inline-flex items-center text-sm font-semibold text-[#10233f]"}>
            {compact ? <ArrowRight className="size-4" /> : <>Abrir PDF <Download className="ml-2 size-4" /></>}
          </span>
        </a>
      ))}
    </div>
  );
}
