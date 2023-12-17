import { AxiosError } from 'axios'
import { ObjectPathResolver } from '../util/object-path-resolver'
import { useRouter } from 'vue-router';
import router from '../app/router';

export class HttpErrorHandler {

  router =  useRouter()
  axios(error: any): void {
    console.log({error})
    if (error instanceof AxiosError) {
      const response = error.response
      if (response === undefined) {
        throw new Error(`${error.name}: ${error.message}`)
      }

      let message = response.statusText
      if(response.status === 401) {
        router.push({
          name:'Unauthorized'
        })
      }
      if (response.status === 404) {
        const data = response.data
        const errorMessage = ObjectPathResolver.getValue(data, 'error.message')
        if (errorMessage && typeof errorMessage === 'string') {
          message = errorMessage
        }
      } else if (response.status === 500) {
        const errorDetails = ObjectPathResolver.getValue(
          response.data,
          'error.details'
        )
        if (Array.isArray(errorDetails)) {
          message = this.#getMessages(errorDetails)
        }
      }
      throw new Error(message)
    }

    console.error(error)
    throw new Error(`Ocurrió un error inesperado`)
  }

  #getMessages(details: any[]): string {
    let html = ''
    details.forEach(function (obj) {
      if (obj === null || typeof obj !== 'object') {
        html += obj + '<br>'
        return
      }
      for (const key in obj) {
        const propertyName = key.split('.')[1]
        const message = obj[key].message
        html += propertyName + ': ' + message + '<br>'
      }
    })
    return html
  }
}
