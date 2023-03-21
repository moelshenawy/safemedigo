/! REMOVE THE Ionc configation!/;

const withTm = require("next-transpile-modules")([
  "@ionic/react",
  "@ionic/core",
  "@stencil/core",
  "ionicons",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  distDir: "build",
};

module.exports = withTm(nextConfig);
