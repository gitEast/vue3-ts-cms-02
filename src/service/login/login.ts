/*
 * @Author: your name
 * @Date: 2021-12-01 16:42:49
 * @LastEditTime: 2021-12-03 14:43:19
 * @LastEditors: Please set LastEditors
 * @Description: login 的逻辑
 * @FilePath: \vue3-ts-cms-02\src\service\login\login.ts
 */
import eastRequest from '..'

import type { IAccount, ILoginResult } from './type'
import type { IDataType } from '../type'

// 枚举 URL
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /users/userId
  UserMenus = '/role/' // /role/roleId/menu
}

export function accountLoginRequest(account: IAccount) {
  return eastRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return eastRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenuByRoleId(id: number) {
  return eastRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
