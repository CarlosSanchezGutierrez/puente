import { CalendarDays } from "lucide-react";
import { contactLinks } from "@/lib/site-contact";

type BookingLinkProps = {
  variant?: "header" | "button" | "card";
  className?: string;
};

export function BookingLink({ variant = "button", className = "" }: BookingLinkProps) {
  if (variant === "header") {
    return (
      <a
        className={`inline-flex min-h-9 items-center justify-center rounded-full border border-[#d7dedf] bg-white/70 px-3 text-xs font-semibold text-[#10233f] transition hover:bg-white ${className}`}
        href={contactLinks.booking}
        rel="noreferrer"
        target="_blank"
      >
        Agendar
      </a>
    );
  }

  if (variant === "card") {
    return (
      <a
        className={`group flex items-center justify-between gap-4 rounded-[1.35rem] border border-[#d7dedf] bg-white/75 p-5 text-left transition hover:-translate-y-0.5 hover:bg-white ${className}`}
        href={contactLinks.booking}
        rel="noreferrer"
        target="_blank"
      >
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
            Calendario
          </span>
          <span className="mt-2 block text-lg font-semibold tracking-[-0.035em] text-[#10233f]">
            Agendar reunion
          </span>
          <span className="mt-2 block text-sm leading-7 text-[#425875]">
            Reuniones generales de 30 minutos para revisar proyectos, organizaciones, escuelas o posibles colaboraciones.
          </span>
        </span>
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#10233f] text-white transition group-hover:scale-105">
          <CalendarDays className="size-5" />
        </span>
      </a>
    );
  }

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f] ${className}`}
      href={contactLinks.booking}
      rel="noreferrer"
      target="_blank"
    >
      Agendar
      <CalendarDays className="ml-2 size-4" />
    </a>
  );
}
