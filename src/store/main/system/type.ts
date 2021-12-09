/*
 * @Author: East
 * @Date: 2021-12-09 16:26:06
 * @LastEditTime: 2021-12-09 16:42:18
 * @LastEditors: Please set LastEditors
 * @Description: vuex - system module 的类型
 * @FilePath: \vue3-ts-cms-02\src\store\main\system\type.ts
 */
export interface ISystemState {
  userList: any[]
  userCount: number
}

export interface ISystemRequest {
  url: string
  queryInfo: any
}
