"use client";

import {
  Accessibility,
  Contrast,
  Minus,
  Pause,
  Plus,
  RotateCcw,
  Underline,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type FontScale = "normal" | "large" | "larger";

type AccessibilityState = {
  fontScale: FontScale;
  highContrast: boolean;
  underlineLinks: boolean;
  reduceMotion: boolean;
};

const defaultState: AccessibilityState = {
  fontScale: "normal",
  highContrast: false,
  underlineLinks: false,
  reduceMotion: false,
};

const storageKey = "puente-impacto-accessibility";

function applyAccessibility(state: AccessibilityState) {
  const root = document.documentElement;

  if (state.fontScale === "normal") {
    root.removeAttribute("data-pi-font-scale");
  } else {
    root.setAttribute("data-pi-font-scale", state.fontScale);
  }

  if (state.highContrast) {
    root.setAttribute("data-pi-high-contrast", "true");
  } else {
    root.removeAttribute("data-pi-high-contrast");
  }

  if (state.underlineLinks) {
    root.setAttribute("data-pi-underline-links", "true");
  } else {
    root.removeAttribute("data-pi-underline-links");
  }

  if (state.reduceMotion) {
    root.setAttribute("data-pi-reduce-motion", "true");
  } else {
    root.removeAttribute("data-pi-reduce-motion");
  }
}

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

function isDefaultState(state: AccessibilityState) {
  return (
    state.fontScale === "normal" &&
    !state.highContrast &&
    !state.underlineLinks &&
    !state.reduceMotion
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

        html[data-pi-high-contrast="true"] body {
          background: #ffffff !important;
        }

        html[data-pi-high-contrast="true"] main,
        html[data-pi-high-contrast="true"] section {
          filter: contrast(1.12);
        }

        html[data-pi-high-contrast="true"] a:focus-visible,
        html[data-pi-high-contrast="true"] button:focus-visible,
        html[data-pi-high-contrast="true"] input:focus-visible,
        html[data-pi-high-contrast="true"] select:focus-visible {
          outline: 3px solid #10233f !important;
          outline-offset: 3px !important;
        }

        html[data-pi-underline-links="true"] a {
          text-decoration: underline !important;
          text-underline-offset: 0.18em !important;
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
            className="w-[min(calc(100vw-1.5rem),18.5rem)] overflow-hidden rounded-[1.15rem] border border-[#d7dedf] bg-[#f7f4ed] shadow-2xl"
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

            <div className="grid gap-2 p-3">
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

              <button
                aria-pressed={state.highContrast}
                className={`inline-flex min-h-10 items-center justify-between rounded-2xl border px-3 text-xs font-semibold transition ${
                  state.highContrast
                    ? "border-[#10233f] bg-[#10233f] text-white"
                    : "border-[#d7dedf] bg-white text-[#10233f] hover:bg-white/80"
                }`}
                onClick={() => updateState({ ...state, highContrast: !state.highContrast })}
                type="button"
              >
                <span className="inline-flex items-center">
                  <Contrast className="mr-2 size-4" />
                  Alto contraste
                </span>
                <span>{state.highContrast ? "Activo" : "Off"}</span>
              </button>

              <button
                aria-pressed={state.underlineLinks}
                className={`inline-flex min-h-10 items-center justify-between rounded-2xl border px-3 text-xs font-semibold transition ${
                  state.underlineLinks
                    ? "border-[#10233f] bg-[#10233f] text-white"
                    : "border-[#d7dedf] bg-white text-[#10233f] hover:bg-white/80"
                }`}
                onClick={() => updateState({ ...state, underlineLinks: !state.underlineLinks })}
                type="button"
              >
                <span className="inline-flex items-center">
                  <Underline className="mr-2 size-4" />
                  Subrayar enlaces
                </span>
                <span>{state.underlineLinks ? "Activo" : "Off"}</span>
              </button>

              <button
                aria-pressed={state.reduceMotion}
                className={`inline-flex min-h-10 items-center justify-between rounded-2xl border px-3 text-xs font-semibold transition ${
                  state.reduceMotion
                    ? "border-[#10233f] bg-[#10233f] text-white"
                    : "border-[#d7dedf] bg-white text-[#10233f] hover:bg-white/80"
                }`}
                onClick={() => updateState({ ...state, reduceMotion: !state.reduceMotion })}
                type="button"
              >
                <span className="inline-flex items-center">
                  <Pause className="mr-2 size-4" />
                  Reducir movimiento
                </span>
                <span>{state.reduceMotion ? "Activo" : "Off"}</span>
              </button>

              <button
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d7dedf] bg-white px-3 text-xs font-semibold text-[#10233f] transition hover:bg-white/80"
                onClick={reset}
                type="button"
              >
                <RotateCcw className="mr-2 size-3.5" />
                Restablecer
              </button>

              <p className="rounded-2xl border border-[#d7dedf] bg-white/70 px-3 py-2 text-[0.67rem] leading-4 text-[#526981]">
                Estos ajustes ayudan a leer mejor el sitio. No sustituyen buenas prácticas de accesibilidad.
              </p>
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