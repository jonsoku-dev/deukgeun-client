import axios from 'axios'

import { Configuration, IndexControllerApiFactory, LoginEndpointApiFactory } from '../../__generated__/typescript-axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
})

axios.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    if (axios.isCancel(error)) {
      return Promise.resolve()
    }
    console.error(error)
    return Promise.reject(error)
  }
)

export const indexApi = IndexControllerApiFactory({} as Configuration, '', axiosInstance)
export const loginApi = LoginEndpointApiFactory({} as Configuration, '', axiosInstance)
