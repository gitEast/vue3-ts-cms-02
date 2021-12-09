/*
 * @Author: East
 * @Date: 2021-12-09 16:32:04
 * @LastEditTime: 2021-12-09 16:33:26
 * @LastEditors: Please set LastEditors
 * @Description: system 模块的网络请求
 * @FilePath: \vue3-ts-cms-02\src\service\main\system\system.ts
 */
import eastRequest from '@/service'
import type { IDataType } from '../../type'

export function getPageListData(url: string, queryInfo: any) {
  return eastRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
