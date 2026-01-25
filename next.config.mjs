/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com/',
      },
      {
        protocol: 'https',
        hostname: 'fakeapi.platzi.com/',
      }
    ],
  },
};

export default nextConfig;