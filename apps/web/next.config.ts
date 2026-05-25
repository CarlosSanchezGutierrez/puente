import type { NextConfig } from "next";

function getSupabaseImageHostname() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!rawUrl) {
    return "**.supabase.co";
  }

  try {
    return new URL(rawUrl).hostname;
  } catch {
    return "**.supabase.co";
  }
}
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: getSupabaseImageHostname(),
        pathname: "/storage/v1/object/public/book-covers/**",
      },
    ],
  },
  transpilePackages: [
    "@puente/brand",
    "@puente/database",
    "@puente/schemas",
    "@puente/config",
    "@puente/utils",
  ],
};

export default nextConfig;