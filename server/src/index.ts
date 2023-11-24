import express, { Application } from 'express'
import defineRoutes from './routes'
import { dbConnection } from './dataAccess'
import rateLimiter from './middleware/rateLimiter'
import cors from 'cors'

// Initialize express app
const app: Application = express()
const port = 8000

// Enable CORS for all routes
app.use(cors())

// Parsing JSON
app.use(express.json())

// Add rate limiter to app, this could be applied per route with different setup
rateLimiter(app)

// Add routes to the app
defineRoutes(app)

// Connect to MongoDB and seed data if DB is not seeded already
dbConnection()

app.listen(port, () => {
  console.log(`Node server running at: http://localhost:${port}`)
})
