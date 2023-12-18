import { createApp } from 'vue'
import App from './app/App.vue'
import router from './app/router'
import './assets/styles/main.css'
import '@jamescoyle/svg-icon'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
