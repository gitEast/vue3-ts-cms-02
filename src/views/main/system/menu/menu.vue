<!--
 * @Author: East
 * @Date: 2021-12-11 14:23:08
 * @LastEditTime: 2021-12-12 19:58:26
 * @LastEditors: Please set LastEditors
 * @Description: menu 页面
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\menu\menu.vue
-->
<template>
  <div class="menu">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      pageName="menu"
      :tableContentConfig="tableContentConfig"
      ref="pageContentRef"
    >
      <template #type="scope">
        {{ typeArr[scope.row.type - 1] }}
      </template>
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
  name: 'menus',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // 类型名称
    const typeArr = ['一级菜单', '二级菜单', '按钮']

    return {
      searchFormConfig,
      tableContentConfig,

      pageContentRef,
      handleResetClick,
      handleQueryClick,

      typeArr
    }
  }
})
</script>

<style scoped></style>
