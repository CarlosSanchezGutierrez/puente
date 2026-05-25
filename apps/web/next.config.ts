import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@puente/brand",
    "@puente/database",
    "@puente/schemas",
    "@puente/config",
    "@puente/utils",
  ],
};

export default nextConfig;