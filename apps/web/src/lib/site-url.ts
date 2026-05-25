export function getSiteUrl() {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ].filter(Boolean) as string[];

  const rawValue = candidates[0] ?? "http://localhost:3000";
  const withProtocol = rawValue.startsWith("http") ? rawValue : `https://${rawValue}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return "http://localhost:3000";
  }
}