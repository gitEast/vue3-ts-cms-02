/*
 * @Author: your name
 * @Date: 2021-12-01 08:57:25
 * @LastEditTime: 2021-12-14 10:32:46
 * @LastEditors: Please set LastEditors
 * @Description: vuex 根模块 的 state 类型
 * @FilePath: \vue3-ts-cms-02\src\store\type.ts
 */
import type { ILoginState } from './login/type'
import type { ISystemState } from './main/system/type'

export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
