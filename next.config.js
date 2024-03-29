module.exports = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['media.graphcms.com', 'api.cosmo-pk.live'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.cosmo-pk.live',
        pathname: '/uploads/**',
      },
    ],
  },
  env: {
    API_URL: "http://api.cosmo-pk.live/api",
    URL: "http://api.cosmo-pk.live",
  },
}
