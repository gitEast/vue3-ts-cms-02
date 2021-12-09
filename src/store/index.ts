/*
 * @Author: East
 * @Date: 2021-11-26 08:30:16
 * @LastEditTime: 2021-12-09 16:39:27
 * @LastEditors: Please set LastEditors
 * @Description: vuex 的 index
 * @FilePath: \vue3-ts-cms-02\src\store\index.ts
 */
import { createStore, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'

import type { IRootState, IStoreType } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'East'
    }
  },
  modules: {
    login,
    system
  }
})

export default store

// 防止刷新页面，vuex 中数据被清空
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore() {
  return useVuexStore<IStoreType>()
}
