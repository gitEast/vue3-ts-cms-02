<!--
 * @Author: East
 * @Date: 2021-12-09 18:43:25
 * @LastEditTime: 2021-12-15 10:31:56
 * @LastEditors: Please set LastEditors
 * @Description: 封装 el-table
 * @FilePath: \vue3-ts-cms-02\src\base-ui\table\src\table.vue
-->
<template>
  <div class="east-table">
    <!-- 表头 -->
    <div class="header" v-if="ifHeader">
      <div class="left">
        <el-icon :color="'#999'" :size="18"><document /></el-icon>
        <span class="title">{{ title }}</span>
      </div>
      <div class="right">
        <slot name="rightHandler"></slot>
      </div>
    </div>

    <!-- 表格 -->
    <el-table
      :data="listData"
      border
      style="width: 100%"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="ifSelect"
        type="selection"
        width="55"
        align="center"
      />
      <el-table-column
        v-if="ifIndex"
        label="索引"
        type="index"
        width="60"
        align="center"
      />
      <template v-for="item in propList" :key="item.slotName">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.slotName] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 分页 -->
    <div class="footer" v-if="ifFooter">
      <el-pagination
        v-model:currentPage="currentPage"
        :page-sizes="[10, 20, 40, 80]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Document } from '@element-plus/icons'

import { IPropItem } from '../type'

export default defineComponent({
  components: {
    Document
  },
  props: {
    title: {
      type: String,
      default: '列表'
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    ifSelect: {
      type: Boolean,
      default: true
    },
    ifIndex: {
      type: Boolean,
      default: false
    },
    propList: {
      type: Array as PropType<IPropItem[]>,
      required: true
    },
    listData: {
      type: Array,
      required: true
    },
    dataCount: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 10 })
    },
    ifHeader: {
      type: Boolean,
      default: true
    },
    ifFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:page'],
  setup(props, { emit }) {
    const currentPage = ref(props.page.currentPage)
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    return {
      currentPage,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.east-table {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;

  .header {
    padding: 0px 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left {
      display: flex;
      flex-direction: row;
      align-items: center;

      .title {
        margin-left: 5px;
        color: #999;
        font-size: 14px;
      }
    }
  }

  .footer {
    padding: 10px 10px 0;
  }
}
</style>
