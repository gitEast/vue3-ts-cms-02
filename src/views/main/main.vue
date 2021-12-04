<!--
 * @Author: East
 * @Date: 2021-11-25 14:03:25
 * @LastEditTime: 2021-12-04 14:31:31
 * @LastEditors: Please set LastEditors
 * @Description: 所有页面的布局
 * @FilePath: \vue3-ts-cms-02\src\views\main\main.vue
-->
<template>
  <div class="main">
    <el-container>
      <el-aside width="210px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavMenu from '@/components/nav-menu'

export default defineComponent({
  components: {
    NavMenu
  },
  setup() {
    return {}
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
  text-align: center;
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
