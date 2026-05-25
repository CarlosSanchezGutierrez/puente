import {
  BookOpen,
  CalendarDays,
  HeartHandshake,
  Inbox,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mi cuenta",
  description: "Panel personal de Puente para seguimiento de participacion, solicitudes y eventos.",
};

const upcomingSections = [
  {
    title: "Solicitudes de libros",
    description: "Seguimiento de libros solicitados, estado, fechas y devoluciones.",
    icon: BookOpen,
  },
  {
    title: "Eventos registrados",
    description: "Registro de talleres, grupos de estudio, platicas y actividades.",
    icon: CalendarDays,
  },
  {
    title: "Voluntariado",
    description: "Historial de participacion, intereses, areas de apoyo y seguimiento.",
    icon: HeartHandshake,
  },
  {
    title: "Solicitudes enviadas",
    description: "Mensajes, solicitudes de apoyo y contacto con organizaciones.",
    icon: Inbox,
  },
];

export default async function CuentaPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/cuenta");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name,email,avatar_url,provider,role")
    .eq("id", user.id)
    .maybeSingle();

  const displayName =
    profile?.full_name ??
    user.user_metadata?.full_name ??
    user.user_metadata?.name ??
    user.email ??
    "Usuario Puente";

  const provider = profile?.provider ?? user.app_metadata?.provider ?? "auth";
  const email = profile?.email ?? user.email ?? "Correo no disponible";

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
            Mi Puente
          </Badge>

          <div className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#60738c] md:text-sm">
                Cuenta activa
              </p>

              <h1 className="mt-4 font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
                {displayName}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
                Este panel sera la base para dar seguimiento a tus solicitudes, eventos,
                libros y participacion dentro de Puente.
              </p>

              <div className="mt-8">
                <SignOutButton />
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm">
              <div className="rounded-[1.75rem] bg-[#10233f] p-6 text-white md:p-8">
                <ShieldCheck className="mb-10 size-8 text-[#d7e7f6]" />

                <p className="font-[var(--font-serif)] text-3xl font-semibold leading-10 tracking-[-0.04em] md:text-4xl md:leading-[1.08]">
                  Tu cuenta ya esta lista. El siguiente paso sera conectar formularios y solicitudes con tu historial.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-[#c9d8e8]">
                  <div className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-[#d7e7f6]" />
                    <span>{email}</span>
                  </div>
                  <div className="flex gap-3">
                    <UserRound className="mt-0.5 size-4 shrink-0 text-[#d7e7f6]" />
                    <span>Proveedor: {provider}</span>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#d7e7f6]" />
                    <span>Rol: {profile?.role ?? "member"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {upcomingSections.map((section) => (
              <Card className="border-[#d7dedf] bg-white/75 shadow-sm" key={section.title}>
                <CardContent className="p-6">
                  <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
                    <section.icon className="size-6 text-[#10233f]" />
                  </div>

                  <h2 className="text-xl font-semibold tracking-[-0.03em] text-[#10233f]">
                    {section.title}
                  </h2>

                  <p className="mt-3 leading-7 text-[#425875]">{section.description}</p>

                  <p className="mt-5 text-sm font-medium text-[#60738c]">Proximamente</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}