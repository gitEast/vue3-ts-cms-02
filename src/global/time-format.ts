/*
 * @Author: East
 * @Date: 2021-12-11 15:02:44
 * @LastEditTime: 2021-12-15 10:29:59
 * @LastEditors: Please set LastEditors
 * @Description: 设置全局命令 v-time-format
 * @FilePath: \vue3-ts-cms-02\src\global\time-format.ts
 */
import { App } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

// 注册 功能指令
export function directiveTimeFormat(app: App): void {
  app.directive('time-format', (el: HTMLElement, binding) => {
    /** 将被作为 mounted 和 updated 调用
     * 1. 对 东八区的时间进行修正
     */
    const DATE_TIME_FORMAT: string =
      binding.value.format ?? 'YYYY-MM-DD HH:mm:ss'
    el.innerText = dayjs
      .utc(binding.value.data)
      .utcOffset(8)
      .format(DATE_TIME_FORMAT)
  })
}
