import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
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
};

export default withBotId(nextConfig);
