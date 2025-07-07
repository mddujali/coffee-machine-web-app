import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3201/api',
})

export default api
