import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
// import router from '../router/index.js'
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
// start: 进度条开始  done：进度条结束

// console.log('nprogress::::', nprogress);


let loading        //定义loading变量

function startLoading() {    //使用Element loading-start 方法
    loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading?.close()
}

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
    // 加载
    startLoading()
    nprogress.start()
    if (localStorage.eleToken)
        config.headers.Authorization = localStorage.eleToken
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
    endLoading()
    nprogress.done()
    // return response.data
    return response
}, error => {
    // 错误提醒
    endLoading()
    ElMessage.error(error.response.data)

    const { status } = error.response
    if (status == 401) {
        ElMessage.error('token值无效，请重新登录')
        // 清除token
        localStorage.removeItem('eleToken')

        // 页面跳转
        // router.push('/login')
    }

    return Promise.reject(error)
})

export default axios