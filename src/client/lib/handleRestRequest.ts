/** handleRestRequest(async () => {...}, { req, res }) */
export const handleRestRequest = async (actionFunction, { req, res }) => {
    try {
        await actionFunction(req, res)
    } catch (error) {
        // eslint-disable-next-line security-node/detect-insecure-randomness
        const reference = `E${Math.round(1000 * Math.random())}`
        const { message, status = 400 } = error
        // eslint-disable-next-line no-console
        console.error(`[${reference}] Error ${status}: “${message}” –`, error)
        if (!Number.isNaN(status)) {
            res.status(status)
        }
        res.json({ status, message, reference })
    }
}

// From: https://levelup.gitconnected.com/the-definite-guide-to-handling-errors-gracefully-in-javascript-58424d9c60e6
/** throw new CustomError(`Account not found`, 404) */
export const CustomError = class CustomError extends Error {
    status: any
    constructor(message, status) {
        super(message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
        this.status = status
    }
}
