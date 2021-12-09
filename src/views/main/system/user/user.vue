<!--
 * @Author: East
 * @Date: 2021-12-06 10:27:53
 * @LastEditTime: 2021-12-09 19:07:30
 * @LastEditors: Please set LastEditors
 * @Description: 系统管理 - 用户管理 界面
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\user.vue
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <east-table :listData="userList" :propList="propList">
      <template #enable="slotProps">
        <el-tag>
          {{ slotProps.row.enable === 1 }}
        </el-tag>
      </template>
    </east-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import EastTable from '@/base-ui/table'
import { propList } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    EastTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      url: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)

    return {
      searchFormConfig,

      userList,
      propList
    }
  }
})
</script>

<style scoped></style>
