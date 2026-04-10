/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Removed unoptimized: true to enable Next.js image optimization
  },
};

module.exports = nextConfig;
