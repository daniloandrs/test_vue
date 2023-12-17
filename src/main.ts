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

const primaryBlueColor = '#004481'
const primaryActiveColor = '#5bbeff'
const primaryNavy = '#043263'
const secondaryBlackColor = '#121212'
const primaryAqua = '#2dcccd'
const secondaryGreyColor = '#666'
const redColor = '#da3851'
const greenColor = '#48ae64'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'bbva',
    themes: {
      bbva: {
        dark: false,
        colors: {
          primary: primaryBlueColor,
          'primary-lighten-1': primaryActiveColor,
          secondary: secondaryBlackColor,
          'secondary-lighten-1': secondaryGreyColor,
          error: redColor,
          success: greenColor,
          info: primaryAqua,
          warning: primaryNavy
        }
        // typography: {
        //   fontFamily: fontFamily
        // }
      }
    }
  },
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
