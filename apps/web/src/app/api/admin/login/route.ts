import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, getAdminSessionValue } from "@/lib/admin/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getSafeNext(value: FormDataEntryValue | null) {
  const raw = typeof value === "string" ? value : "/admin/vocacional";

  if (!raw.startsWith("/admin")) {
    return "/admin/vocacional";
  }

  return raw;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const password = typeof formData.get("password") === "string"
    ? String(formData.get("password"))
    : "";

  const nextPath = getSafeNext(formData.get("next"));
  const configuredPassword = process.env.ADMIN_ACCESS_PASSWORD?.trim();
  const sessionValue = getAdminSessionValue();

  if (!configuredPassword || !sessionValue) {
    return NextResponse.redirect(
      new URL(`/admin/login?error=config&next=${encodeURIComponent(nextPath)}`, request.url),
    );
  }

  if (password !== configuredPassword) {
    return NextResponse.redirect(
      new URL(`/admin/login?error=invalid&next=${encodeURIComponent(nextPath)}`, request.url),
    );
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url));

  const cookieOptions = {
    name: ADMIN_COOKIE_NAME,
    value: sessionValue,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 8,
  };

  response.cookies.set({
    ...cookieOptions,
    path: "/",
  });

  response.cookies.set({
    ...cookieOptions,
    path: "/admin",
  });

  return response;
}