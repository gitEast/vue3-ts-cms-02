<!--
 * @Author: East
 * @Date: 2021-11-25 14:03:25
 * @LastEditTime: 2021-12-05 11:58:27
 * @LastEditors: Please set LastEditors
 * @Description: 所有页面的布局
 * @FilePath: \vue3-ts-cms-02\src\views\main\main.vue
-->
<template>
  <div class="main">
    <el-container>
      <el-aside width="210px">
        <nav-menu />
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
      console.log(isCollapse.value)
    }
    return {
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #fff;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  background-color: rgb(12, 33, 53);
  color: #fff;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
