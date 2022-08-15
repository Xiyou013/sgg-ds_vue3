// import axios from 'axios';
import axios from '@/axios/http';


// 获取全部数据
export function getData() {
    // return axios.get('/test')
    return axios({
        url: '/test',
        method: 'get'
    })
}

export function getOneData(data) {
    // return axios.post('/test/getoneData', { data: data })
    return axios({ url: '/test/getoneData', method: 'post', data: data })
}