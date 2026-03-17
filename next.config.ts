import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow any local images in /public
    unoptimized: false,
  },
};

export default nextConfig;
