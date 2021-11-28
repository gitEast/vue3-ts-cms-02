/*
 * @Author: your name
 * @Date: 2021-11-26 19:46:39
 * @LastEditTime: 2021-11-28 20:41:42
 * @LastEditors: Please set LastEditors
 * @Description: 使用 EastRequest 类创建实例
 * @FilePath: \vue3-ts-cms-02\src\service\index.ts
 */
import EastRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const eastRequest = new EastRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = '123'
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }
      return config
    }
  }
})
console.log(BASE_URL)

export default eastRequest
