import { Suspense } from "react";
import { LogIn, ShieldCheck, UserRound } from "lucide-react";
import { LoginPanel } from "@/components/auth/login-panel";
import { SiteShell } from "@/components/site/site-shell";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Iniciar sesion",
  description:
    "Inicia sesion en Puente para dar seguimiento a solicitudes, eventos, libros y participacion.",
};

export default function LoginPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(65,105,150,0.22),transparent_38%),linear-gradient(180deg,#f7f4ed_0%,#f3efe6_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
          <div>
            <Badge className="mb-6 w-fit rounded-full border-[#c7d2df] bg-white/75 px-4 py-1.5 text-[#10233f] shadow-sm">
              Cuenta Puente
            </Badge>

            <h1 className="font-[var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-[#10233f] sm:text-6xl md:text-8xl">
              Inicia sesi&oacute;n para dar seguimiento.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#425875] md:text-xl md:leading-9">
              Tu cuenta permitir&aacute; organizar solicitudes, eventos, libros, voluntariado y participaci&oacute;n
              conforme Puente vaya integrando m&aacute;s funciones.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <UserRound className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Perfil</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Una identidad para participar.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <LogIn className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Acceso</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Login social sin contrase&ntilde;a propia.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d7dedf] bg-white/65 p-4">
                <ShieldCheck className="mb-4 size-5 text-[#10233f]" />
                <p className="font-semibold text-[#10233f]">Seguimiento</p>
                <p className="mt-1 text-sm leading-6 text-[#60738c]">
                  Base para historial futuro.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dedf] bg-white/78 p-5 shadow-sm md:p-6">
            <Suspense
              fallback={
                <div className="rounded-[1.25rem] border border-[#d7dedf] bg-white/75 p-5 text-[#60738c]">
                  Cargando opciones de inicio de sesi&oacute;n...
                </div>
              }
            >
              <LoginPanel />
            </Suspense>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}