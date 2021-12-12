/*
 * @Author: East
 * @Date: 2021-12-09 18:49:17
 * @LastEditTime: 2021-12-12 20:00:06
 * @LastEditors: Please set LastEditors
 * @Description: table 的 配置
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\content.config.ts
 */
import { ITableProp } from '@/base-ui/table'

export const tableContentConfig: ITableProp = {
  title: '菜单列表',
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      slotName: 'name',
      width: 140
    },
    {
      prop: 'type',
      label: '类型',
      slotName: 'type',
      width: 120
    },
    {
      prop: 'url',
      label: '路径',
      slotName: 'url'
    },
    {
      prop: 'permission',
      label: '按钮权限',
      slotName: 'permission'
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
      label: '操作',
      slotName: 'handler'
    }
  ],
  ifSelect: false,
  childrenProps: {
    'row-key': 'id',
    'tree-props': {
      children: 'children'
    }
  },
  ifFooter: false
}
