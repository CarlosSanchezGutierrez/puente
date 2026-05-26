import { ExternalLink, Mail, MessageCircle, QrCode } from "lucide-react";
import QRCode from "qrcode";
import { ShareActions } from "@/components/share/share-actions";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";
import { contactLinks, siteContact, socialLinks } from "@/lib/site-contact";

export const metadata = {
  title: "Compartir",
  description: "Codigo QR y enlaces oficiales de Puente Impacto.",
};

export default async function CompartirPage() {
  const qrDataUrl = await QRCode.toDataURL(siteContact.siteUrl, {
    errorCorrectionLevel: "H",
    margin: 2,
    width: 720,
    color: {
      dark: "#10233F",
      light: "#F7F4ED",
    },
  });

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-[#10233f] text-white">
              <QrCode className="size-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#526981]">
              Compartir
            </p>
            <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Puente Impacto
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#425875]">
              Escanea el codigo QR para abrir nuestro sitio web o comparte el enlace oficial de Puente Impacto.
            </p>

            <div className="mt-8">
              <ShareActions url={siteContact.siteUrl} />
            </div>
          </div>

          <Card className="border-[#d7dedf] bg-white/80 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="rounded-[1.75rem] border border-[#d7dedf] bg-[#f7f4ed] p-5">
                <img
                  alt="Codigo QR para abrir puenteimpacto.org"
                  className="mx-auto aspect-square w-full max-w-[420px] rounded-[1.25rem]"
                  src={qrDataUrl}
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm font-semibold text-[#10233f]">puenteimpacto.org</p>
                <p className="mt-2 text-sm leading-7 text-[#526981]">
                  Tecnologia social para proyectos reales.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[1.5rem] border border-[#d7dedf] bg-white/72 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Canales oficiales
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
                Contacto y redes
              </h2>
            </div>

            <div>
              <div className="grid gap-3">
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
                    style={{ color: item.color }}
                    target="_blank"
                  >
                    {item.label}
                    <ExternalLink className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
