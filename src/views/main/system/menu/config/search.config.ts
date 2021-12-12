/*
 * @Author: East
 * @Date: 2021-12-07 18:25:01
 * @LastEditTime: 2021-12-11 19:25:39
 * @LastEditors: Please set LastEditors
 * @Description: form 的配置文件
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\search.config.ts
 */
import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      label: '职位',
      type: 'input',
      field: 'name',
      placeholder: '请输入职位',
      rules: [
        {
          required: true,
          message: '必须有输入',
          trigger: 'blur'
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
