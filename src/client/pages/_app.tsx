// import { googlePageview } from '@components/page/GoogleAnalytics'
// import Header from 'components/page/Header'
import Notifications from '@components/page/Notifications'
// import { config } from 'config/config'
import PageHead from '@components/page/PageHead'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import type { AppProps } from 'next/app'

// Import global CSS files here
import 'aether-css-framework/dist/aether.min.css'
import '@public/app.css'

Router.events.on('routeChangeComplete', console.log)

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps, router }: AppProps) => {
    // props (Server + Client): Component, err, pageProps, router
    const { title, description } = pageProps
    return (
        <>
            <PageHead title={title} description={description} path={router.asPath} />
         

            <main>
                <Component {...pageProps} {...router} />
            </main>

            <Link href="/">
                <a className="button circle-menu-button">
                    <img src="/icons/menu.svg" />
                </a>
            </Link>
            <button className="circle-menu-button right">
                <img src="/icons/person.svg" />
            </button>
            <button className="circle-menu-button bottom right">
                <img src="/icons/help.svg" />
            </button>

            <Notifications />
        </>
    )
}
export default MyApp
