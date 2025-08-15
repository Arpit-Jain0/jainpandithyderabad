/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keep static export
  distDir: 'out',
  basePath: '/jainpandithyderabad', // Your repo name
  assetPrefix: '/jainpandithyderabad/', // Ensures JS/CSS loads correctly
  trailingSlash: true, // Makes routing consistent for GH Pages
  images: {
    unoptimized: true, // No server-side image optimization
  }
};

export default nextConfig;
