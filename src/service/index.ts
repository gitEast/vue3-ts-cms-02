/*
 * @Author: your name
 * @Date: 2021-11-26 19:46:39
 * @LastEditTime: 2021-12-09 16:36:54
 * @LastEditors: Please set LastEditors
 * @Description: 使用 EastRequest 类创建实例
 * @FilePath: \vue3-ts-cms-02\src\service\index.ts
 */
import EastRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const eastRequest = new EastRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }
      return config
    },
    responseInterceptor: (res) => {
      return res.data
    }
  }
})

export default eastRequest
