// import { config } from '@config/config'
// import formatDate from '@lib/formatDate'
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'

// const SiteUrl = ({ path }) => {
//     const getDate = () => formatDate(new Date())
//     return (
//         <url>
//             <loc>
//                 {config.appUrl}
//                 {path.substr(1)}
//             </loc>
//             <lastmod>{getDate()}</lastmod>
//         </url>
//     )
// }

// const Sitemap = () => {
//     const allPaths = ['/']
//     return (
//         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//             {allPaths.map((path, index) => (
//                 <SiteUrl key={index} path={path} />
//             ))}
//         </urlset>
//     )
// }
// @TODO: fix sitemap, use this: https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js
// eslint-disable-next-line @typescript-eslint/no-empty-function
const Sitemap = () => {}

export const getServerSideProps = ({ res }) => {
    // { req, res, query }
    if (res.write) {
        res.setHeader('Content-Type', 'text/xml')
        res.write('')
        res.end()
    }
    return { props: {} }
}

export default Sitemap
