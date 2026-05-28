import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";

export const metadata = {
  title: "Accesibilidad | Puente Impacto",
  description:
    "Compromiso de Puente Impacto con una web clara, legible y usable para más personas.",
  alternates: {
    canonical: "/accessibilidad",
  },
  openGraph: {
    title: "Accesibilidad | Puente Impacto",
    description:
      "Compromiso de mejora continua en accesibilidad, lectura clara y usabilidad.",
    url: "https://puenteimpacto.org/accessibilidad",
    images: [
      {
        url: "/og/puente-impacto-card.png",
        width: 1200,
        height: 630,
        alt: "Accesibilidad en Puente Impacto",
      },
    ],
  },
};

const commitments = [
  "Mantener textos claros, directos y legibles.",
  "Cuidar contraste, jerarquía visual y tamaño de lectura.",
  "Procurar navegación funcional con teclado.",
  "Usar estructura semántica en encabezados, botones, enlaces y formularios.",
  "Agregar textos alternativos cuando las imágenes tengan valor informativo.",
  "Evitar animaciones innecesarias o permitir reducir movimiento.",
  "Escuchar reportes de barreras de accesibilidad para corregirlas.",
];

const limits = [
  "El panel de accesibilidad no sustituye una auditoría formal.",
  "El sitio está en mejora continua y puede tener áreas por corregir.",
  "Si una persona encuentra una barrera, puede reportarla para revisarla.",
];

export default function AccessibilityPage() {
  return (
    <SiteShell>
      <main className="bg-[#f7f4ed] text-[#10233f]">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Accesibilidad
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#10233f] md:text-7xl">
              Una web más clara, legible y usable.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#425875]">
              En Puente Impacto buscamos que el sitio sea fácil de leer, navegar y entender para la mayor cantidad de personas posible. La accesibilidad se trabaja con diseño, código, contenido claro y mejora continua.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
                href="/contacto"
              >
                Reportar una barrera
              </Link>

              <Link
                className="inline-flex items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 px-5 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-white"
                href="/"
              >
                Volver al inicio
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-[#d7dedf] bg-white/70 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
              Panel de lectura
            </p>

            <p className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#10233f]">
              El botón flotante permite ajustar texto, contraste, enlaces, movimiento, espaciado y foco visible.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#425875]">
              Estos ajustes ayudan a personalizar la lectura. No sustituyen una auditoría formal de accesibilidad ni garantizan cumplimiento completo.
            </p>
          </aside>
        </section>

        <section className="border-y border-[#d7dedf] bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[#d7dedf] bg-[#f7f4ed]/80 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Compromisos
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#10233f]">
                Qué buscamos cuidar
              </h2>

              <div className="mt-5 grid gap-2">
                {commitments.map((item) => (
                  <div
                    className="rounded-2xl border border-[#d7dedf] bg-white/75 px-4 py-3 text-sm font-medium leading-6 text-[#425875]"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#d7dedf] bg-[#10233f] p-5 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                Límites claros
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                Lo decimos sin exagerar
              </h2>

              <div className="mt-5 grid gap-2">
                {limits.map((item) => (
                  <div
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium leading-6 text-white/85"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 rounded-[1.5rem] border border-[#d7dedf] bg-white/75 p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#526981]">
                Reporte
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
                Si algo no se puede leer, usar o navegar, repórtalo.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#425875]">
                Incluye la página, dispositivo, navegador y una descripción breve del problema para poder revisarlo.
              </p>
            </div>

            <Link
              className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b365f]"
              href="/contacto"
            >
              Reportar barrera
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}