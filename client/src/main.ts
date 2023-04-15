import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// main.ts
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import Logger from 'console-log-advanced'

export const logger = new Logger({isDevelopMode: true})
const app = createApp(App)


app.use(createPinia())
app.use(router)
app.mount('#app')
