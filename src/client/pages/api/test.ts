import { CustomError, handleRestRequest } from '@lib/handleRestRequest'
// import { config } from 'config/config'

// const DOMAINS_WHITELIST = [`http://localhost:${config.serverPort}`, config.appUrl.slice(0, -1)]

const returnSomething = async (req, res) => {
    await Promise.resolve(true)
    // if (!DOMAINS_WHITELIST.includes(req.headers.origin)) throw new CustomError('Request not authorized', 401, { origin: req.headers.origin })
    const results = 'Hello World'
    res.statusCode = 200
    res.json({ results })
}

export default (req, res) =>
    handleRestRequest(
        async (request, response) => {
            switch (request.method) {
                case 'GET':
                    await returnSomething(request, response)
                    break
                default:
                    throw new CustomError('Method not allowed', 405)
            }
        },
        { req, res }
    )
