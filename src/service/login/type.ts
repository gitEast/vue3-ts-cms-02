/*
 * @Author: your name
 * @Date: 2021-12-01 16:42:41
 * @LastEditTime: 2021-12-03 09:40:42
 * @LastEditors: Please set LastEditors
 * @Description: login 的 类型
 * @FilePath: \vue3-ts-cms-02\src\service\login\type.ts
 */
// 参数
export interface IAccount {
  name: string
  password: string
}

// 登录请求返回值
export interface ILoginResult {
  id: number
  name: string
  token: string
}
