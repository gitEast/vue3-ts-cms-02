/*
 * @Author: East
 * @Date: 2021-12-09 16:26:06
 * @LastEditTime: 2021-12-12 20:33:33
 * @LastEditors: Please set LastEditors
 * @Description: vuex - system module 的类型
 * @FilePath: \vue3-ts-cms-02\src\store\main\system\type.ts
 */
export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  menuList: any[]
  menuCount: number
  goodsList: any[]
  goodsCount: number
}

export interface ISystemRequest {
  pageName: 'users' | 'role' | 'menu' | 'goods'
  queryInfo: any
}
