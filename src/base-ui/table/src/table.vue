<!--
 * @Author: East
 * @Date: 2021-12-09 18:43:25
 * @LastEditTime: 2021-12-09 19:15:27
 * @LastEditors: Please set LastEditors
 * @Description: 封装 el-table
 * @FilePath: \vue3-ts-cms-02\src\base-ui\table\src\table.vue
-->
<template>
  <el-table :data="listData" border style="width: 100%">
    <template v-for="item in propList" :key="item.prop">
      <el-table-column :prop="item.prop" :label="item.label">
        <template v-slot="scope">
          <slot :name="item.prop" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { IPropItem } from '../type'

export default defineComponent({
  props: {
    propList: {
      type: Array as PropType<IPropItem[]>,
      required: true
    },
    listData: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
