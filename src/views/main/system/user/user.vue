<!--
 * @Author: East
 * @Date: 2021-12-06 10:27:53
 * @LastEditTime: 2021-12-08 15:00:58
 * @LastEditors: Please set LastEditors
 * @Description: 系统管理 - 用户管理 界面
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\user\user.vue
-->
<template>
  <div class="user">
    <east-form v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import EastForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    EastForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
