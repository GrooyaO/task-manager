import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/task-db')

    console.log('MongoDB connection established')
  } catch (error) {
    console.error('Failed to connect to MongoDB', error)
  }
}

export { dbConnection }
