import express from 'express'
import { notFoundHandler } from '@commons/failure/notFoundHandler'
import failureMiddleware from '@commons/failure/failureMiddleware'
import { router as regulationsRouter } from './regulations'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/regulations', regulationsRouter)

app.use(notFoundHandler)
app.use(failureMiddleware)

export const start = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

export default app
