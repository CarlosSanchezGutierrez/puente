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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Puente Impacto",
    template: "%s | Puente Impacto",
  },
  description:
    "Tecnologia civica, biblioteca comunitaria, voluntariado, recursos abiertos y software para impacto social.",
  applicationName: "Puente Impacto",
  authors: [{ name: "Puente Impacto" }],
  creator: "Puente Impacto",
  publisher: "Puente Impacto",
  keywords: [
    "Puente Impacto",
    "impacto social",
    "tecnologia civica",
    "biblioteca comunitaria",
    "voluntariado",
    "ONG",
    "software social",
    "recursos educativos",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Puente Impacto",
    title: "Puente Impacto",
    description:
      "Conocimiento, comunidad y tecnologia para proyectos con impacto social.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Puente Impacto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puente Impacto",
    description:
      "Biblioteca comunitaria, voluntariado, recursos abiertos y software para impacto social.",
    images: ["/twitter-image"],
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