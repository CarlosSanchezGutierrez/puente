import { Mail, MessageCircle } from "lucide-react";
import { contactLinks, socialLinks } from "@/lib/site-contact";

type IconProps = {
  className?: string;
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <rect height="16" rx="4.5" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" fill="currentColor" r="1.1" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.2 8.2V6.8c0-.7.5-1.1 1.2-1.1H17V3.1c-.8-.1-1.6-.1-2.4-.1-2.4 0-4 1.5-4 4.1v1.1H8v3h2.6V21h3.3v-9.8h2.7l.4-3h-3Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.7 9.4H3.5V20h3.2V9.4ZM5.1 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.5 20h-3.2v-5.6c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V20h-3.2s.1-9.7 0-10.6h3.2v1.5c.4-.7 1.2-1.8 3-1.8 2.2 0 3.8 1.4 3.8 4.5V20Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.9 12 4.9 12 4.9s-6 0-7.7.4a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.1V8.9l5.2 3.1L10 15.1Z" />
    </svg>
  );
}

function BrandIcon({ label, className }: { label: string; className?: string }) {
  if (label === "Instagram") return <InstagramIcon className={className} />;
  if (label === "Facebook") return <FacebookIcon className={className} />;
  if (label === "LinkedIn") return <LinkedInIcon className={className} />;
  if (label === "YouTube") return <YouTubeIcon className={className} />;
  return null;
}

export function MobileSocialBar() {
  return (
    <div className="border-b border-[#d7dedf] bg-[#f7f4ed]/92 px-4 py-2 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
        {socialLinks.map((item) => (
          <a
            aria-label={item.label}
            className="inline-flex size-9 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 shadow-sm transition active:scale-95"
            href={item.href}
            key={item.href}
            rel="noreferrer"
            style={{ color: item.color }}
            target="_blank"
            title={item.label}
          >
            <BrandIcon className="size-4" label={item.label} />
          </a>
        ))}

        <a
          aria-label="Correo"
          className="inline-flex size-9 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 text-[#10233f] shadow-sm transition active:scale-95"
          href={contactLinks.email}
          title="Correo"
        >
          <Mail className="size-4" />
        </a>

        <a
          aria-label="WhatsApp"
          className="inline-flex size-9 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 text-[#25D366] shadow-sm transition active:scale-95"
          href={contactLinks.whatsapp}
          rel="noreferrer"
          target="_blank"
          title="WhatsApp"
        >
          <MessageCircle className="size-4" />
        </a>
      </div>
    </div>
  );
}
