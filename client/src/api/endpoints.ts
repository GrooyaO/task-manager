import { axiosInstance } from './apiBase'

async function apiListTasks() {
  const response = await axiosInstance({
    method: 'GET',
    url: '/tasks',
  })

  return response.data
}

export { apiListTasks }
