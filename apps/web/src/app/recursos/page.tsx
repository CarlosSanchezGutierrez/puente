import { FileText } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { resources } from "@/lib/mock-data";

export const metadata = {
  title: "Recursos",
};

export default function RecursosPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Badge className="mb-6 rounded-full border-[#c7d2df] bg-white/70 px-4 py-1 text-[#10233f]">
          Recursos gratuitos
        </Badge>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Guías y materiales abiertos.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Recursos gratuitos para estudiantes, organizaciones, voluntarios y personas
            que buscan orientación práctica en tecnología, comunidad, carrera profesional
            y vida universitaria.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <Card key={resource.title} className="border-[#d7dedf] bg-white/75 shadow-sm">
              <CardContent className="p-7">
                <FileText className="mb-8 size-7 text-[#10233f]" />

                <Badge variant="outline">{resource.category}</Badge>

                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">
                  {resource.title}
                </h2>

                <p className="mt-5 leading-7 text-[#425875]">{resource.description}</p>

                <Button className="mt-6 rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]">
                  Ver recurso
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
