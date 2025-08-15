/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove these lines for custom domain:
  // basePath: '/jainpandithyderabad',
  // assetPrefix: '/jainpandithyderabad/',
};

export default nextConfig;