import type { NextConfig } from "next";
import { BASE_PATH } from "./config/constants";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  distDir: "build",
};

export default nextConfig;
