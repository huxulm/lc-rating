import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // basePath: process.env.NODE_ENV === "development" ? "" : BASE_PATH,
  basePath: "/lc-rating",
  output: "export",
  distDir: "../../build/apps/web",
};

export default nextConfig;
