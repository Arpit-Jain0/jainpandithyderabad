/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/jainpandithyderabad' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jainpandithyderabad/' : '',
};

export default nextConfig;