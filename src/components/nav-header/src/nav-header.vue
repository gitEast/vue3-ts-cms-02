<!--
 * @Author: your name
 * @Date: 2021-12-05 11:33:48
 * @LastEditTime: 2021-12-05 11:51:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-ts-cms-02\src\components\nav-header\src\nav-header.vue
-->
<template>
  <div class="nav-header">
    <el-icon size="20" class="icon" @click="handleFoldClick">
      <expand v-if="fold" />
      <fold v-else />
    </el-icon>
    <!-- <el-icon><fold /></el-icon> -->
    <span class="title">面包屑</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons'

export default defineComponent({
  components: {
    Expand,
    Fold
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const fold = ref(false)
    const handleFoldClick = () => {
      fold.value = !fold.value
      emit('foldChange', fold.value)
    }
    return {
      fold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon {
    cursor: pointer;
  }

  .title {
    margin-left: 10px;
    cursor: default;
  }
}
</style>
