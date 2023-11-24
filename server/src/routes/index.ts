import express, { Request, Response } from 'express'
import { Task } from '../models/task'

export default function defineRoutes(app: express.Application) {
  const router = express.Router()
  //GET tasks
  router.get('/tasks', async (req: Request, res: Response) => {
    const tasks = await Task.find()
    console.log(res.json(tasks))
    return res.json(tasks)
  })

  app.use(router)
}
