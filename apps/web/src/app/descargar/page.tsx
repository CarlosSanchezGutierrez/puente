import { ArrowRight, Download, ShieldAlert, Smartphone } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Descargar",
  description: "Descarga beta de la APK de Puente Impacto para Android.",
};

export default function DescargarPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c]">Android beta</p>
            <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#10233f] md:text-7xl">Descargar Puente Impacto.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#425875]">Esta version beta abre la misma plataforma web de Puente Impacto dentro de una app Android.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]" download href="/downloads/puente-impacto-beta.apk">
                Descargar APK
                <Download className="ml-2 size-4" />
              </a>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white" href="/">
                Volver al sitio
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
          <Card className="border-[#d7dedf] bg-white/80 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-[#10233f]"><Smartphone className="size-6 text-white" /></div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#10233f]">Antes de instalar</h2>
              <div className="mt-6 grid gap-4 text-sm leading-7 text-[#425875]">
                <p>La app requiere internet porque carga la version web publicada.</p>
                <p>Android puede mostrar una advertencia por instalar una APK fuera de Play Store.</p>
                <p>Esta descarga es beta. La version de Play Store se revisara despues.</p>
              </div>
              <div className="mt-6 rounded-[1.25rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
                <div className="flex gap-3">
                  <ShieldAlert className="mt-1 size-5 shrink-0 text-[#10233f]" />
                  <p className="text-sm leading-7 text-[#425875]">Instala solo si confias en el origen del archivo. No compartas datos sensibles en dispositivos que no controles.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}
