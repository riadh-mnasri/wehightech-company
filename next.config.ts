import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: "export",
    basePath: "/wehightech-company",
    images: { unoptimized: true },
  }),
  ...(!isGitHubPages && {
    async redirects() {
      return [
        {
          source: "/index.php/contact",
          destination: "/#contact",
          permanent: true,
        },
        {
          source: "/index.php/:path*",
          destination: "/",
          permanent: true,
        },
      ];
    },
  }),
};

export default nextConfig;
