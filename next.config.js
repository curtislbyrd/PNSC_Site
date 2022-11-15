// next.config.js
module.exports = {
    eslint: {
    ignoreDuringBuilds: true,
    },
    typescript: {
    ignoreBuildErrors: true,
  },
    reactStrictMode: true,
    webpack(config) {
    config.cache = true,
    config.infrastructureLogging = { level: 'info' }
    return config;
  },
  images: {
    domains: ['arweave.net','nftstorage.link'],
  },
}

