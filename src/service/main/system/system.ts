/*
 * @Author: East
 * @Date: 2021-12-09 16:32:04
 * @LastEditTime: 2021-12-14 11:06:13
 * @LastEditors: Please set LastEditors
 * @Description: system 模块的网络请求
 * @FilePath: \vue3-ts-cms-02\src\service\main\system\system.ts
 */
import eastRequest from '@/service'
import type { IDataType } from '../../type'

// 查询
export function getPageListData(url: string, queryInfo: any) {
  return eastRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 删除
export function deletePageData(url: string) {
  return eastRequest.delete<IDataType>({
    url: url
  })
}

// 新增
export function createPageData(url: string, createData: any) {
  return eastRequest.post<IDataType>({
    url: url,
    data: createData
  })
}

// 修改
export function editPageData(url: string, editData: any) {
  return eastRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
