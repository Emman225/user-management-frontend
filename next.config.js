/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
      },
      {
        protocol: 'https',
        hostname: 'api.usermanagement.ecoletestpro.com',
      },
    ],
  },
};

module.exports = nextConfig;

