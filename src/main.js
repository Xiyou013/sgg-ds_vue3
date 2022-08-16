import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import App from './App.vue'

// 导入mock
require('./mock/index')

const app = createApp(App)

app.use(ElementPlus)
app.use(router).use(store)
app.mount('#app')
