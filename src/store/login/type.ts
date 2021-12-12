/*
 * @Author: your name
 * @Date: 2021-12-01 09:00:51
 * @LastEditTime: 2021-12-12 20:05:44
 * @LastEditors: Please set LastEditors
 * @Description: vuex 中 login 模块的 state 类型
 * @FilePath: \vue3-ts-cms-02\src\store\login\type.ts
 */
export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}
