import { config } from '@config/config'
import isDevelopment from '@lib/isDevelopment'

/* options: { 'page_title' : 'homepage' } */
// See https://developers.google.com/analytics/devguides/collection/gtagjs
export const googlePageview = (path: string, options?: any) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const completeOptions = { ...options, page_path: path } // 'page_title' : 'homepage'
    if (config.googleAnalyticsId) {
        // @TODO: fix google analytics implementation
        // window.gtag('config', config.googleAnalyticsId, completeOptions)
    }
    if (isDevelopment()) {
        // eslint-disable-next-line security-node/detect-crlf
        console.log('Google pageview:', { path, options: completeOptions })
    }
}

// options: { 'event_category' : 'bbb', 'event_label' : 'ccc' }
// See https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const googleEvent = (action, options?: any) => {
    if (config.googleAnalyticsId) {
        // window.gtag('event', action, options)
    }
    if (isDevelopment()) {
        // eslint-disable-next-line security-node/detect-crlf
        console.log('Google event:', { action, options })
    }
}
