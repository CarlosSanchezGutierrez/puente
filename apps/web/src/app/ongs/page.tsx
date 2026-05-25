import { Building2 } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

              <form className="mt-6 grid gap-5">
                <div className="grid gap-2">
                  <Label>Nombre de la organización</Label>
                  <Input placeholder="Nombre de la ONG o proyecto social" />
                </div>

                <div className="grid gap-2">
                  <Label>Persona de contacto</Label>
                  <Input placeholder="Nombre completo" />
                </div>

                <div className="grid gap-2">
                  <Label>Correo</Label>
                  <Input placeholder="contacto@organizacion.org" type="email" />
                </div>

                <div className="grid gap-2">
                  <Label>Problema o proceso que quieren mejorar</Label>
                  <Textarea placeholder="Cuéntanos qué hacen hoy, qué problema tienen y qué les gustaría mejorar." />
                </div>

                <Button className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]">
                  Enviar solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}
