import { Express, json } from 'express'
// @ts-ignore
import compression from 'compression'

const withMiddlewares = (app: Express) => {
    app.use(json({ limit: '1mb' }))
    app.use(compression())

    return app
}

export { withMiddlewares }
