<!--
 * @Author: East
 * @Date: 2021-12-08 15:25:25
 * @LastEditTime: 2021-12-11 15:06:21
 * @LastEditors: Please set LastEditors
 * @Description: 封装 面包屑
 * @FilePath: \vue3-ts-cms-02\src\base-ui\breadcrumb\src\breadcrumb.vue
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.name">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../type'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
