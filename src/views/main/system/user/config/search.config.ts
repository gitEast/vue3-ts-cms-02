/*
 * @Author: East
 * @Date: 2021-12-07 18:25:01
 * @LastEditTime: 2021-12-09 14:12:13
 * @LastEditors: Please set LastEditors
 * @Description: form 的配置文件
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\search.config.ts
 */
import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      label: 'id',
      type: 'input',
      field: 'userId',
      placeholder: '请输入 id',
      rules: [
        {
          required: true,
          message: '必须有输入',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '用户名',
      type: 'input',
      field: 'formName',
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
      label: '密码',
      type: 'password',
      field: 'formPwd',
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
      label: '喜欢的运动',
      type: 'select',
      field: 'sport',
      placeholder: '请选择喜欢的运动',
      options: [
        {
          label: '篮球',
          value: 'bascketball'
        },
        {
          label: '足球',
          value: 'football'
        },
        {
          label: '游泳',
          value: 'swimming'
        },
        {
          label: '跑步',
          value: 'running'
        }
      ]
    },
    {
      label: '创建时间',
      type: 'datePicker',
      field: 'time',
      otherOptions: {
        placeholders: ['开始日期', '结束日期']
      }
    }
  ]
}
