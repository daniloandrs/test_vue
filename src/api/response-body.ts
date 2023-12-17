import type { AxiosResponse } from 'axios'

export type ResponseBody<T> = AxiosResponse<{
  status: number
  responseMessage: string
  data: T
}>
