/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/jainpandithyderabad',
  assetPrefix: '/jainpandithyderabad/',
};

export default nextConfig;