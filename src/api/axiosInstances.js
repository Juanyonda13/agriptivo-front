import axios from 'axios'
import getDecryptedToken from '../helpers/cookie'

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getDecryptedToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance