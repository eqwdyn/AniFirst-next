import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "ru-images-s.kinorium.com",
      },
    ],
  },
};

export default nextConfig;
