import express from 'express'
import { withMiddlewares } from './middlewares'
const port =  process.env.PORT || 11000

const app = withMiddlewares(express())
app.get('/', (request, response, next) => {
    (async () => {
        response.send({
            title: 'api',
            body: process.env.TEXT,
        })
    })().catch(next)
})
app.listen(port, () => console.log(`listening on port ${port}`))
