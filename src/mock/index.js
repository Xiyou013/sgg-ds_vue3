/**
 * mock配置文件
 */
// 引入mock
const Mock = require('mockjs');

// 引入所有mock文件
// 优点：能看懂
// 缺点：当mock文件过多时，需要每一个文件进行引入
require('@/mock/basic/test');

// 设置拦截ajax请求的时间
Mock.setup({
    timeout: '200-600'
})


// 下面的代码暂时没起作用，因为不知道怎么做
// let configArray = [];

// // 使用webpack的require.context()遍历所有mock文件
// const files = require.context('.', true, /\.js$/)
// files.keys().forEach(key => {
//     console.log('key::::', key)
//     if (key === './index.js') return;
//     configArray = configArray.concat(files(key).default)
//     console.log('configArray::::', configArray)
// });

// // 注册所有的mock服务
// configArray.forEach(item => {
//     console.log('item::::', item)
//     for (let [path, target] of Object.entries(item)) {
//         let protocol = path.split('|');
//         Mock.mock(new RegExp(`^${protocol[1]}`), protocol[0], target)
//     }
// })
