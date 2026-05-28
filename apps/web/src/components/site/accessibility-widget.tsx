"use client";

import {
  Accessibility,
  Contrast,
  Eye,
  Focus,
  LetterText,
  Minus,
  MousePointer2,
  Pause,
  Plus,
  RotateCcw,
  Space,
  Underline,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type FontScale = "normal" | "large" | "larger";

type AccessibilityState = {
  fontScale: FontScale;
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
  relaxedSpacing: boolean;
  reduceMotion: boolean;
  focusMode: boolean;
  largeCursor: boolean;
};

const defaultState: AccessibilityState = {
  fontScale: "normal",
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  readableFont: false,
  relaxedSpacing: false,
  reduceMotion: false,
  focusMode: false,
  largeCursor: false,
};

const storageKey = "puente-impacto-accessibility";

function getStoredState(): AccessibilityState {
  if (typeof window === "undefined") {
    return defaultState;
  }

  try {
    const stored = window.localStorage.getItem(storageKey);

    if (!stored) {
      return defaultState;
    }

    return {
      ...defaultState,
      ...(JSON.parse(stored) as Partial<AccessibilityState>),
    };
  } catch {
    return defaultState;
  }
}

function saveState(state: AccessibilityState) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    return;
  }
}

function applyAccessibility(state: AccessibilityState) {
  const root = document.documentElement;

  const attributes: Array<[keyof AccessibilityState, string]> = [
    ["highContrast", "data-pi-high-contrast"],
    ["grayscale", "data-pi-grayscale"],
    ["underlineLinks", "data-pi-underline-links"],
    ["readableFont", "data-pi-readable-font"],
    ["relaxedSpacing", "data-pi-relaxed-spacing"],
    ["reduceMotion", "data-pi-reduce-motion"],
    ["focusMode", "data-pi-focus-mode"],
    ["largeCursor", "data-pi-large-cursor"],
  ];

  if (state.fontScale === "normal") {
    root.removeAttribute("data-pi-font-scale");
  } else {
    root.setAttribute("data-pi-font-scale", state.fontScale);
  }

  attributes.forEach(([key, attribute]) => {
    if (state[key]) {
      root.setAttribute(attribute, "true");
    } else {
      root.removeAttribute(attribute);
    }
  });
}

function isDefaultState(state: AccessibilityState) {
  return Object.entries(defaultState).every(
    ([key, value]) => state[key as keyof AccessibilityState] === value,
  );
}

function ToggleRow({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-pressed={active}
      className={`inline-flex min-h-10 items-center justify-between rounded-2xl border px-3 text-xs font-semibold transition ${
        active
          ? "border-[#10233f] bg-[#10233f] text-white"
          : "border-[#d7dedf] bg-white text-[#10233f] hover:bg-white/80"
      }`}
      onClick={onClick}
      type="button"
    >
      <span className="inline-flex items-center text-left">
        <Icon className="mr-2 size-4 shrink-0" />
        {label}
      </span>
      <span className="ml-3 text-[0.62rem] uppercase tracking-[0.12em]">
        {active ? "Activo" : "Off"}
      </span>
    </button>
  );
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<AccessibilityState>(() => getStoredState());
  const active = !isDefaultState(state);

  useEffect(() => {
    applyAccessibility(state);
    saveState(state);
  }, [state]);

  const updateState = (nextState: AccessibilityState) => {
    setState(nextState);
  };

  const increaseText = () => {
    const nextFontScale =
      state.fontScale === "normal"
        ? "large"
        : state.fontScale === "large"
          ? "larger"
          : "larger";

    updateState({ ...state, fontScale: nextFontScale });
  };

  const decreaseText = () => {
    const nextFontScale =
      state.fontScale === "larger"
        ? "large"
        : state.fontScale === "large"
          ? "normal"
          : "normal";

    updateState({ ...state, fontScale: nextFontScale });
  };

  const reset = () => {
    updateState(defaultState);
  };

  return (
    <>
      <style>{`
        html[data-pi-font-scale="large"] {
          font-size: 17px;
        }

        html[data-pi-font-scale="larger"] {
          font-size: 18px;
        }

        html[data-pi-readable-font="true"] body {
          font-family: Arial, Helvetica, sans-serif !important;
        }

        html[data-pi-relaxed-spacing="true"] body {
          letter-spacing: 0.015em;
        }

        html[data-pi-relaxed-spacing="true"] p,
        html[data-pi-relaxed-spacing="true"] li {
          line-height: 1.85 !important;
        }

        html[data-pi-high-contrast="true"] body {
          background: #ffffff !important;
        }

        html[data-pi-high-contrast="true"] main,
        html[data-pi-high-contrast="true"] section,
        html[data-pi-high-contrast="true"] header,
        html[data-pi-high-contrast="true"] footer {
          filter: contrast(1.14);
        }

        html[data-pi-grayscale="true"] header,
        html[data-pi-grayscale="true"] main,
        html[data-pi-grayscale="true"] footer {
          filter: grayscale(1);
        }

        html[data-pi-underline-links="true"] a {
          text-decoration: underline !important;
          text-underline-offset: 0.18em !important;
          text-decoration-thickness: 0.08em !important;
        }

        html[data-pi-focus-mode="true"] a:focus-visible,
        html[data-pi-focus-mode="true"] button:focus-visible,
        html[data-pi-focus-mode="true"] input:focus-visible,
        html[data-pi-focus-mode="true"] select:focus-visible,
        html[data-pi-focus-mode="true"] textarea:focus-visible {
          outline: 3px solid #10233f !important;
          outline-offset: 3px !important;
          box-shadow: 0 0 0 6px rgba(16, 35, 63, 0.18) !important;
        }

        html[data-pi-large-cursor="true"] *,
        html[data-pi-large-cursor="true"] button,
        html[data-pi-large-cursor="true"] a {
          cursor: default !important;
        }

        html[data-pi-large-cursor="true"] button,
        html[data-pi-large-cursor="true"] a,
        html[data-pi-large-cursor="true"] input,
        html[data-pi-large-cursor="true"] select,
        html[data-pi-large-cursor="true"] textarea {
          cursor: pointer !important;
        }

        html[data-pi-reduce-motion="true"] *,
        html[data-pi-reduce-motion="true"] *::before,
        html[data-pi-reduce-motion="true"] *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>

      <div className="fixed bottom-3 left-3 z-[70] print:hidden md:bottom-4 md:left-4">
        {open ? (
          <section
            aria-label="Opciones de accesibilidad"
            className="w-[min(calc(100vw-1.5rem),20rem)] overflow-hidden rounded-[1.15rem] border border-[#d7dedf] bg-[#f7f4ed] shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#d7dedf] bg-white/75 p-3">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#526981]">
                  Accesibilidad
                </p>
                <h2 className="mt-1 text-base font-semibold tracking-[-0.03em] text-[#10233f]">
                  Ajustes de lectura
                </h2>
              </div>

              <button
                aria-label="Cerrar accesibilidad"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#d7dedf] bg-white text-[#10233f] transition hover:bg-[#f7f4ed]"
                onClick={() => setOpen(false)}
                type="button"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="max-h-[min(68svh,34rem)] overflow-y-auto overscroll-contain p-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  className="inline-flex min-h-10 items-center justify-center rounded-2xl border border-[#d7dedf] bg-white px-3 text-xs font-semibold text-[#10233f] transition hover:bg-white/80"
                  onClick={decreaseText}
                  type="button"
                >
                  <Minus className="mr-1.5 size-3.5" />
                  Texto
                </button>

                <button
                  className="inline-flex min-h-10 items-center justify-center rounded-2xl border border-[#d7dedf] bg-white px-3 text-xs font-semibold text-[#10233f] transition hover:bg-white/80"
                  onClick={increaseText}
                  type="button"
                >
                  <Plus className="mr-1.5 size-3.5" />
                  Texto
                </button>
              </div>

              <div className="mt-3 grid gap-2">
                <ToggleRow
                  active={state.highContrast}
                  icon={Contrast}
                  label="Alto contraste"
                  onClick={() => updateState({ ...state, highContrast: !state.highContrast })}
                />

                <ToggleRow
                  active={state.grayscale}
                  icon={Eye}
                  label="Escala de grises"
                  onClick={() => updateState({ ...state, grayscale: !state.grayscale })}
                />

                <ToggleRow
                  active={state.underlineLinks}
                  icon={Underline}
                  label="Subrayar enlaces"
                  onClick={() => updateState({ ...state, underlineLinks: !state.underlineLinks })}
                />

                <ToggleRow
                  active={state.readableFont}
                  icon={LetterText}
                  label="Fuente más legible"
                  onClick={() => updateState({ ...state, readableFont: !state.readableFont })}
                />

                <ToggleRow
                  active={state.relaxedSpacing}
                  icon={Space}
                  label="Mayor espaciado"
                  onClick={() => updateState({ ...state, relaxedSpacing: !state.relaxedSpacing })}
                />

                <ToggleRow
                  active={state.focusMode}
                  icon={Focus}
                  label="Foco visible"
                  onClick={() => updateState({ ...state, focusMode: !state.focusMode })}
                />

                <ToggleRow
                  active={state.largeCursor}
                  icon={MousePointer2}
                  label="Cursor grande"
                  onClick={() => updateState({ ...state, largeCursor: !state.largeCursor })}
                />

                <ToggleRow
                  active={state.reduceMotion}
                  icon={Pause}
                  label="Reducir movimiento"
                  onClick={() => updateState({ ...state, reduceMotion: !state.reduceMotion })}
                />
              </div>

              <button
                className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-full border border-[#d7dedf] bg-white px-3 text-xs font-semibold text-[#10233f] transition hover:bg-white/80"
                onClick={reset}
                type="button"
              >
                <RotateCcw className="mr-2 size-3.5" />
                Restablecer ajustes
              </button>

              <div className="mt-3 rounded-2xl border border-[#d7dedf] bg-white/70 px-3 py-2">
                <p className="text-[0.67rem] leading-4 text-[#526981]">
                  Estos ajustes ayudan a personalizar la lectura. No sustituyen una auditoría de accesibilidad.
                </p>

                <Link
                  className="mt-2 inline-flex text-[0.68rem] font-semibold text-[#10233f] underline-offset-4 hover:underline"
                  href="/accessibilidad"
                >
                  Ver compromiso de accesibilidad
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <button
            aria-label="Abrir opciones de accesibilidad"
            className={`inline-flex size-10 items-center justify-center rounded-full border shadow-xl transition ${
              active
                ? "border-[#10233f] bg-[#10233f] text-white"
                : "border-[#d7dedf] bg-white text-[#10233f] hover:bg-[#f7f4ed]"
            }`}
            onClick={() => setOpen(true)}
            type="button"
          >
            <Accessibility className="size-5" />
            <span className="sr-only">Accesibilidad</span>
          </button>
        )}
      </div>
    </>
  );
}