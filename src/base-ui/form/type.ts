/*
 * @Author: East
 * @Date: 2021-12-07 17:51:19
 * @LastEditTime: 2021-12-09 14:08:34
 * @LastEditors: Please set LastEditors
 * @Description: form 的 类型
 * @FilePath: \vue3-ts-cms-02\src\base-ui\form\type\type.ts
 */
// form-item 都是些什么东西
type IItemType = 'input' | 'password' | 'datePicker' | 'select'
interface IOptionItem {
  label: string
  value: any
}
export interface IFormItems {
  label: string
  type: IItemType
  field: string
  rules?: any[]
  placeholder?: string
  options?: IOptionItem[]
  otherOptions?: any
}

// 为方便起见，将所有的 prop 放到一起
export interface IForm {
  formItems: IFormItems[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
