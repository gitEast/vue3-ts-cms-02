/*
 * @Author: your name
 * @Date: 2021-11-25 15:10:08
 * @LastEditTime: 2021-12-03 15:40:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts-cms-02\src\router\index.ts
 */
// API 导入
import { createRouter, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/cache'

// 类型导入，type 关键字表明是类型
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('views/main/main.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

// 验证登录
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
