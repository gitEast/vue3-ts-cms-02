<!--
 * @Author: East
 * @Date: 2021-12-11 14:23:08
 * @LastEditTime: 2021-12-12 15:45:43
 * @LastEditors: Please set LastEditors
 * @Description: role 页面
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\role\role.vue
-->
<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      pageName="role"
      :tableContentConfig="tableContentConfig"
      ref="pageContentRef"
    >
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import PageContent from '@/components/page-content'
import { tableContentConfig } from './config/content.config'
import { usePageSearch } from '@/hooks'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      searchFormConfig,
      tableContentConfig,

      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
