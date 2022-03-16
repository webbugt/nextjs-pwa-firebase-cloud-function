import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import fs from 'fs'
import next from 'next'

import nextConfig from './next.config'

const dev = process.env.NODE_ENV !== 'production'

/**
 * Look ma, it's cp -R.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
var copyRecursiveSync = function (src, dest) {
    try {
        const exists = fs.existsSync(src)
        const stats = exists && fs.lstatSync(src)
        const isDirectory = exists && stats.isDirectory()
        if (isDirectory) {
            fs.mkdirSync(dest)
            fs.readdirSync(src).forEach(childItemName => {
                copyRecursiveSync(`${src}/${childItemName}`, `${dest}/${childItemName}`)
            })
        } else {
            fs.copyFileSync(src, dest)
        }
    } catch (error) {
        console.error(error)
    }
}

admin.initializeApp()
if (!dev) {
    copyRecursiveSync('/workspace/next', '/tmp/next')
    console.log(fs.readdirSync('/tmp'))
    // console.log(fs.readdirSync("/workspace/next"))
}

const app = next({
    dev,
    // the absolute directory from the package.json file that initialises this module
    // IE: the absolute path from the root of the Cloud Function
    conf: {
        ...nextConfig,
        distDir: dev ? 'next' : '../tmp/next'
    }
})
const handle = app.getRequestHandler()

export const nextjs = functions.https // .region('europe-west1') // TODO: re-enable once firebase hosting is available in europe-west region
    .onRequest((request, response) => {
        console.log(fs.readdirSync('/tmp'))
        // log the page.js file or resource being requested
        console.log(`File: ${request.originalUrl}`)
        return app
            .prepare()
            .then(() => handle(request, response))
            .catch(console.error)
    })
