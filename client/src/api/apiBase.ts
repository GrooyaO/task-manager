import axios from 'axios'

//base endpoint
const API_BASE_ENDPOINT = process.env.SERVER_PORT ?? 8000

export const axiosInstance = axios.create({
  baseURL: `http://localhost:${API_BASE_ENDPOINT}`,
})
