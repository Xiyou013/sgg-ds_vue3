/**
 * 登录
 */
const Mock = require("mockjs")

let Login = [
    {
        'name': 'xiaohong',
        'age': 19
    },
    {
        name: '小媛',
        age: 22
    }
]
// 获取全部数据
const getData = Mock.mock('/test', () => {
    return Login
})

// 获取具体人物信息
const getOneData = Mock.mock('/test/getoneData', (val) => {
    // 因为靠这种方法拿过来的val传参不是真正的数据，而是一个对象
    /**
     * {
     *    body:"{"data":22}"
     *    type:"POST"
     *    url:"/test/getoneData"
     * }
     */
    // 真正的数据被包含在了body里，并以字符串的形式保存
    // 所以要获取到真正的数据，需要将body中的字符串转为object类型的数据，并将data重新赋值
    console.log('val::::', val);
    const obj = JSON.parse(val.body).data
    return Login.find((item) => {
        return item.age === obj
    })
})

// 返回模拟的数据及接口
module.exports = (router) => {
    return [
        router.get('/test', getData),
        router.post('/test/getoneData', getOneData)
    ]
}