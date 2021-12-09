/*
 * @Author: East
 * @Date: 2021-12-09 18:49:17
 * @LastEditTime: 2021-12-09 18:59:34
 * @LastEditors: Please set LastEditors
 * @Description: table 的 配置
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\config\content.config.ts
 */
import { IPropItem } from '@/base-ui/table'

export const propList: IPropItem[] = [
  {
    prop: 'name',
    label: '昵称'
  },
  {
    prop: 'realname',
    label: '姓名'
  },
  {
    prop: 'enable',
    label: '状态'
  },
  {
    prop: 'createAt',
    label: '创建时间'
  },
  {
    prop: 'updateAt',
    label: '更新时间'
  },
  {
    prop: 'cellphone',
    label: '手机号'
  }
]
