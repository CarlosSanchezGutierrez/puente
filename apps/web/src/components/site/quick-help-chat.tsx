"use client";

import { ArrowRight, CheckCircle2, HelpCircle, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type HelpCategory =
  | "Todo"
  | "ONG"
  | "Vocacional"
  | "Investigación"
  | "Eventos"
  | "Contacto"
  | "General"
  | "App";

type HelpAction = {
  label: string;
  href: string;
  external?: boolean;
};

type HelpItem = {
  id: string;
  category: Exclude<HelpCategory, "Todo">;
  title: string;
  answer: string;
  keywords: string[];
  actions: HelpAction[];
};

const categories: HelpCategory[] = [
  "Todo",
  "ONG",
  "Vocacional",
  "Investigación",
  "Eventos",
  "Contacto",
  "General",
  "App",
];

const helpItems: HelpItem[] = [
  {
    id: "ong-que-hacemos",
    category: "ONG",
    title: "Apoyo gratuito para ONG",
    answer:
      "Apoyamos a ONG, proyectos sociales y sustentables con páginas web, apps móviles completas, formularios, bases de datos, dashboards, registros, documentación, producción audiovisual y diagnóstico técnico básico.",
    keywords: ["ong", "software gratis", "proyectos sociales", "sustentables", "apoyo", "gratis"],
    actions: [
      { label: "Ver ONG", href: "/ongs" },
      { label: "Solicitar apoyo", href: "/contacto" },
    ],
  },
  {
    id: "ong-apps",
    category: "ONG",
    title: "Apps Android y iOS",
    answer:
      "Sí hacemos apps móviles completas para Android y iOS, siempre revisando alcance, operación, publicación y mantenimiento antes de confirmar el proyecto.",
    keywords: ["app", "apps", "android", "ios", "móvil", "movil", "aplicación", "aplicacion"],
    actions: [
      { label: "Ver ONG", href: "/ongs" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "ong-diagnostico",
    category: "ONG",
    title: "Diagnóstico técnico básico",
    answer:
      "Revisamos página web, formularios, procesos digitales, organización de información, comunicación, internet, herramientas actuales y oportunidades de mejora.",
    keywords: ["diagnóstico", "diagnostico", "técnico", "tecnico", "internet", "procesos"],
    actions: [
      { label: "Solicitar diagnóstico", href: "/contacto" },
      { label: "Ver ONG", href: "/ongs" },
    ],
  },
  {
    id: "ong-video",
    category: "ONG",
    title: "Producción audiovisual",
    answer:
      "Podemos apoyar con video corto, documental breve, grabación de eventos, clips para redes, cámara y dron cuando el contexto lo permita.",
    keywords: ["video", "audiovisual", "dron", "cámara", "camara", "reels", "documental"],
    actions: [
      { label: "Ver ONG", href: "/ongs" },
      { label: "Solicitar apoyo", href: "/contacto" },
    ],
  },
  {
    id: "vocacional-que-es",
    category: "Vocacional",
    title: "Puente Vocacional",
    answer:
      "Ayudamos a estudiantes de preparatoria que no saben qué carrera estudiar conectándolos con universitarios, profesionistas, profesores y mentores.",
    keywords: ["vocacional", "prepa", "preparatoria", "carrera", "no sé qué estudiar", "orientación"],
    actions: [
      { label: "Ver Vocacional", href: "/eventos/puente-vocacional-2026" },
      { label: "Registrar interés", href: "/contacto" },
    ],
  },
  {
    id: "vocacional-red",
    category: "Vocacional",
    title: "Red de orientadores",
    answer:
      "La red muestra perfiles de Monterrey y Tampico organizados por ciudad, institución y familia vocacional.",
    keywords: ["orientadores", "red", "perfiles", "monterrey", "tampico", "mentores"],
    actions: [
      { label: "Ver red", href: "/eventos/puente-vocacional-2026/red" },
      { label: "Ver Vocacional", href: "/eventos/puente-vocacional-2026" },
    ],
  },
  {
    id: "investigacion",
    category: "Investigación",
    title: "Investigación aplicada",
    answer:
      "Trabajamos reportes, prototipos, datos, documentación, demos, pósters o publicaciones cuando hay evidencia, alcance y acompañamiento suficiente.",
    keywords: ["investigación", "investigacion", "neoguard", "paper", "ieee", "ods", "datos"],
    actions: [
      { label: "Ver Investigación", href: "/investigacion" },
      { label: "Proponer colaboración", href: "/contacto" },
    ],
  },
  {
    id: "eventos",
    category: "Eventos",
    title: "Eventos educativos y sociales",
    answer:
      "Podemos apoyar eventos educativos, vocacionales, sociales o comunitarios con logística, registro, formularios, documentación, difusión y producción audiovisual.",
    keywords: ["eventos", "hackathon", "hackaton", "educativos", "logística", "grabación"],
    actions: [
      { label: "Ver programas", href: "/eventos" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "contacto",
    category: "Contacto",
    title: "Contactar o agendar",
    answer:
      "Puedes enviar tu caso desde contacto o agendar una reunión. Incluye quién eres, qué proyecto representas, qué necesitas resolver y fechas aproximadas.",
    keywords: ["contacto", "agendar", "reunión", "reunion", "calendly", "solicitar"],
    actions: [
      { label: "Contacto", href: "/contacto" },
      {
        label: "Agendar",
        href: "https://calendly.com/contacto-puenteimpacto/30min",
        external: true,
      },
    ],
  },
  {
    id: "equipo",
    category: "General",
    title: "Equipo",
    answer:
      "El equipo combina software, datos, operación, documentación e ingeniería aplicada. Puedes revisar perfiles, CVs y enlaces en Equipo.",
    keywords: ["equipo", "integrantes", "cv", "linkedin", "quiénes", "quienes"],
    actions: [
      { label: "Ver Equipo", href: "/nosotros" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "privacidad",
    category: "General",
    title: "Datos sensibles",
    answer:
      "Los proyectos con datos sensibles requieren claridad sobre privacidad, permisos, uso responsable y alcance antes de avanzar.",
    keywords: ["privacidad", "datos", "sensibles", "personales", "permisos", "seguridad"],
    actions: [
      { label: "Contactar", href: "/contacto" },
      { label: "Ver ONG", href: "/ongs" },
    ],
  },
  {
    id: "recursos",
    category: "General",
    title: "Recursos y biblioteca",
    answer:
      "Puedes revisar recursos, biblioteca y materiales relacionados con Puente Impacto, Vocacional, investigación y proyectos.",
    keywords: ["recursos", "biblioteca", "material", "documentos", "guías", "guias"],
    actions: [
      { label: "Recursos", href: "/recursos" },
      { label: "Biblioteca", href: "/biblioteca" },
    ],
  },
  {
    id: "app-descargar",
    category: "App",
    title: "Descargar app Android",
    answer:
      "Puedes descargar la app Android desde la sección de descarga. Android puede mostrar una advertencia porque se instala desde el navegador y no desde Play Store.",
    keywords: ["app", "apk", "descargar", "android", "instalar", "celular"],
    actions: [
      { label: "Descargar app", href: "/descargar" },
      { label: "Inicio", href: "/" },
    ],
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function ActionLink({ action }: { action: HelpAction }) {
  const className =
    "inline-flex min-h-9 items-center justify-center rounded-full bg-[#10233f] px-3.5 text-xs font-semibold text-white transition hover:bg-[#1b365f]";

  if (action.external || action.href.startsWith("http")) {
    return (
      <a className={className} href={action.href} rel="noreferrer" target="_blank">
        {action.label}
        <ArrowRight className="ml-1.5 size-3.5" />
      </a>
    );
  }

  return (
    <Link className={className} href={action.href}>
      {action.label}
      <ArrowRight className="ml-1.5 size-3.5" />
    </Link>
  );
}

export function QuickHelpChat() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<HelpCategory>("Todo");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(helpItems[0]?.id ?? null);

  const filteredItems = useMemo(() => {
    const cleanQuery = normalize(query.trim());

    return helpItems.filter((item) => {
      const matchesCategory = category === "Todo" || item.category === category;
      const searchable = normalize([item.title, item.answer, item.category, ...item.keywords].join(" "));
      const matchesQuery = !cleanQuery || searchable.includes(cleanQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const selectedItem =
    filteredItems.find((item) => item.id === selectedId) ??
    filteredItems[0] ??
    helpItems[0];

  return (
    <div className="fixed bottom-3 right-3 z-[70] print:hidden md:bottom-4 md:right-4">
      {open ? (
        <section
          aria-label="Ayuda rápida de Puente Impacto"
          className="w-[min(calc(100vw-1.5rem),22rem)] overflow-hidden rounded-[1.15rem] border border-[#d7dedf] bg-[#f7f4ed] shadow-2xl md:w-[23.5rem]"
        >
          <div className="flex items-start justify-between gap-3 border-b border-[#d7dedf] bg-white/75 p-3">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#526981]">
                Ayuda rápida
              </p>
              <h2 className="mt-1 text-base font-semibold tracking-[-0.03em] text-[#10233f]">
                ¿Qué necesitas?
              </h2>
            </div>

            <button
              aria-label="Cerrar ayuda rápida"
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#d7dedf] bg-white text-[#10233f] transition hover:bg-[#f7f4ed]"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-[min(62svh,30rem)] overflow-y-auto overscroll-contain p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#526981]" />
              <input
                className="h-10 w-full rounded-full border border-[#d7dedf] bg-white px-9 text-xs text-[#10233f] outline-none transition placeholder:text-[#8a9aaa] focus:border-[#10233f]"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelectedId(null);
                }}
                placeholder="Buscar: ONG, app, carrera..."
                value={query}
              />
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5">
              {categories.map((item) => (
                <button
                  className={`min-h-8 rounded-full border px-2 text-[0.62rem] font-semibold transition ${
                    category === item
                      ? "border-[#10233f] bg-[#10233f] text-white"
                      : "border-[#d7dedf] bg-white text-[#425875] hover:bg-white/80"
                  }`}
                  key={item}
                  onClick={() => {
                    setCategory(item);
                    setSelectedId(null);
                  }}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-3 grid gap-2">
              <div className="grid max-h-40 gap-1.5 overflow-y-auto pr-1">
                {filteredItems.length ? (
                  filteredItems.map((item) => (
                    <button
                      className={`rounded-2xl border px-3 py-2 text-left transition ${
                        selectedItem?.id === item.id
                          ? "border-[#10233f] bg-white shadow-sm"
                          : "border-[#d7dedf] bg-white/65 hover:bg-white"
                      }`}
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      type="button"
                    >
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#526981]">
                        {item.category}
                      </p>
                      <p className="mt-0.5 text-xs font-semibold leading-4 text-[#10233f]">
                        {item.title}
                      </p>
                    </button>
                  ))
                ) : (
                  <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-3">
                    <p className="text-xs font-semibold text-[#10233f]">
                      No encontré respuesta exacta.
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#425875]">
                      Intenta otra palabra o ve a contacto.
                    </p>
                  </div>
                )}
              </div>

              {selectedItem ? (
                <div className="rounded-[1rem] border border-[#d7dedf] bg-white p-3 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#10233f]" />
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#526981]">
                      {selectedItem.category}
                    </p>
                  </div>

                  <h3 className="text-sm font-semibold leading-tight tracking-[-0.02em] text-[#10233f]">
                    {selectedItem.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#425875]">
                    {selectedItem.answer}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedItem.actions.map((action) => (
                      <ActionLink action={action} key={`${action.href}-${action.label}`} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <p className="mt-3 rounded-2xl border border-[#d7dedf] bg-white/70 px-3 py-2 text-[0.68rem] leading-4 text-[#526981]">
              Esta ayuda solo orienta. No confirma apoyos automáticamente.
            </p>
          </div>
        </section>
      ) : (
        <button
          aria-label="Abrir ayuda rápida"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[#d7dedf] bg-[#10233f] px-3.5 text-xs font-semibold text-white shadow-xl transition hover:bg-[#1b365f]"
          onClick={() => setOpen(true)}
          type="button"
        >
          <HelpCircle className="size-4" />
          Ayuda
        </button>
      )}
    </div>
  );
}