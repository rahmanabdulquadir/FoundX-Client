/** @type {import('next').NextConfig} */

const nextConfig= {
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
