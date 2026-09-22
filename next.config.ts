import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/info-websites",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services/e-commerce",
        destination: "/services/ecommerce",
        permanent: true,
      },
      {
        source: "/services/custom-systems",
        destination: "/services/systems",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
