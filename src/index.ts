import express from 'express'
import { withMiddlewares } from './middlewares'
import { pool } from './db/driver'

const port =  process.env.PORT || 11000

const app = withMiddlewares(express())
app.get('/', (request, response, next) => {
    (async () => {
        const client = await pool.connect()
        const { rows } = await client.query('select * from logs')
        response.send({
            rows
        })
    })().catch(next)
})
app.listen(port, () => console.log(`listening on port ${port}`))
