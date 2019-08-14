import axios from 'axios'

const service = axios.create({
  baseURL: 'https://localhost:5001',
  timeout: 5000
})

export default service
