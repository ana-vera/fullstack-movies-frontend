import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/users'

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token ? `JWT ${token}` : ''
  }
  return config
},
(error) => {
  return Promise.reject(error)
}
)

const registerUser = (data) => axios.post(`${BASE_URL}/register`, data)

const loginUser = (data) => axios.post(`${BASE_URL}/login`, data)

const getSingleUser = (id) => axios.get(`${BASE_URL}/users/${id}`)

export { registerUser, loginUser, getSingleUser }
