/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  images: {
    domains: ["admin.itqaneducation.com", "picsum.photos", "img.freeflagicons.com"]
  }
  // experimental: {
  //   // Required: for next 13
  //   appDir: true
  // }
};

module.exports = nextConfig;
