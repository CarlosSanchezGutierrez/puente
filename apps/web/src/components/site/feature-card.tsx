import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-[1.75rem] border border-[#d7dedf] bg-white/75 p-7 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <div className="mb-10 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
        <Icon className="size-6 text-[#10233f]" />
      </div>
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#10233f]">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-[#425875]">{description}</p>
    </article>
  );
}