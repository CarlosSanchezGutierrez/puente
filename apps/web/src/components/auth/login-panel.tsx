"use client";

import {
  Building2,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Loader2,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Provider } from "@supabase/supabase-js";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/browser";

type OAuthProvider = "google" | "azure" | "github" | "apple" | "linkedin_oidc" | "facebook";

const providers: Array<{
  id: OAuthProvider;
  label: string;
  description: string;
  icon: LucideIcon;
  priority: "primary" | "secondary";
}> = [
  {
    id: "google",
    label: "Continuar con Google",
    description: "Recomendado para estudiantes, comunidad y usuarios generales.",
    icon: Globe2,
    priority: "primary",
  },
  {
    id: "azure",
    label: "Continuar con Microsoft / Outlook",
    description: "Ideal para cuentas institucionales, educativas y profesionales.",
    icon: Building2,
    priority: "primary",
  },
  {
    id: "github",
    label: "Continuar con GitHub",
    description: "Alineado con perfiles tecnicos, software y voluntariado.",
    icon: Code2,
    priority: "primary",
  },
  {
    id: "apple",
    label: "Continuar con Apple",
    description: "Opcion util para usuarios iOS y ecosistema Apple.",
    icon: Smartphone,
    priority: "secondary",
  },
  {
    id: "linkedin_oidc",
    label: "Continuar con LinkedIn",
    description: "Pensado para perfil profesional, mentores y networking.",
    icon: BriefcaseBusiness,
    priority: "secondary",
  },
  {
    id: "facebook",
    label: "Continuar con Facebook",
    description: "Opcion para comunidad general y participacion social.",
    icon: Users,
    priority: "secondary",
  },
];

export function LoginPanel() {
  const searchParams = useSearchParams();
  const [loadingProvider, setLoadingProvider] = useState<OAuthProvider | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    searchParams.get("error"),
  );

  const nextPath = searchParams.get("next") ?? "/cuenta";

  async function signIn(provider: OAuthProvider) {
    setErrorMessage(null);
    setLoadingProvider(provider);

    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(
      nextPath,
    )}`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setLoadingProvider(null);
    }
  }

  const primaryProviders = providers.filter((provider) => provider.priority === "primary");
  const secondaryProviders = providers.filter((provider) => provider.priority === "secondary");

  return (
    <div className="grid gap-4">
      {errorMessage ? (
        <div className="rounded-[1.25rem] border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
          {errorMessage}
        </div>
      ) : null}

      <div className="grid gap-3">
        {primaryProviders.map((provider) => (
          <button
            className="grid min-h-16 grid-cols-[44px_1fr_auto] items-center gap-4 rounded-[1.25rem] border border-[#d7dedf] bg-white/80 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-70"
            disabled={Boolean(loadingProvider)}
            key={provider.id}
            onClick={() => signIn(provider.id)}
            type="button"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl border border-[#d7dedf] bg-[#fbfaf7]">
              <provider.icon className="size-5 text-[#10233f]" />
            </span>

            <span>
              <span className="block font-semibold text-[#10233f]">{provider.label}</span>
              <span className="mt-1 block text-sm leading-5 text-[#60738c]">
                {provider.description}
              </span>
            </span>

            {loadingProvider === provider.id ? (
              <Loader2 className="size-5 animate-spin text-[#10233f]" />
            ) : null}
          </button>
        ))}
      </div>

      <div className="rounded-[1.35rem] border border-[#d7dedf] bg-[#fbfaf7] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60738c]">
          Mas opciones
        </p>

        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {secondaryProviders.map((provider) => (
            <button
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d7dedf] bg-white/75 px-4 text-sm font-medium text-[#10233f] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
              disabled={Boolean(loadingProvider)}
              key={provider.id}
              onClick={() => signIn(provider.id)}
              type="button"
            >
              {loadingProvider === provider.id ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <provider.icon className="size-4" />
              )}
              {provider.label.replace("Continuar con ", "")}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[40px_1fr] gap-4 rounded-[1.25rem] border border-[#d7dedf] bg-white/65 p-4">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#10233f]">
          <ShieldCheck className="size-5 text-white" />
        </div>
        <p className="text-sm leading-6 text-[#60738c]">
          Iniciar sesion permite dar seguimiento a solicitudes, eventos, libros y participacion.
          Las paginas publicas de Puente seguiran disponibles sin cuenta.
        </p>
      </div>
    </div>
  );
}