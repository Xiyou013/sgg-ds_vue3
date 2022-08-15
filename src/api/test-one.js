// import axios from 'axios';
import axios from '@/axios/http-one';


// 获取全部数据
export function getData() {
    // return axios.get('/login')
    return axios.get('/test')
}

export function getOneData(data) {
    return axios.post('/test/getoneData', { data: data })
}