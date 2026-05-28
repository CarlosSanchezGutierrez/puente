import { ArrowRight } from "lucide-react";
import Link from "next/link";

type FAQLinkSectionProps = {
  text?: string;
};

export function FAQLinkSection({
  text = "Antes de escribirnos, tambien puedes revisar preguntas frecuentes sobre servicios, ONG, escuelas, mentores y formas de colaboracion.",
}: FAQLinkSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <Link
        className="flex flex-col gap-3 rounded-[1.25rem] border border-[#d7dedf] bg-white/70 p-5 text-sm leading-7 text-[#425875] transition hover:bg-white sm:flex-row sm:items-center sm:justify-between"
        href="/faq"
      >
        <span>{text}</span>
        <span className="inline-flex shrink-0 items-center font-semibold text-[#10233f]">
          Ver FAQ
          <ArrowRight className="ml-2 size-4" />
        </span>
      </Link>
    </section>
  );
}
