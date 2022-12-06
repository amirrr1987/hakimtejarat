import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import i18n from "@/i18n";
import 'ant-design-vue/dist/antd.less';
import 'virtual:windi.css'
import 'virtual:windi-devtools'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
