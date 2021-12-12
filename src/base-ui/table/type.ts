/*
 * @Author: East
 * @Date: 2021-12-09 18:51:11
 * @LastEditTime: 2021-12-12 18:39:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: 封装 table 时使用的类型
 * @FilePath: \vue3-ts-cms-02\src\base-ui\table\type.ts
 */
export interface IPropItem {
  prop?: string
  label: string
  slotName: string
  width?: number
  'show-overflow-tooltip'?: boolean
}

export interface ITableProp {
  propList: IPropItem[]
  ifSelect?: boolean
  ifIndex?: boolean
  title?: string
  childrenProps?: Object
  ifHeader?: boolean
  ifFooter?: boolean
}
