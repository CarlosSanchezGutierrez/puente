import { LockKeyhole, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Acceso interno",
  description: "Acceso interno para administracion de Puente Impacto.",
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    next?: string;
    error?: string;
  }>;
}) {
  const params = await searchParams;
  const nextPath = params.next?.startsWith("/admin") ? params.next : "/admin/vocacional";

  const errorMessage =
    params.error === "invalid"
      ? "La contraseña no es correcta."
      : params.error === "config"
        ? "Falta configurar ADMIN_ACCESS_PASSWORD en el entorno."
        : null;

  return (
    <SiteShell>
      <section className="mx-auto grid min-h-[70vh] max-w-7xl place-items-center px-6 py-16">
        <Card className="w-full max-w-xl border-[#d7dedf] bg-white/82 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#10233f]">
                <LockKeyhole className="size-6 text-white" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#60738c]">
                  Acceso interno
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#10233f]">
                  Panel de administracion
                </h1>
                <p className="mt-3 leading-7 text-[#425875]">
                  Ingresa la contraseña interna para continuar al tablero administrativo.
                </p>
              </div>
            </div>

            {errorMessage ? (
              <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
                {errorMessage}
              </div>
            ) : null}

            <form action="/api/admin/login" className="grid gap-4" method="post">
              <input name="next" type="hidden" value={nextPath} />

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[#10233f]">Contraseña</span>
                <input
                  autoComplete="current-password"
                  className="min-h-12 rounded-2xl border border-[#d7dedf] bg-white/80 px-4 text-[#10233f] outline-none transition focus:border-[#10233f]"
                  name="password"
                  required
                  type="password"
                />
              </label>

              <button
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#10233f] px-6 text-sm font-medium text-white transition hover:bg-[#1b365f]"
                type="submit"
              >
                Entrar
                <ShieldCheck className="ml-2 size-4" />
              </button>
            </form>
          </CardContent>
        </Card>
      </section>
    </SiteShell>
  );
}