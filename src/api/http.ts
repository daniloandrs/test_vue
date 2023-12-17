import axios from 'axios'
import { HttpErrorHandler } from './http-error-handler'
import { ObjectPathResolver } from '@/util/object-path-resolver'
import { useStore } from '@/app/store'
const store = useStore()

const HTTP = axios.create({
  baseURL: "http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com",
  headers: { 
    'Content-type': 'application/json',
    "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI"
  }
})

const errorHandler = new HttpErrorHandler()


HTTP.interceptors.response.use(
  (response) => {
    const success = ObjectPathResolver.getValue(response.data, 'success')
    if (success === false) {
      const message = ObjectPathResolver.getValue(response.data, 'message')
      throw new Error((message as string) ?? 'Ocurrió un error inesperado')
    }
    return response
  },
  (error) => errorHandler.axios(error)
)

export { HTTP }
