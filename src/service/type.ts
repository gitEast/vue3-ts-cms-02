/*
 * @Author: East
 * @Date: 2021-12-01 16:59:48
 * @LastEditTime: 2021-12-03 09:38:57
 * @LastEditors: Please set LastEditors
 * @Description: 所有网络请求返回类型
 * @FilePath: \vue3-ts-cms-02\src\service\type.ts
 */
export interface IDataType<T = any> {
  code: number
  data: T
}
