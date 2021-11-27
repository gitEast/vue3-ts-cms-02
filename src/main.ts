/*
 * @Author: East
 * @Date: 2021-11-24 15:36:34
 * @LastEditTime: 2021-11-27 17:51:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \forGreaterGood\vue3\project\vue3-ts-cms\src\main.ts
 */
import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'
import { globalRegister } from './global'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(globalRegister)

app.mount('#app')

/** 网络请求 */
import eastRequest from './service'

eastRequest
  .request({
    url: '/get',
    method: 'GET',
    params: {
      name: 'east',
      age: 22
    },
    interceptors: {
      responseInterceptor: (res) => res.data
    }
  })
  .then((res) => {
    console.log(res)
  })
