/*
 * @Author: East
 * @Date: 2021-12-12 20:11:28
 * @LastEditTime: 2021-12-12 20:24:44
 * @LastEditors: Please set LastEditors
 * @Description: 判断是否有权限
 * @FilePath: \vue3-ts-cms-02\src\hooks\use-permission.ts
 */
import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return permissions.includes(verifyPermission)
}
