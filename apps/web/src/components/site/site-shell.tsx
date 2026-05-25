import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#10233f]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
