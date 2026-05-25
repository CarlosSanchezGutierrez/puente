import { HandHeart } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { volunteerAreas } from "@/lib/mock-data";

export const metadata = {
  title: "Voluntariado",
};

export default function VoluntariadoPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Badge className="mb-6 rounded-full border-[#c7d2df] bg-white/70 px-4 py-1 text-[#10233f]">
          Participar
        </Badge>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Voluntariado técnico y comunitario.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Buscamos estudiantes, profesionales, profesores y colaboradores que quieran
            aportar desde software, datos, diseño, investigación, documentación, educación,
            idiomas, media o comunidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="p-7">
              <HandHeart className="mb-8 size-8 text-[#10233f]" />
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Áreas donde puedes ayudar
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {volunteerAreas.map((area) => (
                  <Badge key={area} variant="outline" className="rounded-full px-3 py-1">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Aplicación inicial
              </h2>

              <form className="mt-6 grid gap-5">
                <div className="grid gap-2">
                  <Label>Nombre completo</Label>
                  <Input placeholder="Tu nombre" />
                </div>

                <div className="grid gap-2">
                  <Label>Correo</Label>
                  <Input placeholder="tu@email.com" type="email" />
                </div>

                <div className="grid gap-2">
                  <Label>Área de interés</Label>
                  <Input placeholder="Software, investigación, comunidad, media..." />
                </div>

                <div className="grid gap-2">
                  <Label>Motivación</Label>
                  <Textarea placeholder="Cuéntanos por qué quieres participar." />
                </div>

                <Button className="rounded-full bg-[#10233f] text-white hover:bg-[#1b365f]">
                  Enviar aplicación
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}
