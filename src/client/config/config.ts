import packageJson from '@package'
import manifest from '@public/manifest.json'

const serverPort = process.env.PORT || 3004

export const completeConfig = {
    default: {
        serverPort,
        appSlug: packageJson.name,
        appVersion: packageJson.version,
        appUrl: process.env.NEXT_PUBLIC_APP_URL,
        appName: manifest.name,
        appTagline: manifest.description,
        appDescription: `${manifest.name} – ${manifest.description}`,
        locale: 'en_US', // sv_SE
        googleAnalyticsId: 'UA-XXXXXXX-X',
        googleSiteVerification: false
    },

    development: {
        appUrl: `http://localhost:${serverPort}/`,
        googleAnalyticsId: null
    },

    production: {}
}

export const config = { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] }
