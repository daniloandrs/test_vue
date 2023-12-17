import { createApp } from 'vue'
import App from './app/App.vue'
import router from './app/router'
import { es } from 'vuetify/locale'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './assets/styles/main.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'


const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'es',
    messages: { es }
  }
})
const pinia = createPinia()

const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
