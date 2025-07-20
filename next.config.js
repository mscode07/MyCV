/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.cache = false; // Disable webpack cache for server builds
      }
      return config;
    },
  };
  module.exports = nextConfig;