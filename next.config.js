/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
