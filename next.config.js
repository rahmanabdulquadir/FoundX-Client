/** @type {import('next').NextConfig} */

module.exports = {
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
