import { BookingLink } from "@/components/site/booking-link";
import { ExternalLink, Globe2, Mail, MessageCircle, QrCode } from "lucide-react";
import QRCode from "qrcode";
import { ShareActions } from "@/components/share/share-actions";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";
import { contactLinks, siteContact, socialLinks } from "@/lib/site-contact";

export const metadata = {
  title: "Compartir",
  description: "Codigo QR, sitio web, redes sociales y canales oficiales de Puente Impacto.",
};

export default async function CompartirPage() {
  const qrDataUrl = await QRCode.toDataURL(siteContact.siteUrl, {
    errorCorrectionLevel: "H",
    margin: 2,
    width: 860,
    color: {
      dark: "#10233F",
      light: "#F7F4ED",
    },
  });

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dedf] bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
              <QrCode className="size-4 text-[#10233f]" />
              Compartir
            </div>

            <h1 className="mt-5 max-w-3xl font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">
              Comparte Puente Impacto.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#425875] md:text-lg">
              Escanea el codigo QR o comparte el enlace oficial para abrir nuestro sitio web, redes sociales y canales de contacto.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <ShareActions url={siteContact.siteUrl} />
              <BookingLink />

              <div className="flex flex-wrap gap-2">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
                  href={siteContact.siteUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Abrir sitio
                  <Globe2 className="ml-2 size-4" />
                </a>

                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
                  href={contactLinks.email}
                >
                  Correo
                  <Mail className="ml-2 size-4" />
                </a>

                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white"
                  href={contactLinks.whatsapp}
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp
                  <MessageCircle className="ml-2 size-4 text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden border-[#d7dedf] bg-white/80 shadow-sm">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="rounded-[2rem] border border-[#d7dedf] bg-[#f7f4ed] p-4 sm:p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element -- QR generated as data URL on the server. */}
                  <img
                    alt="Codigo QR para abrir puenteimpacto.org"
                    className="mx-auto aspect-square w-full max-w-[460px] rounded-[1.5rem]"
                    src={qrDataUrl}
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#526981]">
                    Escanea para abrir
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.035em] text-[#10233f]">
                    puenteimpacto.org
                  </p>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#526981]">
                    Tecnologia social para proyectos reales.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="border-[#d7dedf] bg-white/72 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Contacto directo
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
                Hablemos del proyecto.
              </h2>

              <div className="mt-6 grid gap-3">
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-[#d7dedf] bg-white/70 p-4 text-sm font-medium text-[#425875] transition hover:bg-white hover:text-[#10233f]"
                  href={contactLinks.email}
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#10233f] text-white">
                    <Mail className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-[#526981]">Correo</span>
                    {siteContact.email}
                  </span>
                </a>

                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-[#d7dedf] bg-white/70 p-4 text-sm font-medium text-[#425875] transition hover:bg-white hover:text-[#10233f]"
                  href={contactLinks.whatsapp}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C4A]">
                    <MessageCircle className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-[#526981]">WhatsApp</span>
                    {siteContact.phoneDisplay}
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#d7dedf] bg-white/72 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Redes oficiales
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
                Sigue Puente Impacto.
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((item) => (
                  <a
                    className="group inline-flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-[#d7dedf] bg-white/70 px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white"
                    href={item.href}
                    key={item.href}
                    rel="noreferrer"
                    style={{ color: item.color }}
                    target="_blank"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="size-4 transition group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}
