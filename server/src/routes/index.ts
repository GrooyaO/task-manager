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

  // DELETE - delete task
  router.delete('/task/:id', async (req: Request, res: Response) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id)
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' })
      }
      res
        .status(200)
        .json({ success: true, message: 'Task deleted successfully' })
    } catch (error) {
      console.error('Error deleting task:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  })

  app.use(router)
}
