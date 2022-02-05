import axios from "axios";

const http = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

http.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token')
  }
  return config
})

http.interceptors.response.use(res => {
  return res.data
}, error => {
  return Promise.reject(new Error('faile'))
})
export default http