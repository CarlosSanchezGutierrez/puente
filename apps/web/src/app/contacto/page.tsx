import { Mail, MessageCircle, Users } from "lucide-react";
import { ContactMessageForm } from "@/components/forms/contact-message-form";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contacto",
};

const contactPaths = [
  {
    icon: Users,
    title: "Quiero participar",
    description:
      "Para estudiantes, voluntarios, mentores, profesores o colaboradores que quieran sumarse a Puente.",
  },
  {
    icon: MessageCircle,
    title: "Soy una ONG o proyecto social",
    description:
      "Para organizaciones que quieren explorar una solución digital, programa social o colaboración.",
  },
  {
    icon: Mail,
    title: "Tengo una propuesta",
    description:
      "Para ideas de talleres, libros, videos, investigaciones, eventos, recursos o alianzas.",
  },
];

export default function ContactoPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Badge className="mb-6 rounded-full border-[#c7d2df] bg-white/70 px-4 py-1 text-[#10233f]">
          Contacto
        </Badge>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Hablemos de cómo construir algo útil.
            </h1>
          </div>

          <p className="text-lg leading-8 text-[#425875]">
            Usa este formulario para escribirnos sobre voluntariado, proyectos sociales,
            biblioteca, eventos, talleres, recursos, alianzas o cualquier propuesta relacionada
            con Puente.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {contactPaths.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="border-[#d7dedf] bg-white/75 shadow-sm">
                  <CardContent className="p-7">
                    <Icon className="mb-6 size-7 text-[#10233f]" />
                    <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                      {item.title}
                    </h2>
                    <p className="mt-4 leading-7 text-[#425875]">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-[#d7dedf] bg-white/75 shadow-sm">
            <CardContent className="p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Enviar mensaje
              </h2>
              <ContactMessageForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}