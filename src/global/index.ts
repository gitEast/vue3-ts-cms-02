/*
 * @Author: East
 * @Date: 2021-11-26 13:38:16
 * @LastEditTime: 2021-12-11 15:10:05
 * @LastEditors: Please set LastEditors
 * @Description: 嘿嘿，我厉害吧，自己实现了带 install 方法的对象
 * @FilePath: \vue3-ts-cms-02\src\global\index.ts
 */
import { App } from 'vue'

import { registerElementPlus } from './element-plus'
import { directiveTimeFormat } from './time-format'

export const globalRegister = {
  install: (app: App): void => {
    registerElementPlus(app)
    directiveTimeFormat(app)
  }
}
