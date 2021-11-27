/*
 * @Author: East
 * @Date: 2021-11-26 08:30:16
 * @LastEditTime: 2021-11-26 08:32:58
 * @LastEditors: Please set LastEditors
 * @Description: vuex 的 index
 * @FilePath: \vue3-ts-cms-02\src\store\index.ts
 */
import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'East'
    }
  }
})

export default store
