import "server-only";

import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ADMIN_COOKIE_NAME = "puente_admin_session";

function getAdminPassword() {
  return process.env.ADMIN_ACCESS_PASSWORD?.trim() ?? "";
}

export function getAdminSessionValue() {
  const password = getAdminPassword();

  if (!password) {
    return null;
  }

  return createHash("sha256")
    .update(`puente-admin:${password}`)
    .digest("hex");
}

function safeCompare(a: string, b: string) {
  const first = Buffer.from(a);
  const second = Buffer.from(b);

  if (first.length !== second.length) {
    return false;
  }

  return timingSafeEqual(first, second);
}

export async function hasAdminAccess() {
  const expected = getAdminSessionValue();

  if (!expected) {
    return false;
  }

  const cookieStore = await cookies();
  const current = cookieStore.get(ADMIN_COOKIE_NAME)?.value ?? "";

  if (!current) {
    return false;
  }

  return safeCompare(current, expected);
}

export async function requireAdminAccess(nextPath = "/admin") {
  const allowed = await hasAdminAccess();

  if (!allowed) {
    redirect(`/admin/login?next=${encodeURIComponent(nextPath)}`);
  }
}