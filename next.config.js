// next.config.js
module.exports = {
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
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

