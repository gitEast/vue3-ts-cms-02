/*
 * @Author: East
 * @Date: 2021-12-14 09:12:16
 * @LastEditTime: 2021-12-15 11:06:46
 * @LastEditors: Please set LastEditors
 * @Description: 业务页面 对 page-modal 的控制
 * @FilePath: \vue3-ts-cms-02\src\hooks\usePageModal.ts
 */
import { ref } from 'vue'

import PageModal from '@/components/page-modal'

type callbackFn = (row?: any) => void

export function usePageModal(createCb: callbackFn, editCb: callbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const defaultInfo = ref<any>()

  const handleCreateData = () => {
    defaultInfo.value = {}
    createCb && createCb()
    pageModalRef.value && (pageModalRef.value.dialogVisible = true)
  }

  const handleEditData = (row: any) => {
    defaultInfo.value = row
    editCb && editCb(row)
    pageModalRef.value && (pageModalRef.value.dialogVisible = true)
  }

  return [pageModalRef, defaultInfo, handleCreateData, handleEditData]
}
