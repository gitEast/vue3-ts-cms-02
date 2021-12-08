/*
 * @Author: East
 * @Date: 2021-12-07 08:41:46
 * @LastEditTime: 2021-12-08 15:59:33
 * @LastEditors: Please set LastEditors
 * @Description: 映射路由
 * @FilePath: \vue3-ts-cms-02\src\utils\map-menus.ts
 */
import type { RouteRecordRaw } from 'vue-router'
import type { IBreadcrumb } from '@/base-ui/breadcrumb'

let firstPath: string

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 先加载默认所有的 routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('@/router/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    const route = require('@/router/main' + key.slice(1)) // 例： @/router/main/system/user/user.ts
    allRoutes.push(route.default)
  })

  // 根据 userMenus 加载对应映射关系
  const _recurseGetRoute = (menus: any[]) => {
    menus.forEach((menu: any) => {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        route && routes.push(route)

        // '/main' 其实是第一个页面
        if (!firstPath) {
          route && (firstPath = route.path)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    })
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function getBreadcrumbs(userMenus: any[], path: string): IBreadcrumb[] {
  const crumbs: IBreadcrumb[] = []

  // 递归获取面包屑的数组
  const _recurseGetMenu = (userMenus: any[]) => {
    for (const menu of userMenus) {
      if (menu.type === 1) {
        const realMenu = _recurseGetMenu(menu.children)
        if (realMenu) {
          crumbs.push({ name: menu.name })
          crumbs.push({ name: realMenu.name })
        }
      } else {
        if (menu.url === path) {
          return menu
        }
      }
    }
  }

  _recurseGetMenu(userMenus)

  return crumbs
}

export { firstPath }
