import axios from '@/axios/http';

export function getFooterList() {
    return axios({
        url: '/api/footer/list',
        method: 'get'
    })
}