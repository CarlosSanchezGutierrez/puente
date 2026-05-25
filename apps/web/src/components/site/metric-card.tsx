export function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5">
      <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[#c9d8e8]">{label}</p>
    </div>
  );
}