/*
 * @Author: East
 * @Date: 2021-12-09 18:49:17
 * @LastEditTime: 2021-12-12 18:36:33
 * @LastEditors: Please set LastEditors
 * @Description: table 的 配置
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\content.config.ts
 */
import { ITableProp } from '@/base-ui/table'

export const tableContentConfig: ITableProp = {
  propList: [
    {
      prop: 'name',
      label: '昵称',
      slotName: 'name',
      width: 140
    },
    {
      prop: 'realname',
      label: '姓名',
      slotName: 'realname',
      width: 140
    },
    {
      prop: 'enable',
      label: '状态',
      slotName: 'enable',
      width: 140
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt'
    },
    {
      prop: 'cellphone',
      label: '手机号',
      slotName: 'cellphone'
    },
    {
      label: '操作',
      slotName: 'handler'
    }
  ],
  ifSelect: true,
  ifIndex: true
}
