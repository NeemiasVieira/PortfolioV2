import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dnsc6qj4i/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/w40/**',
      },
    ],
  },
};

export default nextConfig;
