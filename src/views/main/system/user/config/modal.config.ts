/*
 * @Author: your name
 * @Date: 2021-12-13 17:31:12
 * @LastEditTime: 2021-12-14 10:49:55
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
    placeholder: '请输入密码',
    isHidden: true
  },
  {
    label: '真实姓名',
    type: 'input',
    field: 'realname',
    placeholder: '请输入真实姓名'
  },
  {
    label: '手机号',
    type: 'input',
    field: 'cellphone',
    placeholder: '请输入手机号'
  },
  {
    label: '部门',
    type: 'select',
    field: 'departmentId',
    placeholder: '请选择部门',
    options: []
  },
  {
    label: '角色',
    type: 'select',
    field: 'roleId',
    placeholder: '请选择角色',
    options: []
  }
]
