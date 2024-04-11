import axios from 'axios'

//If you want to change .env on run time. make the runtime configuration here
const CoreApiUrl = process.env.CORE_API
const AuthApiUrl = process.env.AUTH_API

export const CoreAPI = axios.create({ baseURL: `${CoreApiUrl}` })
export const AuthAPI = axios.create({ baseURL: 'http://localhost:3000/api/' })
