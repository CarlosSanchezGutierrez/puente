import { QuickHelpChat } from "@/components/site/quick-help-chat";
import { MobileSocialBar } from "@/components/site/mobile-social-bar";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-[#f7f4ed] text-[#10233f]">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#10233f] focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        href="#main-content"
      >
        Saltar al contenido principal
      </a>

      <SiteHeader />
      <MobileSocialBar />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <SiteFooter />
      <QuickHelpChat />
    </div>
  );
}