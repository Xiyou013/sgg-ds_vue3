/**
 * mock配置文件
 */
// 引入mock
const Mock = require('mockjs');

// 引入所有mock文件
// 优点：能看懂
// 缺点：当mock文件过多时，需要每一个文件进行引入
require('@/mock/basic/header');
require('@/mock/basic/footer');
require('@/mock/home/index');
require('@/mock/basic/test');

// 设置拦截ajax请求的时间
Mock.setup({
    timeout: '200-600'
})
