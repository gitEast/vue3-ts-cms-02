/*
 * @Author: your name
 * @Date: 2021-11-26 19:53:25
 * @LastEditTime: 2021-12-01 16:56:12
 * @LastEditors: Please set LastEditors
 * @Description: 基本配置
 * @FilePath: \vue3-ts-cms-02\src\service\config.ts
 */
let BASE_URL = ''
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org'
} else {
  BASE_URL = 'http://httpbin.org'
}

export { BASE_URL, TIME_OUT }
