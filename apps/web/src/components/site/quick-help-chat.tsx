"use client";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HelpCircle,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type HelpCategory =
  | "Todo"
  | "ONG"
  | "Vocacional"
  | "Investigación"
  | "App"
  | "Eventos"
  | "Contacto"
  | "General";

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
  "App",
  "Eventos",
  "Contacto",
  "General",
];

const helpItems: HelpItem[] = [
  {
    id: "ong-que-hacemos",
    category: "ONG",
    title: "¿Qué hacen gratis para ONG?",
    answer:
      "Apoyamos a ONG, proyectos sociales y sustentables con herramientas digitales concretas: páginas web, apps móviles completas para Android y iOS, formularios, bases de datos, dashboards, sistemas de registro, documentación, producción audiovisual y diagnóstico técnico básico.",
    keywords: ["ong", "software gratis", "proyectos sociales", "sustentables", "ayuda", "apoyo"],
    actions: [
      { label: "Ver apoyo para ONG", href: "/ongs" },
      { label: "Solicitar apoyo", href: "/contacto" },
    ],
  },
  {
    id: "ong-apps",
    category: "ONG",
    title: "¿Hacen apps para Android y iOS?",
    answer:
      "Sí. Podemos construir apps móviles completas para Android y iOS cuando el alcance, operación, publicación y mantenimiento sean viables. Primero revisamos la necesidad para evitar construir algo más complejo de lo necesario.",
    keywords: ["app", "apps", "android", "ios", "móvil", "movil", "aplicación", "aplicacion"],
    actions: [
      { label: "Ver servicios para ONG", href: "/ongs" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "ong-diagnostico",
    category: "ONG",
    title: "¿Qué es el diagnóstico técnico básico?",
    answer:
      "Es una revisión inicial de página web, formularios, procesos digitales, organización de información, comunicación, herramientas actuales, internet y oportunidades de mejora. Sirve para decidir qué conviene arreglar primero.",
    keywords: ["diagnóstico", "diagnostico", "técnico", "tecnico", "internet", "procesos", "herramientas"],
    actions: [
      { label: "Solicitar diagnóstico", href: "/contacto" },
      { label: "Ver ONG", href: "/ongs" },
    ],
  },
  {
    id: "ong-video",
    category: "ONG",
    title: "¿También hacen producción audiovisual?",
    answer:
      "Sí. Podemos apoyar con video corto, video documental breve, grabación de eventos, clips para redes, material para presentar el proyecto y tomas con cámara o dron cuando el contexto lo permita.",
    keywords: ["video", "audiovisual", "dron", "cámara", "camara", "reels", "documental", "redes"],
    actions: [
      { label: "Ver video de ONG", href: "/ongs" },
      { label: "Solicitar apoyo", href: "/contacto" },
    ],
  },
  {
    id: "ong-limites",
    category: "ONG",
    title: "¿Todo apoyo gratuito se acepta?",
    answer:
      "No automáticamente. El apoyo depende del alcance, calendario, viabilidad técnica, disponibilidad del equipo, permisos, privacidad de datos y mantenimiento necesario. Revisamos el caso antes de confirmar.",
    keywords: ["gratis", "gratuito", "límites", "limites", "alcance", "aceptar", "viabilidad"],
    actions: [
      { label: "Enviar caso", href: "/contacto" },
      { label: "Ver alcance", href: "/ongs" },
    ],
  },
  {
    id: "vocacional-que-es",
    category: "Vocacional",
    title: "¿Qué es Puente Vocacional?",
    answer:
      "Es una iniciativa para ayudar a estudiantes de preparatoria que no saben qué carrera estudiar. Conectamos a estudiantes con universitarios, profesionistas, profesores y mentores para escuchar experiencias reales y hacer mejores preguntas.",
    keywords: ["vocacional", "prepa", "preparatoria", "carrera", "no sé qué estudiar", "orientación"],
    actions: [
      { label: "Ver Puente Vocacional", href: "/eventos/puente-vocacional-2026" },
      { label: "Registrar interés", href: "/contacto" },
    ],
  },
  {
    id: "vocacional-red",
    category: "Vocacional",
    title: "¿Dónde veo la red de orientadores?",
    answer:
      "La red de orientadores muestra perfiles de Monterrey y Tampico organizados por ciudad, institución y familia vocacional. Sirve para conocer posibles invitados o perfiles de apoyo.",
    keywords: ["orientadores", "red", "perfiles", "monterrey", "tampico", "mentores"],
    actions: [
      { label: "Ver red de orientadores", href: "/eventos/puente-vocacional-2026/red" },
      { label: "Ver Vocacional", href: "/eventos/puente-vocacional-2026" },
    ],
  },
  {
    id: "vocacional-papas",
    category: "Vocacional",
    title: "¿También sirve para padres de familia?",
    answer:
      "Sí. Puente Vocacional también ayuda a familias que quieren acompañar mejor la decisión de carrera de sus hijos, sin presionarlos ni decidir por ellos.",
    keywords: ["papás", "papas", "padres", "familia", "hijos", "carrera"],
    actions: [
      { label: "Ver Vocacional", href: "/eventos/puente-vocacional-2026" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "investigacion",
    category: "Investigación",
    title: "¿Qué hacen en investigación?",
    answer:
      "Trabajamos investigación aplicada: reportes, prototipos, datos, documentación, demos, posters o publicaciones cuando hay evidencia, alcance y acompañamiento suficiente. NeoGuard es la publicación destacada.",
    keywords: ["investigación", "investigacion", "neoguard", "paper", "ieee", "ods", "datos"],
    actions: [
      { label: "Ver Investigación", href: "/investigacion" },
      { label: "Proponer colaboración", href: "/contacto" },
    ],
  },
  {
    id: "app-descargar",
    category: "App",
    title: "¿Dónde descargo la app?",
    answer:
      "Puedes descargar la app Android desde la sección de descarga. Android puede mostrar una advertencia porque se instala desde el navegador y no desde Play Store.",
    keywords: ["app", "apk", "descargar", "android", "instalar", "celular"],
    actions: [
      { label: "Descargar app", href: "/descargar" },
      { label: "Ir al inicio", href: "/" },
    ],
  },
  {
    id: "eventos",
    category: "Eventos",
    title: "¿Qué eventos apoyan?",
    answer:
      "Apoyamos eventos educativos, vocacionales, sociales y comunitarios cuando el alcance es viable. Podemos apoyar con logística, documentación, producción audiovisual, registro, formularios o difusión.",
    keywords: ["eventos", "hackathon", "hackaton", "educativos", "logística", "logistica", "grabación"],
    actions: [
      { label: "Ver programas", href: "/eventos" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "equipo",
    category: "General",
    title: "¿Quién está detrás de Puente Impacto?",
    answer:
      "El equipo combina perfiles de software, datos, operación, documentación e ingeniería aplicada. Puedes revisar los perfiles, experiencia, CVs y enlaces del equipo en la sección Equipo.",
    keywords: ["equipo", "integrantes", "cv", "linkedin", "quiénes", "quienes"],
    actions: [
      { label: "Ver Equipo", href: "/nosotros" },
      { label: "Contactar", href: "/contacto" },
    ],
  },
  {
    id: "contacto",
    category: "Contacto",
    title: "¿Cómo contacto a Puente Impacto?",
    answer:
      "Puedes enviar tu caso desde la página de contacto o agendar una reunión. Conviene incluir quién eres, qué organización o proyecto representas, qué necesitas resolver y qué fecha aproximada tienes.",
    keywords: ["contacto", "agendar", "reunión", "reunion", "calendly", "solicitar", "apoyo"],
    actions: [
      { label: "Ir a contacto", href: "/contacto" },
      {
        label: "Agendar reunión",
        href: "https://calendly.com/contacto-puenteimpacto/30min",
        external: true,
      },
    ],
  },
  {
    id: "privacidad",
    category: "General",
    title: "¿Trabajan con datos sensibles?",
    answer:
      "Solo se revisan proyectos con datos sensibles si existe claridad sobre privacidad, permisos, uso responsable y alcance. No conviene capturar datos personales sin definir antes cómo se protegerán y para qué se usarán.",
    keywords: ["privacidad", "datos", "sensibles", "personales", "permisos", "seguridad"],
    actions: [
      { label: "Contactar", href: "/contacto" },
      { label: "Ver ONG", href: "/ongs" },
    ],
  },
  {
    id: "recursos",
    category: "General",
    title: "¿Tienen recursos o biblioteca?",
    answer:
      "Sí. Puedes revisar recursos, biblioteca y materiales relacionados con Puente Impacto, Puente Vocacional, investigación y proyectos.",
    keywords: ["recursos", "biblioteca", "material", "documentos", "guías", "guias"],
    actions: [
      { label: "Ver recursos", href: "/recursos" },
      { label: "Ver biblioteca", href: "/biblioteca" },
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
    "inline-flex min-h-10 items-center justify-center rounded-full bg-[#10233f] px-4 text-xs font-semibold text-white transition hover:bg-[#1b365f]";

  if (action.external || action.href.startsWith("http")) {
    return (
      <a className={className} href={action.href} rel="noreferrer" target="_blank">
        {action.label}
        <ArrowRight className="ml-2 size-3.5" />
      </a>
    );
  }

  return (
    <Link className={className} href={action.href}>
      {action.label}
      <ArrowRight className="ml-2 size-3.5" />
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

      const searchable = normalize(
        [item.title, item.answer, item.category, ...item.keywords].join(" "),
      );

      const matchesQuery = !cleanQuery || searchable.includes(cleanQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const selectedItem =
    filteredItems.find((item) => item.id === selectedId) ??
    filteredItems[0] ??
    helpItems[0];

  return (
    <div className="fixed bottom-4 right-4 z-[70] print:hidden">
      {open ? (
        <section
          aria-label="Ayuda rápida de Puente Impacto"
          className="fixed bottom-4 left-4 right-4 z-[70] overflow-hidden rounded-[1.35rem] border border-[#d7dedf] bg-[#f7f4ed] shadow-2xl md:left-auto md:w-[440px]"
        >
          <div className="flex items-start justify-between gap-4 border-b border-[#d7dedf] bg-white/70 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526981]">
                Ayuda rápida
              </p>
              <h2 className="mt-1 text-lg font-semibold tracking-[-0.03em] text-[#10233f]">
                ¿Qué necesitas resolver?
              </h2>
            </div>

            <button
              aria-label="Cerrar ayuda rápida"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d7dedf] bg-white text-[#10233f] transition hover:bg-[#f7f4ed]"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-[min(76svh,620px)] overflow-y-auto overscroll-contain p-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#526981]" />
              <input
                className="h-11 w-full rounded-full border border-[#d7dedf] bg-white px-10 text-sm text-[#10233f] outline-none transition placeholder:text-[#8a9aaa] focus:border-[#10233f]"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelectedId(null);
                }}
                placeholder="Busca: app, ONG, carrera, diagnóstico..."
                value={query}
              />
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
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

            <div className="mt-4 grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
              <div className="grid max-h-72 gap-2 overflow-y-auto pr-1">
                {filteredItems.length ? (
                  filteredItems.map((item) => (
                    <button
                      className={`rounded-2xl border px-3 py-3 text-left transition ${
                        selectedItem?.id === item.id
                          ? "border-[#10233f] bg-white shadow-sm"
                          : "border-[#d7dedf] bg-white/65 hover:bg-white"
                      }`}
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      type="button"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#526981]">
                        {item.category}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-5 text-[#10233f]">
                        {item.title}
                      </p>
                    </button>
                  ))
                ) : (
                  <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                    <p className="text-sm font-semibold text-[#10233f]">
                      No encontré una respuesta exacta.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#425875]">
                      Prueba con otra palabra o ve directo a contacto para explicar tu caso.
                    </p>
                  </div>
                )}
              </div>

              <div className="rounded-[1.15rem] border border-[#d7dedf] bg-white p-4 shadow-sm">
                {selectedItem ? (
                  <>
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#10233f]" />
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#526981]">
                        {selectedItem.category}
                      </p>
                    </div>

                    <h3 className="text-lg font-semibold leading-tight tracking-[-0.03em] text-[#10233f]">
                      {selectedItem.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#425875]">
                      {selectedItem.answer}
                    </p>

                    <div className="mt-4 flex flex-col gap-2">
                      {selectedItem.actions.map((action) => (
                        <ActionLink action={action} key={`${action.href}-${action.label}`} />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#d7dedf] bg-white/70 p-3">
              <p className="text-xs leading-5 text-[#526981]">
                Esta ayuda no confirma apoyos automáticamente ni reemplaza contacto humano. Solo orienta y te manda a la sección correcta.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <button
          aria-label="Abrir ayuda rápida"
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#d7dedf] bg-[#10233f] px-4 text-sm font-semibold text-white shadow-xl transition hover:bg-[#1b365f]"
          onClick={() => setOpen(true)}
          type="button"
        >
          <HelpCircle className="size-5" />
          Ayuda rápida
          <CalendarDays className="size-4 opacity-80" />
        </button>
      )}
    </div>
  );
}