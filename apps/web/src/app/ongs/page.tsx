import { Building2 } from "lucide-react";
import { NgoRequestForm } from "@/components/forms/ngo-request-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ngoProgramOptions } from "@/lib/mock-data";

export const metadata = {
  title: "ONG's y proyectos sociales",
};

export default function OngsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Badge className="mb-6 rounded-full border-[#c7d2df] bg-white/70 px-4 py-1 text-[#10233f]">
          Puente Systems
        </Badge>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Software para organizaciones sociales.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Queremos construir soluciones digitales para organizaciones que trabajan en
            educación, salud, seguridad, bienestar, comunidad y causas sociales.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {ngoProgramOptions.map((option) => (
              <Card key={option.title} className="border-[#d7dedf] bg-white/75 shadow-sm">
                <CardContent className="p-7">
                  <Building2 className="mb-6 size-7 text-[#10233f]" />
                  <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                    {option.title}
                  </h2>
                  <p className="mt-4 leading-7 text-[#425875]">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Solicitud inicial
              </h2>
              <NgoRequestForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}