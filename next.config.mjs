/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export without Next.js image optimization server
  },
};

export default nextConfig;
