/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next-ecommerce-template-4.vercel.app",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during the build
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during the build
  },
};

module.exports = nextConfig;
