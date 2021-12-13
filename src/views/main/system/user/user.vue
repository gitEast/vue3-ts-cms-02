<!--
 * @Author: East
 * @Date: 2021-12-06 10:27:53
 * @LastEditTime: 2021-12-13 17:17:59
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
    >
      <template #enable="slotProps">
        <el-tag :type="slotProps.row.enable === 1 ? 'success' : 'danger'">
          {{ slotProps.row.enable === 1 ? '启用' : '禁用' }}
        </el-tag>
      </template>
    </page-content>
    <page-modal :modalConfig="modalConfig"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

import PageContent from '@/components/page-content'
import { tableContentConfig } from './config/content.config'

import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    return {
      searchFormConfig,
      tableContentConfig,
      modalConfig,

      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
