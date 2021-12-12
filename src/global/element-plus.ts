/*
 * @Author: your name
 * @Date: 2021-11-26 13:46:57
 * @LastEditTime: 2021-12-12 19:37:11
 * @LastEditors: Please set LastEditors
 * @Description: 注册 element plus 组件的封装
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
  ElMain,
  ElEmpty,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElTag,
  ElPagination,
  ElImage
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
  ElMenuItem,
  ElEmpty,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElTag,
  ElPagination,
  ElImage
]

export function registerElementPlus(app: App): void {
  cpns.forEach((component) => {
    app.component(component.name, component)
  })
}
