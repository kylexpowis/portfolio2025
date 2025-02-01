/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "open.cruip.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ucarecdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*.pdf", // Ensure PDFs are served with the correct headers
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: "inline", // Open in browser instead of downloading
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push(
      { test: /\.svg$/, use: ["@svgr/webpack"] },
      {
        test: /\.pdf$/,
        type: "asset/resource", // Ensures PDFs are correctly handled if imported
      }
    );
    return config;
  },
};

module.exports = nextConfig;
