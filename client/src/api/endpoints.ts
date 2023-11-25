import { Task } from '../types'
import { axiosInstance } from './apiBase'

async function apiListTasks() {
  const response = await axiosInstance({
    method: 'GET',
    url: '/tasks',
  })

  return response.data
}

async function apiCreateTask(task: Task) {
  const response = await axiosInstance({
    method: 'POST',
    url: '/tasks',
    data: task,
  })

  return response.data
}

async function deleteTask(id: string) {
  await axiosInstance({
    method: 'DELETE',
    url: `/task/${id}`,
  })
}

export { apiListTasks, apiCreateTask, deleteTask }
