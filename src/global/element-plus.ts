/*
 * @Author: your name
 * @Date: 2021-11-26 13:46:57
 * @LastEditTime: 2021-12-04 14:31:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts-cms-02\src\global\element-plus.ts
 */
import { App } from 'vue'
import {
  ElButton,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMain
} from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const cpns = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem
]

export function registerElementPlus(app: App): void {
  cpns.forEach((component) => {
    app.component(component.name, component)
  })
}
