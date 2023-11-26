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
    url: `/tasks/${id}`,
  })
}

async function updateTask(id: string, task: Task) {
  const response = await axiosInstance({
    method: 'PUT',
    url: `/tasks/${id}`,
    data: task,
  })

  return response.data
}

export { apiListTasks, apiCreateTask, deleteTask, updateTask }
