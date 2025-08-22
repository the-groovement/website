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
};

module.exports = nextConfig;
