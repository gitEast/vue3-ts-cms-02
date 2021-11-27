/*
 * @Author: your name
 * @Date: 2021-11-26 19:53:25
 * @LastEditTime: 2021-11-27 17:51:09
 * @LastEditors: Please set LastEditors
 * @Description: 基本配置
 * @FilePath: \vue3-ts-cms-02\src\service\config.ts
 */
let BASE_URL = ''
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://httpbin.org'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org'
} else {
  BASE_URL = 'http://httpbin.org'
}

export { BASE_URL, TIME_OUT }
