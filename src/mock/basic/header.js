const Mock = require("mockjs")

let navList = [
    { id: 1, name: '我的订单', path: '' },
    { id: 2, name: '我的购物车', path: '' },
    { id: 3, name: '我的主页', path: '' },
    { id: 4, name: '会员信息', path: '' },
    { id: 5, name: '企业采购', path: '' },
    { id: 6, name: '关注网站', path: '' },
    { id: 7, name: '合作招商', path: '' },
    { id: 8, name: '商家后台', path: '' },
]

// 获取导航目录列表
const getNavList = Mock.mock('/api/header/list', 'get', () => {
    return navList
})

export default {
    getNavList
}