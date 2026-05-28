"use client";

import { useEffect } from "react";

function normalizeText(value: string | null | undefined) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function isVisible(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle(element);

  return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
}

function isMoreTrigger(element: HTMLElement) {
  const label = normalizeText(element.innerText || element.textContent);

  return label === "mas" || label === "mas opciones" || label === "ver mas" || label === "más" || label === "más opciones";
}

function findMenuPanel(from: HTMLElement) {
  let current: HTMLElement | null = from;
  let best: HTMLElement | null = null;

  while (current && current !== document.body) {
    const text = normalizeText(current.textContent);
    const rect = current.getBoundingClientRect();

    const looksLikeMenu =
      text.includes("inicio") &&
      (text.includes("ongs") || text.includes("puente vocacional") || text.includes("colabora") || text.includes("contacto")) &&
      rect.width > 0 &&
      rect.height > 80;

    if (looksLikeMenu) {
      best = current;
    }

    current = current.parentElement;
  }

  return best;
}

function forceScrollablePanel(panel: HTMLElement) {
  if (!isMobileViewport()) {
    return;
  }

  panel.setAttribute("data-pi-menu-runtime-scroll", "true");

  panel.style.maxHeight = "calc(" + window.innerHeight + "px - 5.75rem)";
  panel.style.overflowY = "scroll";
  panel.style.overflowX = "hidden";
  panel.style.overscrollBehaviorY = "contain";
  panel.style.touchAction = "pan-y";
  panel.style.setProperty("-webkit-overflow-scrolling", "touch");
  panel.style.scrollbarWidth = "thin";

  if (window.getComputedStyle(panel).position === "static") {
    panel.style.position = "relative";
  }
}

function getControlledContent(trigger: HTMLElement) {
  const controls = trigger.getAttribute("aria-controls");

  if (controls) {
    const controlled = document.getElementById(controls);

    if (controlled instanceof HTMLElement) {
      return controlled;
    }
  }

  const next = trigger.nextElementSibling;

  if (next instanceof HTMLElement) {
    return next;
  }

  const parent = trigger.parentElement;

  if (!parent) {
    return null;
  }

  const children = Array.from(parent.children);
  const index = children.indexOf(trigger);

  if (index >= 0) {
    for (let i = index + 1; i < children.length; i += 1) {
      const child = children[i];

      if (child instanceof HTMLElement) {
        return child;
      }
    }
  }

  if (parent.nextElementSibling instanceof HTMLElement) {
    return parent.nextElementSibling;
  }

  return null;
}

function setMoreContentOpen(trigger: HTMLElement, content: HTMLElement, open: boolean) {
  trigger.setAttribute("aria-expanded", open ? "true" : "false");
  trigger.setAttribute("data-pi-more-open", open ? "true" : "false");

  content.hidden = !open;
  content.setAttribute("aria-hidden", open ? "false" : "true");
  content.setAttribute("data-pi-more-content", open ? "open" : "closed");
  content.style.display = open ? "" : "none";
}

function patchDetailsElement(details: HTMLDetailsElement) {
  const summary = details.querySelector("summary");

  if (!(summary instanceof HTMLElement)) {
    return;
  }

  if (!isMoreTrigger(summary)) {
    return;
  }

  const panel = findMenuPanel(summary);

  if (panel) {
    forceScrollablePanel(panel);
  }

  details.open = false;

  if (summary.dataset.piMoreRuntimePatched === "true") {
    return;
  }

  summary.dataset.piMoreRuntimePatched = "true";
  summary.setAttribute("aria-expanded", "false");

  summary.addEventListener(
    "click",
    (event) => {
      if (!isMobileViewport()) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      details.open = !details.open;
      summary.setAttribute("aria-expanded", details.open ? "true" : "false");

      const activePanel = findMenuPanel(summary);

      if (activePanel) {
        forceScrollablePanel(activePanel);
      }
    },
    true,
  );
}

function patchMoreTrigger(trigger: HTMLElement) {
  if (trigger.dataset.piMoreRuntimePatched === "true") {
    const panel = findMenuPanel(trigger);

    if (panel) {
      forceScrollablePanel(panel);
    }

    return;
  }

  const details = trigger.closest("details");

  if (details instanceof HTMLDetailsElement) {
    patchDetailsElement(details);
    return;
  }

  const content = getControlledContent(trigger);

  if (!(content instanceof HTMLElement)) {
    return;
  }

  const panel = findMenuPanel(trigger);

  if (panel) {
    forceScrollablePanel(panel);
  }

  trigger.dataset.piMoreRuntimePatched = "true";
  setMoreContentOpen(trigger, content, false);

  trigger.addEventListener(
    "click",
    (event) => {
      if (!isMobileViewport()) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const currentlyOpen = trigger.getAttribute("data-pi-more-open") === "true";
      setMoreContentOpen(trigger, content, !currentlyOpen);

      const activePanel = findMenuPanel(trigger);

      if (activePanel) {
        forceScrollablePanel(activePanel);
      }
    },
    true,
  );
}

function patchVisibleMenuPanels() {
  const possiblePanels = document.querySelectorAll<HTMLElement>("nav, aside, section, div, [role=\"dialog\"], [role=\"navigation\"]");

  possiblePanels.forEach((panel) => {
    if (!isMobileViewport() || !isVisible(panel)) {
      return;
    }

    const text = normalizeText(panel.textContent);

    const looksLikeMenu =
      text.includes("inicio") &&
      (text.includes("ongs") || text.includes("puente vocacional") || text.includes("colabora")) &&
      (text.includes("mas") || text.includes("más"));

    if (looksLikeMenu) {
      forceScrollablePanel(panel);
    }
  });
}

function patchMobileMenu() {
  if (!isMobileViewport()) {
    return;
  }

  document.querySelectorAll("details").forEach((details) => {
    if (details instanceof HTMLDetailsElement) {
      patchDetailsElement(details);
    }
  });

  const possibleTriggers = document.querySelectorAll<HTMLElement>("button, a, summary, [role=\"button\"], [aria-controls]");

  possibleTriggers.forEach((trigger) => {
    if (isMoreTrigger(trigger)) {
      patchMoreTrigger(trigger);
    }
  });

  patchVisibleMenuPanels();
}

export default function MobileMenuRuntimeFix() {
  useEffect(() => {
    let frame = 0;

    const schedulePatch = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        patchMobileMenu();
      });
    };

    schedulePatch();

    const observer = new MutationObserver(() => {
      schedulePatch();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style", "hidden", "aria-expanded", "data-state", "open"],
    });

    window.addEventListener("resize", schedulePatch);
    window.addEventListener("orientationchange", schedulePatch);
    window.addEventListener("click", schedulePatch, true);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", schedulePatch);
      window.removeEventListener("orientationchange", schedulePatch);
      window.removeEventListener("click", schedulePatch, true);
    };
  }, []);

  return null;
}
