/*
 * @Author: East
 * @Date: 2021-12-14 09:12:16
 * @LastEditTime: 2021-12-14 10:17:39
 * @LastEditors: Please set LastEditors
 * @Description: 业务页面 对 page-modal 的控制
 * @FilePath: \vue3-ts-cms-02\src\hooks\usePageModal.ts
 */
import { ref } from 'vue'

import PageModal from '@/components/page-modal'

type callbackFn = () => void

export function usePageModal(createCb: callbackFn, editCb: callbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const defaultInfo = ref<any>()

  const handleCreateData = () => {
    console.log('user 接收 新增事件')
    defaultInfo.value = {}
    createCb && createCb()
    pageModalRef.value && (pageModalRef.value.dialogVisible = true)
  }

  const handleEditData = (row: any) => {
    console.log('user 接收 编辑事件', row)
    defaultInfo.value = row
    editCb && editCb()
    pageModalRef.value && (pageModalRef.value.dialogVisible = true)
  }

  return [pageModalRef, defaultInfo, handleCreateData, handleEditData]
}
