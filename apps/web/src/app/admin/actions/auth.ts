"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, setAdminSession } from "@/lib/admin/auth";

export async function loginAdmin(formData: FormData) {
  const token = String(formData.get("token") ?? "");
  const expectedToken = process.env.PUENTE_ADMIN_TOKEN;

  if (!expectedToken) {
    throw new Error("Missing PUENTE_ADMIN_TOKEN");
  }

  if (token !== expectedToken) {
    redirect("/admin?error=1");
  }

  await setAdminSession();
  redirect("/admin/dashboard");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin");
}