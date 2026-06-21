/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      canvas: { browser: './empty-module.js' },
    },
  },
};

export default nextConfig;
