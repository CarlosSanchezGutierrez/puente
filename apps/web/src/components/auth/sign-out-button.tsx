"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/browser";

export function SignOutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function signOut() {
    setIsLoading(true);

    const supabase = createClient();
    await supabase.auth.signOut();

    router.refresh();
    router.push("/login");
  }

  return (
    <button
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d7dedf] bg-white/75 px-5 text-sm font-medium text-[#10233f] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      disabled={isLoading}
      onClick={signOut}
      type="button"
    >
      <LogOut className="mr-2 size-4" />
      {isLoading ? "Cerrando..." : "Cerrar sesion"}
    </button>
  );
}