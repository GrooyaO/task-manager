import mongoose from 'mongoose'
import { generateTasks } from '../seeds'
import { Task } from '../models/task'

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/task-db')
    console.log('MongoDB connection established')

    // Check if the data has already been seeded
    const existingTasks = await Task.countDocuments()
    if (existingTasks === 0) {
      const tasks = generateTasks(5)
      await Task.insertMany(tasks)
      console.log(`${tasks.length} tasks have been inserted into the database.`)
    } else {
      console.log('Database already seeded.')
    }
  } catch (error) {
    console.error('Failed to connect to MongoDB', error)
    process.exit(1)
  }
}

export { dbConnection }
