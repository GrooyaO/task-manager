import express, { Request, Response } from 'express'
import { Task } from '../models/task'
import mongoose from 'mongoose'

export default function defineRoutes(app: express.Application) {
  const router = express.Router()
  //GET - retrieve tasks
  router.get('/tasks', async (req: Request, res: Response) => {
    const tasks = await Task.find()
    console.log(res.json(tasks))
    return res.json(tasks)
  })

  //POST - create new task
  router.post('/tasks', async (req: Request, res: Response) => {
    try {
      const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
      })
      const savedTask = await newTask.save()
      res.status(201).json(savedTask)
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        return res
          .status(400)
          .json({ message: 'Validation Error', details: error.message })
      }
      console.error('Unexpected error:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  })

  app.use(router)
}
