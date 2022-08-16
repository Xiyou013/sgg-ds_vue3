import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/homeIndex.vue'

const routerArr = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routerArr
})

export default router