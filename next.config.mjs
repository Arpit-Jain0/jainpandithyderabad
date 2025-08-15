/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  images: {
    unoptimized: true, // important for GitHub Pages
  },
  basePath: '/jainpandithyderabad', // repo name
  assetPrefix: '/jainpandithyderabad/',
};

module.exports = nextConfig;
