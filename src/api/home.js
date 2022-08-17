import axios from '@/axios/http';

export function getListMenu() {
    return axios({
        url: '/api/home/listMenu',
        method: 'get'
    })
}

export function getLeftList() {
    return axios({
        url: '/api/home/leftList',
        method: 'get'
    })
}

export function getTopList() {
    return axios({
        url: '/api/home/topList',
        method: 'get'
    })
}

export function getImageList() {
    return axios({
        url: '/api/home/imageList',
        method: 'get'
    })
}