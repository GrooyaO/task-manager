import mongoose from 'mongoose'
import { Task } from '../models/task'
import { generateTasks } from '../seeds'

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://root:example@mongodb:27017/mydatabase'
    )
    console.log('MongoDB connection established')

    // Check if the data has already been seeded if not run seeder
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
