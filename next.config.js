/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/next-tailwind",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
