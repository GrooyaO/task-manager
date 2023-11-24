import express, { Application } from 'express'

//initialize express app
const app: Application = express()
const port = 8000
//parsing JSON
app.use(express.json())

app.listen(port, () => {
  console.log(`Node server running at: http://localhost:${port}`)
})
