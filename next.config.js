/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/privacy-policy",
        destination: "/html/privacy-policy.html",
      },
    ];
  },
};

module.exports = nextConfig;
