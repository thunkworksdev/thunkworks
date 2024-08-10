import remarkSlug from 'remark-slug';
import createMdx from '@next/mdx';

const withMDX = createMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: [
    '@thunkworks/core',
    '@thunkworks/hooks',
    '@thunkworks/style',
    '@thunkworks/types',
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          'builtin-modules': false,
          worker_threads: false,
        },
      };
    }

    return config;
  },
};

export default withMDX(nextConfig);