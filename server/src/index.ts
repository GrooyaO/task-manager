import express, { Application } from 'express'
import defineRoutes from './routes'
import { dbConnection } from './dataAccess'

//initialize express app
const app: Application = express()
const port = 8000
//parsing JSON
app.use(express.json())
//add routes to the app
defineRoutes(app)

// Connect to MongoDB
dbConnection()

app.listen(port, () => {
  console.log(`Node server running at: http://localhost:${port}`)
})
