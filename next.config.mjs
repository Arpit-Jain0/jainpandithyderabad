/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // for static export
  basePath: '/jainpandithyderabad',
  assetPrefix: '/jainpandithyderabad/',
}

export default nextConfig;
