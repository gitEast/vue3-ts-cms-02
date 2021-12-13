/*
 * @Author: your name
 * @Date: 2021-12-13 17:31:12
 * @LastEditTime: 2021-12-13 17:41:43
 * @LastEditors: Please set LastEditors
 * @Description: user - 模态框 form 每一项的东西
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\modal.config.ts
 */
import type { IFormItems } from '@/base-ui/form'

export const modalConfig: IFormItems[] = [
  {
    label: '昵称',
    type: 'input',
    field: 'name',
    placeholder: '请输入昵称'
  },
  {
    label: '密码',
    type: 'password',
    field: 'password',
    placeholder: '请输入密码'
  },
  {
    label: '真实姓名',
    type: 'input',
    field: 'realname',
    placeholder: '请输入真实姓名'
  },
  {
    label: '状态',
    type: 'select',
    field: 'enable',
    placeholder: '请选择状态',
    options: [
      {
        label: '启用',
        value: 1
      },
      {
        label: '禁用',
        value: 0
      }
    ]
  },
  {
    label: '手机号',
    type: 'input',
    field: 'cellphone',
    placeholder: '请输入手机号'
  }
]
