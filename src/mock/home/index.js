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

let fineList = [
    { id: 1, name: '限定礼盒', price: '128', path: '', img: require('@/assets/todayFine/fine-thing03.png') },
    { id: 2, name: '可莉手办', price: '388', path: '', img: require('@/assets/todayFine/fine-thing02.png') },
]

let sellList = [
    { id: 1, tag: '【原神】', name: '2022好运福袋388元档 Genshin', price: '388', path: '', img: require('@/assets/sellFine/lucky-bag.png'), newFlag: true },
    { id: 2, tag: '【原神】', name: '命定之日系列套装 Genshin', price: '58', path: '', img: require('@/assets/sellFine/postcards.png'), newFlag: true },
    { id: 3, tag: '【原神】', name: '雷电将军印象服饰系列 帆布包 Genshin', price: '119', path: '', img: require('@/assets/sellFine/canvas-bag01.png'), newFlag: true },
    { id: 4, tag: '【原神】', name: '宵宫印象服饰系列 帆布包 Genshin', price: '119', path: '', img: require('@/assets/sellFine/canvas-bag02.png'), newFlag: true },
    { id: 5, tag: '【原神】', name: '小派蒙1/7静态手办 Genshin', price: '229', path: '', img: require('@/assets/sellFine/garage-kits01.png'), newFlag: false },
    { id: 6, tag: '【原神】', name: '犬坂吠吠马克杯 Genshin', price: '129', path: '', img: require('@/assets/sellFine/mark-cup01.png'), newFlag: true },
    { id: 7, tag: '【原神】', name: 'Q版任务系列 卡套 Genshin', price: '58', path: '', img: require('@/assets/sellFine/card-set01.png'), newFlag: true },
    { id: 8, tag: '【原神】', name: 'Q版人物系列 便签贴立牌 Genshin', price: '49', path: '', img: require('@/assets/sellFine/sticky-notes01.png'), newFlag: true },
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

const getFineList = Mock.mock('/api/home/fineList', 'get', () => {
    return fineList
})

const getSellList = Mock.mock('/api/home/sellList', 'get', () => {
    return sellList
})

export default {
    getListMenu,
    getLeftList,
    getTopList,
    getImageList,
    getFineList,
    getSellList,
}