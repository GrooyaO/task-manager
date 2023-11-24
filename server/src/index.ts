import express, { Application } from 'express'
import defineRoutes from './routes'
import { dbConnection } from './dataAccess'
import rateLimiter from './middleware/rateLimiter'

//initialize express app
const app: Application = express()
const port = 8000
//parsing JSON
app.use(express.json())
//add routes to the app
defineRoutes(app)
//add rate limiter to app, this could be applied per route with different setup
rateLimiter(app)

// Connect to MongoDB
dbConnection()

app.listen(port, () => {
  console.log(`Node server running at: http://localhost:${port}`)
})
