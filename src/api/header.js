import axios from '@/axios/http';

export function getNavList() {
    return axios({
        url: '/api/header/list',
        method: 'get'
    })
}