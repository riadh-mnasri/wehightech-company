import type { NextConfig } from "next";

const isPagesEnv = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isPagesEnv ? "/wehightech-company" : "",
  images: { unoptimized: true },
};

export default nextConfig;
