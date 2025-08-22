/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.thegroovement.nyc",
      },
      { hostname: "cdn.sanity.io" },
    ],
  },
  maxDuration: 30, // 30 seconds
};

module.exports = nextConfig;
