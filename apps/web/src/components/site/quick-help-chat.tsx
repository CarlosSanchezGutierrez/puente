"use client";

import { ArrowRight, ChevronDown, HelpCircle, Search, X } from "lucide-react";
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
  question: string;
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
    question: "¿Qué hacen gratis para ONG?",
    answer:
      "Apoyamos a ONG, proyectos sociales y sustentables con páginas web, apps móviles completas, formularios, bases de datos, dashboards, sistemas de registro, documentación, producción audiovisual y diagnóstico técnico básico.",
    keywords: ["ong", "software gratis", "proyectos sociales", "sustentables", "apoyo", "gratis"],
    actions: [
      { label: "Ver ONG", href: "/ongs" },
      { label: "Solicitar apoyo", href: "/contacto" },
    ],
  },
  {
    id: "ong-apps",
    category: "ONG",
    question: "¿Hacen apps completas para Android y iOS?",
    answer:
      "Sí. Podemos construir apps móviles completas para Android y iOS, revisando antes alcance, operación, publicación y mantenimiento.",
    keywords: ["app", "apps", "android", "ios", "móvil", "movil", "aplicación", "aplicacion"],
    actions: [
      { label: "Ver apoyo para ONG", href: "/ongs" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "ong-diagnostico",
    category: "ONG",
    question: "¿Qué incluye el diagnóstico técnico básico?",
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
    question: "¿También hacen video y producción audiovisual?",
    answer:
      "Sí. Podemos apoyar con video corto, documental breve, grabación de eventos, clips para redes, cámara y dron cuando el contexto lo permita.",
    keywords: ["video", "audiovisual", "dron", "cámara", "camara", "reels", "documental"],
    actions: [
      { label: "Ver ONG", href: "/ongs" },
      { label: "Solicitar apoyo", href: "/contacto" },
    ],
  },
  {
    id: "ong-limites",
    category: "ONG",
    question: "¿Todo apoyo gratuito se acepta?",
    answer:
      "No automáticamente. Revisamos alcance, calendario, viabilidad técnica, disponibilidad del equipo, permisos, privacidad de datos y mantenimiento necesario.",
    keywords: ["gratis", "gratuito", "alcance", "limites", "límites", "viabilidad"],
    actions: [
      { label: "Enviar caso", href: "/contacto" },
      { label: "Ver alcance", href: "/ongs" },
    ],
  },
  {
    id: "vocacional-que-es",
    category: "Vocacional",
    question: "¿Qué es Puente Vocacional?",
    answer:
      "Es una iniciativa para ayudar a estudiantes de preparatoria que no saben qué carrera estudiar, conectándolos con universitarios, profesionistas, profesores y mentores.",
    keywords: ["vocacional", "prepa", "preparatoria", "carrera", "no sé qué estudiar", "orientación"],
    actions: [
      { label: "Ver Vocacional", href: "/eventos/puente-vocacional-2026" },
      { label: "Registrar interés", href: "/contacto" },
    ],
  },
  {
    id: "vocacional-red",
    category: "Vocacional",
    question: "¿Dónde veo la red de orientadores?",
    answer:
      "La red muestra perfiles de Monterrey y Tampico organizados por ciudad, institución y familia vocacional.",
    keywords: ["orientadores", "red", "perfiles", "monterrey", "tampico", "mentores"],
    actions: [
      { label: "Ver red", href: "/eventos/puente-vocacional-2026/red" },
      { label: "Ver Vocacional", href: "/eventos/puente-vocacional-2026" },
    ],
  },
  {
    id: "vocacional-papas",
    category: "Vocacional",
    question: "¿Puente Vocacional también sirve para papás?",
    answer:
      "Sí. También ayuda a familias que quieren acompañar mejor la decisión de carrera de sus hijos, sin presionarlos ni decidir por ellos.",
    keywords: ["papás", "papas", "padres", "familia", "hijos", "carrera"],
    actions: [
      { label: "Ver Vocacional", href: "/eventos/puente-vocacional-2026" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "investigacion",
    category: "Investigación",
    question: "¿Qué hacen en investigación?",
    answer:
      "Trabajamos investigación aplicada: reportes, prototipos, datos, documentación, demos, pósters o publicaciones cuando hay evidencia, alcance y acompañamiento suficiente.",
    keywords: ["investigación", "investigacion", "neoguard", "paper", "ieee", "ods", "datos"],
    actions: [
      { label: "Ver Investigación", href: "/investigacion" },
      { label: "Proponer colaboración", href: "/contacto" },
    ],
  },
  {
    id: "eventos",
    category: "Eventos",
    question: "¿Qué eventos pueden apoyar?",
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
    question: "¿Cómo contacto a Puente Impacto?",
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
    question: "¿Quién está detrás de Puente Impacto?",
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
    question: "¿Trabajan con datos sensibles?",
    answer:
      "Solo revisamos proyectos con datos sensibles si hay claridad sobre privacidad, permisos, uso responsable y alcance.",
    keywords: ["privacidad", "datos", "sensibles", "personales", "permisos", "seguridad"],
    actions: [
      { label: "Contactar", href: "/contacto" },
      { label: "Ver ONG", href: "/ongs" },
    ],
  },
  {
    id: "recursos",
    category: "General",
    question: "¿Tienen recursos o biblioteca?",
    answer:
      "Sí. Puedes revisar recursos, biblioteca y materiales relacionados con Puente Impacto, Vocacional, investigación y proyectos.",
    keywords: ["recursos", "biblioteca", "material", "documentos", "guías", "guias"],
    actions: [
      { label: "Recursos", href: "/recursos" },
      { label: "Biblioteca", href: "/biblioteca" },
    ],
  },
  {
    id: "app-descargar",
    category: "App",
    question: "¿Dónde descargo la app Android?",
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
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(helpItems[0]?.id ?? null);

  const filteredItems = useMemo(() => {
    const cleanQuery = normalize(query.trim());

    return helpItems.filter((item) => {
      const matchesCategory = category === "Todo" || item.category === category;
      const searchable = normalize([item.question, item.answer, item.category, ...item.keywords].join(" "));
      const matchesQuery = !cleanQuery || searchable.includes(cleanQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="fixed bottom-3 right-3 z-[70] print:hidden md:bottom-4 md:right-4">
      {open ? (
        <section
          aria-label="Preguntas rápidas de Puente Impacto"
          className="w-[min(calc(100vw-1.5rem),23rem)] overflow-hidden rounded-[1.15rem] border border-[#d7dedf] bg-[#f7f4ed] shadow-2xl md:w-[24rem]"
        >
          <div className="flex items-start justify-between gap-3 border-b border-[#d7dedf] bg-white/75 p-3">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#526981]">
                Preguntas rápidas
              </p>
              <h2 className="mt-1 text-base font-semibold tracking-[-0.03em] text-[#10233f]">
                ¿Qué necesitas saber?
              </h2>
            </div>

            <button
              aria-label="Cerrar preguntas rápidas"
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#d7dedf] bg-white text-[#10233f] transition hover:bg-[#f7f4ed]"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-[min(64svh,31rem)] overflow-y-auto overscroll-contain p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#526981]" />
              <input
                className="h-10 w-full rounded-full border border-[#d7dedf] bg-white px-9 text-xs text-[#10233f] outline-none transition placeholder:text-[#8a9aaa] focus:border-[#10233f]"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setOpenQuestionId(null);
                }}
                placeholder="Buscar: ONG, app, carrera..."
                value={query}
              />
            </div>

            <div className="mt-3 flex items-center gap-2">
              <label className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#526981]" htmlFor="quick-help-category">
                Tema
              </label>
              <select
                className="h-9 flex-1 rounded-full border border-[#d7dedf] bg-white px-3 text-xs font-semibold text-[#10233f] outline-none focus:border-[#10233f]"
                id="quick-help-category"
                onChange={(event) => {
                  setCategory(event.target.value as HelpCategory);
                  setOpenQuestionId(null);
                }}
                value={category}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-3 grid gap-2">
              {filteredItems.length ? (
                filteredItems.map((item) => {
                  const isOpen = openQuestionId === item.id;

                  return (
                    <article
                      className="overflow-hidden rounded-2xl border border-[#d7dedf] bg-white/75 shadow-sm"
                      key={item.id}
                    >
                      <button
                        className="flex w-full items-start justify-between gap-3 px-3 py-3 text-left transition hover:bg-white"
                        onClick={() => setOpenQuestionId(isOpen ? null : item.id)}
                        type="button"
                      >
                        <span>
                          <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#526981]">
                            {item.category}
                          </span>
                          <span className="mt-1 block text-sm font-semibold leading-5 text-[#10233f]">
                            {item.question}
                          </span>
                        </span>

                        <ChevronDown
                          className={`mt-1 size-4 shrink-0 text-[#526981] transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen ? (
                        <div className="border-t border-[#d7dedf] px-3 pb-3 pt-3">
                          <p className="text-xs leading-5 text-[#425875]">{item.answer}</p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.actions.map((action) => (
                              <ActionLink action={action} key={`${action.href}-${action.label}`} />
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </article>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-[#d7dedf] bg-white/75 p-3">
                  <p className="text-xs font-semibold text-[#10233f]">
                    No encontré una respuesta exacta.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#425875]">
                    Intenta otra palabra o ve directo a contacto.
                  </p>
                  <div className="mt-3">
                    <ActionLink action={{ label: "Contacto", href: "/contacto" }} />
                  </div>
                </div>
              )}
            </div>

            <p className="mt-3 rounded-2xl border border-[#d7dedf] bg-white/70 px-3 py-2 text-[0.68rem] leading-4 text-[#526981]">
              Esta ayuda solo orienta. No confirma apoyos automáticamente.
            </p>
          </div>
        </section>
      ) : (
        <button
          aria-label="Abrir preguntas rápidas"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[#d7dedf] bg-[#10233f] px-3.5 text-xs font-semibold text-white shadow-xl transition hover:bg-[#1b365f]"
          onClick={() => setOpen(true)}
          type="button"
        >
          <HelpCircle className="size-4" />
          Preguntas
        </button>
      )}
    </div>
  );
}