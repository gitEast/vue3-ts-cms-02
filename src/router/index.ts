/*
 * @Author: your name
 * @Date: 2021-11-25 15:10:08
 * @LastEditTime: 2021-12-08 15:23:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts-cms-02\src\router\index.ts
 */
// API 导入
import { createRouter, createWebHashHistory } from 'vue-router'

import localCache from '@/utils/cache'
import { firstPath } from '@/utils/map-menus'

// 类型导入，type 关键字表明是类型
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

// 验证登录
router.beforeEach((to) => {
  // 没有 token，就重新登录
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  // 当 path === '/main' 时，其实是到第一个页面
  if (to.path === '/main') {
    return firstPath
  }
})

export default router
