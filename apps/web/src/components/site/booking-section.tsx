import { BookingLink } from "@/components/site/booking-link";

type BookingSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function BookingSection({
  eyebrow = "Agenda",
  title = "Agenda una reunion breve.",
  description = "Podemos revisar tu proyecto, escuela, organizacion o posible colaboracion en una reunion general de 30 minutos.",
}: BookingSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-white/72 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#425875]">{description}</p>
        </div>
        <BookingLink />
      </div>
    </section>
  );
}
