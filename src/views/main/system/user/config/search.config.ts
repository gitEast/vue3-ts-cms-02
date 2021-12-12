/*
 * @Author: East
 * @Date: 2021-12-07 18:25:01
 * @LastEditTime: 2021-12-12 15:26:45
 * @LastEditors: Please set LastEditors
 * @Description: form 的配置文件
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\search.config.ts
 */
import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      label: '用户名',
      type: 'input',
      field: 'name',
      placeholder: '请输入用户名',
      rules: [
        {
          required: true,
          message: '必须有输入',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 8,
          message: '长度需要在 3 - 8 之间',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '真实姓名',
      type: 'input',
      field: 'realname',
      placeholder: '请输入密码',
      rules: [
        {
          min: 3,
          max: 8,
          message: '长度需要在 3 - 8 之间',
          trigger: 'blur'
        }
      ]
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
      label: '创建时间',
      type: 'datePicker',
      field: 'createAt',
      otherOptions: {
        placeholders: ['开始日期', '结束日期']
      }
    }
  ]
}
