import mongoose from 'mongoose'
import { generateTasks } from '../seeds'
import { Task } from '../models/task'

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/'
    )

    console.log('MongoDB connection established')
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
