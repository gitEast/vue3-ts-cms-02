/*
 * @Author: your name
 * @Date: 2021-12-13 17:31:12
 * @LastEditTime: 2021-12-15 11:05:26
 * @LastEditors: Please set LastEditors
 * @Description: user - 模态框 form 每一项的东西
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\modal.config.ts
 */
import type { IFormItems } from '@/base-ui/form'

export const modalConfig: IFormItems[] = [
  {
    label: '职位',
    type: 'input',
    field: 'name',
    placeholder: '请输入职位'
  },
  {
    label: '职位介绍',
    type: 'input',
    field: 'intro',
    placeholder: '请输入职位介绍'
  }
]
