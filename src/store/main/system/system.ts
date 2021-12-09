/*
 * @Author: East
 * @Date: 2021-12-09 16:26:03
 * @LastEditTime: 2021-12-09 18:37:14
 * @LastEditors: Please set LastEditors
 * @Description: vuex - system module
 * @FilePath: \vue3-ts-cms-02\src\store\main\system\system.ts
 */
import { Module } from 'vuex'

import type { ISystemState, ISystemRequest } from './type'
import type { IRootState } from '../../type'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: ISystemRequest) {
      // 1. 发送网络请求
      const pageResult = await getPageListData(payload.url, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
