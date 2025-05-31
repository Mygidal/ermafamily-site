/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false, // ❌ Скрива иконата "N"
  },
  async rewrites() {
    return [
      {
        source: "/tmp/:path*",
        destination: "/tmp/:path*",
      },
    ];
  },
};

export default nextConfig;
