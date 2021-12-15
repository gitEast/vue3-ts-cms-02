/*
 * @Author: East
 * @Date: 2021-11-26 08:30:16
 * @LastEditTime: 2021-12-15 13:29:00
 * @LastEditors: Please set LastEditors
 * @Description: vuex 的 index
 * @FilePath: \vue3-ts-cms-02\src\store\index.ts
 */
import { createStore, useStore as useVuexStore } from 'vuex'

import { getPageListData } from '@/service/main/system/system'

import login from './login/login'
import system from './main/system/system'

import type { IRootState, IStoreType } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list: any[]) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list: any[]) {
      state.entireRole = list
    },
    changeEntireMenu(state, list: any[]) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1. 请求部门和角色数据
      const queryInfo = { offset: 0, size: 1000 }
      const departmentResult = await getPageListData(
        '/department/list',
        queryInfo
      )
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', queryInfo)
      const { list: roleList } = roleResult.data
      // 1.2 请求菜单
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      // 2. 保存数据到 rootState 中
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system
  }
})

export default store

// 防止刷新页面，vuex 中数据被清空
export async function setupStore() {
  await store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export function useStore() {
  return useVuexStore<IStoreType>()
}
