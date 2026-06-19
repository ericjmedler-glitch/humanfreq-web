import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 85 is the quality value used across all next/image calls in this project.
    qualities: [85],
  },
};

export default nextConfig;
