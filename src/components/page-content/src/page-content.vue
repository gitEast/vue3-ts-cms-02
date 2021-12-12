<!--
 * @Author: East
 * @Date: 2021-12-11 17:02:22
 * @LastEditTime: 2021-12-12 20:22:35
 * @LastEditors: Please set LastEditors
 * @Description: 对 EastTable 进行二次封装
 * @FilePath: \vue3-ts-cms-02\src\components\page-content\src\page-content.vue
-->
<template>
  <div class="page-content">
    <east-table
      :listData="list"
      v-bind="tableContentConfig"
      :dataCount="count"
      v-model:page="pageInfo"
    >
      <!-- header 部分 -->
      <template #rightHandler>
        <el-button size="mini" type="primary" v-if="isCreate">新增</el-button>
      </template>

      <!-- table 部分 -->
      <template
        v-for="item in propList"
        :key="item.slotName"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>

      <template #createAt="slotProps">
        <span v-time-format>{{ slotProps.row.createAt }}</span>
      </template>
      <template #updateAt="slotProps">
        <span v-time-format>{{ slotProps.row.updateAt }}</span>
      </template>

      <template #handler>
        <el-button type="text" size="mini" :icon="Edit" v-if="isUpdate"
          >编辑</el-button
        >
        <el-button type="text" size="mini" :icon="Delete" v-if="isDelete"
          >删除</el-button
        >
      </template>
    </east-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref, watch } from 'vue'
import { Edit, Delete } from '@element-plus/icons'

import { ITableProp } from '@/base-ui/table'
import EastTable from '@/base-ui/table'
import { useStore } from '@/store'

import { usePermission } from '@/hooks'

export default defineComponent({
  components: {
    EastTable
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    tableContentConfig: {
      type: Object as PropType<ITableProp>,
      required: true
    }
  },
  setup(props) {
    // 权限
    const isList = usePermission(props.pageName, 'query')
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')

    console.log(isCreate)

    // 分页相关
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData(), { deep: true })

    const store = useStore()
    // 请求页面数据
    const getPageData = (queryInfo: any = {}) => {
      if (isList) {
        store.dispatch('system/getPageListAction', {
          pageName: props.pageName,
          queryInfo: {
            offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
            size: pageInfo.value.pageSize,
            ...queryInfo
          }
        })
      }
    }
    getPageData()

    const list = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const count = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    const propList = props.tableContentConfig.propList.filter((item) => {
      const filterArr = ['createAt', 'updateAt', 'handler']
      return !filterArr.includes(item.slotName)
    })

    return {
      pageInfo,
      list,
      count,
      Edit,
      Delete,
      getPageData,
      propList,
      isCreate,
      isUpdate,
      isDelete
    }
  }
})
</script>

<style scoped lang="less"></style>
