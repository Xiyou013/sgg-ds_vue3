const Mock = require("mockjs")

let listMenu = [
    { id: 1, name: '服装城', path: '' },
    { id: 2, name: '美妆馆', path: '' },
    { id: 3, name: '米游铺超市', path: '' },
    { id: 4, name: '全球购', path: '' },
    { id: 5, name: '闪购', path: '' },
    { id: 6, name: '团购', path: '' },
    { id: 7, name: '有趣', path: '' },
    { id: 8, name: '秒杀', path: '' },
]

let leftList = [
    { id: 1, name: '图书、音像、电子书刊', path: '' },
    { id: 2, name: '手机', path: '' },
    { id: 3, name: '家用电器', path: '' },
    { id: 4, name: '数码', path: '' },
    { id: 5, name: '家居家装', path: '' },
    { id: 6, name: '电脑办公', path: '' },
    { id: 7, name: '厨具', path: '' },
    { id: 8, name: '个护化妆', path: '' },
    { id: 9, name: '服饰内衣', path: '' },
    { id: 10, name: '钟表', path: '' },
    { id: 11, name: '鞋靴', path: '' },
    { id: 12, name: '母婴', path: '' },
    { id: 13, name: '礼品箱包', path: '' },
    { id: 14, name: '食品饮料、保健食品', path: '' },
    { id: 15, name: '珠宝', path: '' },
    { id: 16, name: '汽车用品', path: '' },
]

let topList = [
    { id: 1, type: '特惠', name: '备战开学季 全名半价', path: '' },
    { id: 1, type: '公告', name: '备战开学季 全名半价', path: '' },
    { id: 1, type: '特惠', name: '备战开学季 全名半价', path: '' },
    { id: 1, type: '特惠', name: '备战开学季 全名半价 备战开学季 全名半价', path: '' },
]

let imageList = [
    { id: 1, name: '品牌', icon: require('@/assets/svg/brand-icon.svg'), path: '' },
    { id: 2, name: '服装', icon: require('@/assets/svg/clothing-icon.svg'), path: '' },
    { id: 3, name: '云美业', icon: require('@/assets/svg/cloud-beauty-industry-icon.svg'), path: '' },
    { id: 4, name: '云连锁', icon: require('@/assets/svg/cloud-chain-icon.svg'), path: '' },
    { id: 5, name: '云分销', icon: require('@/assets/svg/cloud-distribution-icon.svg'), path: '' },
    { id: 6, name: '云订货', icon: require('@/assets/svg/cloud-order-icon.svg'), path: '' },
    { id: 7, name: '云零售', icon: require('@/assets/svg/cloud-retail-icon.svg'), path: '' },
    { id: 8, name: '同城异业', icon: require('@/assets/svg/different-industry-icon.svg'), path: '' },
    { id: 9, name: '快消品', icon: require('@/assets/svg/FMCG-icon.svg'), path: '' },
    { id: 10, name: '餐饮', icon: require('@/assets/svg/food-icon.svg'), path: '' },
    { id: 11, name: '生鲜行业', icon: require('@/assets/svg/fresh-icon.svg'), path: '' },
    { id: 12, name: '母婴', icon: require('@/assets/svg/mom-infant-icom.svg'), path: '' },
]

const getListMenu = Mock.mock('/api/home/listMenu', 'get', () => {
    return listMenu
})

const getLeftList = Mock.mock('/api/home/leftList', 'get', () => {
    return leftList
})

const getTopList = Mock.mock('/api/home/topList', 'get', () => {
    return topList
})

const getImageList = Mock.mock('/api/home/imageList', 'get', () => {
    return imageList
})

export default {
    getListMenu,
    getLeftList,
    getTopList,
    getImageList,
}