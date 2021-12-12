/*
 * @Author: East
 * @Date: 2021-12-09 18:49:17
 * @LastEditTime: 2021-12-12 19:41:48
 * @LastEditors: Please set LastEditors
 * @Description: table 的 配置
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\content.config.ts
 */
import { ITableProp } from '@/base-ui/table'

export const tableContentConfig: ITableProp = {
  title: '商品列表',
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      slotName: 'name',
      width: 140,
      'show-overflow-tooltip': true
    },
    {
      prop: 'imgUrl',
      label: '图片',
      slotName: 'imgUrl'
    },
    {
      prop: 'status',
      label: '状态',
      slotName: 'status',
      width: 120
    },
    {
      prop: 'newPrice',
      label: '现价',
      slotName: 'newPrice',
      width: 120
    },
    {
      prop: 'oldPrice',
      label: '原价',
      slotName: 'oldPrice',
      width: 120
    },
    {
      prop: 'inventoryCount',
      label: '库存',
      slotName: 'inventoryCount',
      width: 120
    },
    {
      prop: 'saleCount',
      label: '已售',
      slotName: 'saleCount',
      width: 120
    },
    {
      prop: 'address',
      label: '发货地',
      slotName: 'address',
      width: 120
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
  ]
}
