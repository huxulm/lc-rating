import type { NextConfig } from "next";
import { BASE_PATH } from "./config/constants";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: process.env.NODE_ENV === "development" ? "" : BASE_PATH,
  output: "export",
  distDir: "../../build/apps/web",
};

export default nextConfig;
