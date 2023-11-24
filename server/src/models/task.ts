import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
})
//set schemas default _id to id for easier/cleaner retrieval
taskSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id.toHexString()
    delete ret._id
    return ret
  },
})
const Task = mongoose.model('task', taskSchema, 'task')

export { Task }
