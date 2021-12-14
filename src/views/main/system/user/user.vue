<!--
 * @Author: East
 * @Date: 2021-12-06 10:27:53
 * @LastEditTime: 2021-12-14 13:54:34
 * @LastEditors: Please set LastEditors
 * @Description: 系统管理 - 用户管理 界面
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\user.vue
-->
<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      pageName="users"
      :tableContentConfig="tableContentConfig"
      ref="pageContentRef"
      @createBtnClick="handleCreateData"
      @editBtnClick="handleEditData"
    >
      <template #enable="slotProps">
        <el-tag :type="slotProps.row.enable === 1 ? 'success' : 'danger'">
          {{ slotProps.row.enable === 1 ? '启用' : '禁用' }}
        </el-tag>
      </template>
    </page-content>
    <page-modal
      :modalFormConfig="modalConfigComputed"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="users"
      @refleshPageList="handleResetClick"
    ></page-modal>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

import PageContent from '@/components/page-content'
import { tableContentConfig } from './config/content.config'

import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

import { usePageSearch, usePageModal } from '@/hooks'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // page-search 的相关按钮操作
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    /** page-modal 的相关操作
     * 1. callback 中确定 password 项的 isHidden 属性存在
     * 2. page-modal 的操作
     * 3. modalConfig 响应式改变，会使 template 重新编译
     */
    const createCallback = () => {
      const passwordItem = modalConfig.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, handleCreateData, handleEditData] =
      usePageModal(createCallback, editCallback)
    // 对传给 page-modal 的 formItems 的 selection options 进行响应式
    const modalConfigComputed = computed(() => {
      const departmentItem = modalConfig.find(
        (item) => item.field === 'departmentId'
      )
      const roleItem = modalConfig.find((item) => item.field === 'roleId')
      const store = useStore()
      departmentItem!.options = store.state.entireDepartment.map(
        (department) => {
          return {
            label: department.name,
            value: department.id
          }
        }
      )
      roleItem!.options = store.state.entireRole.map((role) => {
        return {
          label: role.name,
          value: role.id
        }
      })

      return modalConfig
    })

    return {
      searchFormConfig,
      tableContentConfig,
      modalConfigComputed,

      pageContentRef,
      handleResetClick,
      handleQueryClick,

      pageModalRef,
      defaultInfo,
      handleCreateData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
