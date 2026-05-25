import { redirect } from "next/navigation";
import { loginAdmin } from "@/app/admin/actions/auth";
import { isAdminAuthenticated } from "@/lib/admin/auth";

export const metadata = {
  title: "Admin",
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>;
}) {
  const authenticated = await isAdminAuthenticated();

  if (authenticated) {
    redirect("/admin/dashboard");
  }

  const params = await searchParams;
  const hasError = params?.error === "1";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f4ed] px-6 text-[#10233f]">
      <section className="w-full max-w-md rounded-[2rem] border border-[#d7dedf] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#60738c]">
          Puente Admin
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
          Acceso interno
        </h1>

        <p className="mt-4 leading-7 text-[#425875]">
          Panel temporal para revisar solicitudes recibidas desde la plataforma.
        </p>

        {hasError ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            Token incorrecto.
          </div>
        ) : null}

        <form action={loginAdmin} className="mt-8 grid gap-4">
          <input
            className="rounded-2xl border border-[#d7dedf] bg-[#fbfaf7] px-4 py-3 outline-none"
            name="token"
            placeholder="Token de administrador"
            type="password"
          />

          <button
            className="rounded-full bg-[#10233f] px-5 py-3 text-sm font-medium text-white hover:bg-[#1b365f]"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}