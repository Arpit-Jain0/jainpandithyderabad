/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static export
  images: {
    unoptimized: true // Avoids Next.js image optimization server
  }
};

export default nextConfig;
