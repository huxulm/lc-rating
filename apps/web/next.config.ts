import type { NextConfig } from "next";
import { BASE_PATH } from "./config/constants";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: BASE_PATH,
  output: "export",
  distDir: "../../build/apps/web",
};

export default nextConfig;
