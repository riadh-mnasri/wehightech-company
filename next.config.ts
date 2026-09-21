import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

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
          destination: "/fr#contact",
          permanent: true,
        },
        {
          source: "/index.php/:path*",
          destination: "/fr",
          permanent: true,
        },
        {
          source: "/",
          destination: "/fr",
          permanent: false,
        },
      ];
    },
  }),
};

export default isGitHubPages ? nextConfig : withBotId(nextConfig);
