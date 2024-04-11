import axios from 'axios'

//If you want to change .env on run time. make the runtime configuration here
const CoreApiUrl = process.env.NEXT_PUBLIC_CORE_API
const AuthApiUrl = process.env.NEXT_PUBLIC_AUTH_API

export const CoreAPI = axios.create({ baseURL: `${CoreApiUrl}` })
export const AuthAPI = axios.create({ baseURL: `${AuthApiUrl}` })
