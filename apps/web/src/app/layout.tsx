import { StructuredData } from "@/components/seo/structured-data";
import { ServiceWorkerRegistration } from "@/components/pwa/service-worker-registration";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { Instrument_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL("https://puenteimpacto.org"),
  title: {
    default: "Puente Impacto | Software para ONGs y proyectos educativos",
    template: "%s | Puente Impacto",
  },
  description:
    "Apoyo gratuito o preferencial para ONGs, eventos educativos, orientación vocacional y documentación de proyectos sociales.",
  applicationName: "Puente Impacto",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://puenteimpacto.org",
    siteName: "Puente Impacto",
    title: "Puente Impacto | Software para ONGs y proyectos educativos",
    description:
      "Apoyo gratuito o preferencial para ONGs, eventos educativos, orientación vocacional y documentación de proyectos sociales.",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Puente Impacto: software para ONGs y proyectos educativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puente Impacto | Software para ONGs y proyectos educativos",
    description:
      "Apoyo gratuito o preferencial para ONGs, eventos educativos, orientación vocacional y documentación de proyectos sociales.",
    images: ["/og/puente-impacto-card.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${instrumentSans.variable} ${sourceSerif.variable} antialiased`}>
        <StructuredData />
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}