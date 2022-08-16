const Mock = require("mockjs")

let footerListOne = [
    {
        id: 1, name: '购物指南', list: [
            { id: 11, name: '购物流程', path: '' },
            { id: 12, name: '会员介绍', path: '' },
            { id: 13, name: '生活旅行/团购', path: '' },
            { id: 14, name: '常见问题', path: '' },
            { id: 15, name: '购物指南', path: '' },
        ]
    },
    {
        id: 2, name: '配送方式', list: [
            { id: 21, name: '上门自提', path: '' },
            { id: 22, name: '211限时达', path: '' },
            { id: 23, name: '配送服务查询', path: '' },
            { id: 24, name: '配送费收取标准', path: '' },
            { id: 25, name: '海外配送', path: '' },
        ]
    },
    {
        id: 3, name: '支付方式', list: [
            { id: 31, name: '货到付款', path: '' },
            { id: 32, name: '在线支付', path: '' },
            { id: 33, name: '分期付款', path: '' },
            { id: 34, name: '邮局汇款', path: '' },
            { id: 35, name: '公司转账', path: '' },
        ]
    },
    {
        id: 4, name: '售后服务', list: [
            { id: 41, name: '售后政策', path: '' },
            { id: 42, name: '价格保护', path: '' },
            { id: 43, name: '退款说明', path: '' },
            { id: 44, name: '返修/退换货', path: '' },
            { id: 45, name: '取消订单', path: '' },
        ]
    },
    {
        id: 5, name: '特色服务', list: [
            { id: 51, name: '夺宝岛', path: '' },
            { id: 52, name: 'DIY装机', path: '' },
            { id: 53, name: '延保服务', path: '' },
            { id: 54, name: '会员卡', path: '' },
            { id: 55, name: '通信服务', path: '' },
        ]
    },
    {
        id: 6, name: '帮助中心', list: [
            { id: 61, name: '帮助二维码', imageurl: '/src/assets/qrcode-logo.png' },
        ]
    },
]

let footerListTwo = {
    list: [
        { id: 1, name: '关于我们', path: '' },
        { id: 2, name: '联系我们', path: '' },
        { id: 3, name: '商家入驻', path: '' },
        { id: 4, name: '营销中心', path: '' },
        { id: 5, name: '友情链接', path: '' },
    ],
    address: '这是一个城市的地址 不用管他具体是什么 我就是占个位置',
    approve: '京ICP备 132456789 号'
}

let imageurl = '/src/assets/qrcode-logo.png'

const getFooterList = Mock.mock('/api/footer/list', 'get', () => {
    return {
        footerListOne: footerListOne,
        footerListTwo: footerListTwo,
        imageurl: imageurl
    }
})

export default {
    getFooterList
}