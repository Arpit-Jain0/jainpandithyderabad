/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/jainpandithyderabad',
  assetPrefix: '/jainpandithyderabad/',
};

export default nextConfig; // ✅ Correct for .mjs