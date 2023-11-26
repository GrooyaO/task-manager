import { Task } from '../types'
import { axiosInstance } from './apiBase'

async function apiListTasks() {
  try {
    const response = await axiosInstance({
      method: 'GET',
      url: '/tasks',
    })

    return response.data
  } catch (error: any) {
    if (error.response) {
      // Handle response error from Axios
      throw new Error(error.response.data)
    } else {
      // Handle non-response error
      throw new Error(error.message)
    }
  }
}

async function apiCreateTask(task: Task) {
  try {
    const response = await axiosInstance({
      method: 'POST',
      url: '/tasks',
      data: task,
    })

    return response.data
  } catch (error: any) {
    if (error.response) {
      // Handle response error from Axios
      throw new Error(error.response.data)
    } else {
      // Handle non-response error
      throw new Error(error.message)
    }
  }
}

async function deleteTask(id: string) {
  try {
    await axiosInstance({
      method: 'DELETE',
      url: `/tasks/${id}`,
    })
  } catch (error: any) {
    if (error.response) {
      // Handle response error from Axios
      throw new Error(error.response.data)
    } else {
      // Handle non-response error
      throw new Error(error.message)
    }
  }
}

async function updateTask(id: string, task: Task) {
  try {
    const response = await axiosInstance({
      method: 'PUT',
      url: `/tasks/${id}`,
      data: task,
    })

    return response.data
  } catch (error: any) {
    if (error.response) {
      // Handle response error from Axios
      throw new Error(error.response.data)
    } else {
      // Handle non-response error
      throw new Error(error.message)
    }
  }
}

export { apiListTasks, apiCreateTask, deleteTask, updateTask }
