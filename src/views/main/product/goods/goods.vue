<!--
 * @Author: East
 * @Date: 2021-12-11 14:23:08
 * @LastEditTime: 2021-12-12 19:53:18
 * @LastEditors: Please set LastEditors
 * @Description: good 页面
 * @FilePath: \vue3-ts-cms-02\src\views\main\product\goods\goods.vue
-->
<template>
  <div class="goods">
    <page-content
      pageName="goods"
      :tableContentConfig="tableContentConfig"
      ref="pageContentRef"
    >
      <template #imgUrl="slotProps">
        <el-image
          style="width: 120px; height: 120px"
          :src="slotProps.row.imgUrl"
          :preview-src-list="[slotProps.row.imgUrl]"
          :initial-index="1"
        >
        </el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import { tableContentConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return { tableContentConfig }
  }
})
</script>

<style scoped></style>
