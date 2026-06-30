/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      canvas: { browser: './empty-module.js' },
    },
  },
  async redirects() {
    return [
      {
        source: '/Color_Quest_Case_Study',
        destination: '/Colour_Quest_Case_Study',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
