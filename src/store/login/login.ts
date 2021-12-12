/*
 * @Author: your name
 * @Date: 2021-12-01 08:54:17
 * @LastEditTime: 2021-12-12 20:24:26
 * @LastEditors: Please set LastEditors
 * @Description: login 模块的 vuex
 * @FilePath: \vue3-ts-cms-02\src\store\login\login.ts
 */
import { Module } from 'vuex'

import type { IRootState } from '../type'
import type { ILoginState } from './type'
import type { IAccount } from '@/service/login/type'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, payload: string) {
      state.token = payload
    },
    changeUserInfo(state, payload: any) {
      state.userInfo = payload
    },
    changeUserMenus(state, payload: any) {
      state.userMenus = payload
      const childrenRoutes = mapMenusToRoutes(state.userMenus)
      childrenRoutes.forEach((route) => {
        router.addRoute('main', route)
      })
    },
    changePermissions(state, payload: string[]) {
      state.permissions = payload
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2. 请求用户信息 ---- 从这个请求开始都需要携带 token
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3. 获取菜单
      const userMenusResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 3.1 根据菜单获取按钮权限
      const permissions = mapMenusToPermissions(userMenus)
      commit('changePermissions', permissions)
      localCache.setCache('permissions', permissions)

      // 4. 跳转到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
      const permissions = localCache.getCache('permissions')
      if (permissions) {
        commit('changePermissions', permissions)
      }
    }
  }
}

export default loginModule
