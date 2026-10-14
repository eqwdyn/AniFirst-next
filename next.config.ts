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
        hostname: "p05j5zjs-7000.euw.devtunnels.ms",
      },
    ],
  },
  allowedDevOrigins: ["192.168.0.128", "192.168.100.22"],
};

export default nextConfig;
