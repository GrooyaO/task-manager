import express, { NextFunction, Request, Response } from 'express'
import { Task } from '../models/task'
import mongoose from 'mongoose'
import { CustomError } from '../errors/customError'

export default function defineRoutes(app: express.Application) {
  const router = express.Router()

  //GET - retrieve tasks
  router.get(
    '/tasks',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const tasks = await Task.find()
        return res.json(tasks)
      } catch (error) {
        next(error)
      }
    }
  )

  // POST - create new task
  router.post(
    '/tasks',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const newTask = new Task({
          title: req.body.title,
          description: req.body.description,
        })
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
      } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          next(new CustomError(400, 'Validation Error', error.message))
        } else {
          console.error('Unexpected error:', error)
          next(error)
        }
      }
    }
  )

  // DELETE - delete task
  router.delete(
    '/tasks/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        if (!deletedTask) {
          return res.status(404).json({ message: 'Task not found' })
        }
        res
          .status(200)
          .json({ success: true, message: 'Task deleted successfully' })
      } catch (error) {
        next(error)
      }
    }
  )

  // PUT - update a task
  router.put('/tasks/:id', async (req: Request, res: Response) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      )
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' })
      }
      res.json(updatedTask)
    } catch (error) {
      console.error('Error updating task:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  })
  app.use(router)
}
