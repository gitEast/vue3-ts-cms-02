/*
 * @Author: East
 * @Date: 2021-12-09 16:26:03
 * @LastEditTime: 2021-12-12 20:29:38
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
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0,
      goodsList: [],
      goodsCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUserCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: ISystemRequest) {
      // 0. 根据 payload.pageName 区别各个页面的不同请求
      const realPath = {
        users: {
          url: '/users/list',
          mutation: ['changeUserList', 'changeUserCount']
        },
        role: {
          url: '/role/list',
          mutation: ['changeRoleList', 'changeRoleCount']
        },
        menu: {
          url: '/menu/list',
          mutation: ['changeMenuList', 'changeMenuCount']
        },
        goods: {
          url: '/goods/list',
          mutation: ['changeGoodsList', 'changeGoodsCount']
        }
      }

      // 1. 发送网络请求
      const pageResult = await getPageListData(
        realPath[payload.pageName].url,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data
      commit(realPath[payload.pageName].mutation[0], list)
      commit(realPath[payload.pageName].mutation[1], totalCount)
    }
  }
}

export default systemModule
