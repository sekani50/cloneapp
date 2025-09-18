import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: { ignoreBuildErrors: true },
  images: {
      domains: ["thejrwa.com"],
    },
};

export default nextConfig;
