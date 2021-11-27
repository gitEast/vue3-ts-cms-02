/*
 * @Author: your name
 * @Date: 2021-11-27 14:06:21
 * @LastEditTime: 2021-11-27 17:12:50
 * @LastEditors: Please set LastEditors
 * @Description: 重新定义网络请求的类型
 * @FilePath: \vue3-ts-cms-02\src\service\request\type.ts
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 如果返回的值是 res.data
export interface ResponseType extends AxiosResponse {
  data: any
  returnCode: number
  sucess: boolean
}

export interface EastInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => void
  responseInterceptor?: (res: AxiosResponse) => ResponseType
  responseInterceptorCatch?: (err: any) => void
}

export interface EastRequestConfig extends AxiosRequestConfig {
  interceptors?: EastInterceptor
}
