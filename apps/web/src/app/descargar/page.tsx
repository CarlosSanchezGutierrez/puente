import { Download, ShieldCheck, Smartphone, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Descargar app | Puente Impacto",
  description:
    "Descarga la app Android de Puente Impacto desde el navegador.",
  alternates: {
    canonical: "/descargar",
  },
  openGraph: {
    title: "Descargar app | Puente Impacto",
    description:
      "Descarga la app Android de Puente Impacto desde el navegador.",
    url: "https://puenteimpacto.org/descargar",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Descargar app de Puente Impacto",
      },
    ],
  },
};

const apkHref = "/downloads/puente-impacto.apk";

export default function DescargarPage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              App Android
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
              Descarga la app de Puente Impacto.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875]">
              Esta versión permite abrir Puente Impacto desde Android como aplicación instalada. Es útil para consultar secciones, recursos y actualizaciones desde el celular.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                download
                href={apkHref}
              >
                Descargar APK
                <Download className="ml-2 size-4" />
              </a>

              <Link
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                href="/"
              >
                Volver al inicio
              </Link>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#526981]">
              En Android puede aparecer una advertencia porque la app se instala desde el navegador y no desde Play Store.
            </p>
          </div>

          <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7dedf] bg-[#f7f4ed] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526981]">
              <Smartphone className="size-4 text-[#10233f]" />
              Instalación
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-4 py-3">
                <p className="text-sm font-semibold text-[#10233f]">1. Descarga el APK</p>
                <p className="mt-1 text-sm leading-6 text-[#425875]">
                  Presiona el botón de descarga desde tu celular Android.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-4 py-3">
                <p className="text-sm font-semibold text-[#10233f]">2. Permite instalar apps externas</p>
                <p className="mt-1 text-sm leading-6 text-[#425875]">
                  Android puede pedir autorización para instalar desde el navegador.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-[#f7f4ed]/75 px-4 py-3">
                <p className="text-sm font-semibold text-[#10233f]">3. Instala y abre la app</p>
                <p className="mt-1 text-sm leading-6 text-[#425875]">
                  Una vez instalada, la app aparecerá en tu pantalla como cualquier aplicación.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-2">
            <div className="rounded-[1.35rem] border border-[#d7dedf] bg-[#f7f4ed]/80 p-5 shadow-sm">
              <div className="mb-5 flex size-10 items-center justify-center rounded-2xl border border-[#d7dedf] bg-white">
                <ShieldCheck className="size-5 text-[#10233f]" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">
                Archivo oficial de Puente Impacto
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#425875]">
                El botón descarga el APK publicado directamente desde este sitio.
              </p>
            </div>

            <div className="rounded-[1.35rem] border border-[#d7dedf] bg-[#10233f] p-5 text-white shadow-sm">
              <div className="mb-5 flex size-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <TriangleAlert className="size-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-white">
                Versión Android directa
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Esta descarga no pasa por Play Store. Úsala solo si confías en Puente Impacto y descargaste el archivo desde puenteimpacto.org.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}