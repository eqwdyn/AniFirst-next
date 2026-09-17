import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "i.kodikres.com",
      },
      {
        hostname: "shikimori.io",
      },
    ],
  },
};

export default nextConfig;
