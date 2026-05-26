"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";

type ShareActionsProps = {
  url: string;
};

export function ShareActions({ url }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function shareUrl() {
    if (navigator.share) {
      await navigator.share({
        title: "Puente Impacto",
        text: "Conoce Puente Impacto.",
        url,
      });
      return;
    }

    await copyUrl();
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-5 text-sm font-medium text-white transition hover:bg-[#1b365f]"
        onClick={shareUrl}
        type="button"
      >
        Compartir
        <Share2 className="ml-2 size-4" />
      </button>

      <button
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white"
        onClick={copyUrl}
        type="button"
      >
        {copied ? "Copiado" : "Copiar enlace"}
        {copied ? <Check className="ml-2 size-4" /> : <Copy className="ml-2 size-4" />}
      </button>
    </div>
  );
}
