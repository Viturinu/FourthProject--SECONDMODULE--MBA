import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => { //interceptor serve para customizar os dados de uma requisição (config é corpo, cabeçalho, etc / podemos de alguma maneira customizar tudo antes de ser feita a requisição)
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}
