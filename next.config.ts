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
      {
        hostname: "j61w65gg-7000.euw.devtunnels.ms",
      },
    ],
  },
  allowedDevOrigins: ["192.168.0.128"],
};

export default nextConfig;
