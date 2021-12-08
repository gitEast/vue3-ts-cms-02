/*
 * @Author: East
 * @Date: 2021-11-24 15:36:34
 * @LastEditTime: 2021-12-07 16:24:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \forGreaterGood\vue3\project\vue3-ts-cms\src\main.ts
 */
import { createApp } from 'vue'
import 'normalize.css'

import App from './App.vue'

import router from './router'
import store from './store'
import { globalRegister } from './global'
import { setupStore } from './store'

import 'assets/css/index.less'

const app = createApp(App)

app.use(store)
setupStore() // 防刷新对 vuex 的影响
app.use(router)
app.use(globalRegister)

app.mount('#app')
