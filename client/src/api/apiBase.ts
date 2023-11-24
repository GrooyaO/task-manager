import axios from 'axios'

//base endpoint
const API_BASE_ENDPOINT = 'http://localhost:8000/'

export const axiosInstance = axios.create({
  baseURL: API_BASE_ENDPOINT,
})
