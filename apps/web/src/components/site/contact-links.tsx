import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import { contactLinks, siteContact, socialLinks } from "@/lib/site-contact";

type ContactLinksProps = {
  variant?: "footer" | "card";
};

export function ContactLinks({ variant = "footer" }: ContactLinksProps) {
  const isCard = variant === "card";

  return (
    <div
      className={
        isCard
          ? "rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-5"
          : "mt-6"
      }
    >
      {isCard ? (
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
            Canales
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#10233f]">
            Contacto y redes
          </h2>
        </div>
      ) : null}

      <div className="grid gap-2">
        <a
          className="inline-flex items-center gap-2 text-sm font-medium text-[#425875] transition hover:text-[#10233f]"
          href={contactLinks.email}
        >
          <Mail className="size-4" />
          {siteContact.email}
        </a>

        <a
          className="inline-flex items-center gap-2 text-sm font-medium text-[#425875] transition hover:text-[#10233f]"
          href={contactLinks.whatsapp}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle className="size-4" />
          WhatsApp {siteContact.phoneDisplay}
        </a>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {socialLinks.map((item) => (
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#d7dedf] bg-white/70 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
            href={item.href}
            key={item.href}
            rel="noreferrer"
            target="_blank"
          >
            {item.label}
            <ExternalLink className="size-3.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
