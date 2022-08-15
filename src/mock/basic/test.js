/**
 * 登录
 */
const Mock = require("mockjs")

let tableList = [
    {
        'name': 'xiaohong',
        'age': 20
    },
    {
        name: '小媛',
        age: 22
    }
]
// 获取全部数据
const getData = Mock.mock('/test', "get", () => {
    return tableList
})

// 获取具体人物信息
const getOneData = Mock.mock('/test/getoneData', "post", (val) => {
    // 这种方法拿过来的val传参不是真正的数据，而是一个对象
    /**
     * {
     *    body:22
     *    type:"POST"
     *    url:"/test/getoneData"
     * }
     */
    // 真正的数据在body里保存
    // 要获取到真正的数据，将body中的值取出即可
    let res = tableList.find((item) => {
        return item.age === val.body
    })
    return res

})

// 返回模拟的数据及接口
export default {
    getData, getOneData
}