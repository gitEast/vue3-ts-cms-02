/*
 * @Author: your name
 * @Date: 2021-11-26 19:46:48
 * @LastEditTime: 2021-11-27 17:51:42
 * @LastEditors: Please set LastEditors
 * @Description: 封装 EastRequest 类
 * @FilePath: \vue3-ts-cms-02\src\service\request\index.ts
 */
import axios, { AxiosResponse } from 'axios'

import type { AxiosInstance } from 'axios'
import type { EastRequestConfig, EastInterceptor, ResponseType } from './type'

class EastRequest {
  instance: AxiosInstance
  interceptors?: EastInterceptor

  constructor(config: EastRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 实例特有的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全部实例都有的拦截器 ---- 其实没有必要
    this.instance.interceptors.request.use(
      (config: EastRequestConfig) => config,
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => res,
      (err) => err
    )
  }

  request(config: EastRequestConfig): Promise<ResponseType> {
    return new Promise((resolve, reject) => {
      // 请求中特有的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }
      this.instance
        .request<any, ResponseType>(config)
        .then((res) => {
          // 对响应做拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default EastRequest
