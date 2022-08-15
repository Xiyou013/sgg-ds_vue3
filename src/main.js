import { createApp } from 'vue'
import App from './App.vue'

// 导入mock
require('./mock/index')

const app = createApp(App)

app.mount('#app')
