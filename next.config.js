/** @type {import('next').NextConfig} */

const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages({
  reactStrictMode: true,
  swcMinify: true,
  aders: () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
      ],
    },
  ],
});
