const withOffline = require('next-offline')

const dev = process.env.NODE_ENV !== 'production'
console.log({
    distDir: dev?".next":'../../dist/server/next'
    })
const nextConfig = {
    transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache

    // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we turn on the SW in dev mode so that we can actually test it
    generateInDevMode: true,
    serverless: true,
    distDir: dev?".next":'../../dist/server/next',
    swcMinify: true,
    // experimental: {
    //     outputStandalone: true
    // },
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'https-calls',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200]
                    }
                }
            }
        ]
    }

    // // For <Icon /> support:
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //   config.module.rules.push({
    //     test: /\.svg$/,
    //     loader: 'raw-loader'
    //   })
    //   return config
    // }
}

module.exports = withOffline(nextConfig)
