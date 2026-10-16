import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/privacy",
        destination: "/sesh/privacy",
      },
      {
        source: "/privacy-policy",
        destination: "/sesh/privacy",
      },
    ];
  },
};

export default nextConfig;
