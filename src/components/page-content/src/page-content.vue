<!--
 * @Author: East
 * @Date: 2021-12-11 17:02:22
 * @LastEditTime: 2021-12-15 11:06:32
 * @LastEditors: Please set LastEditors
 * @Description: 对 EastTable 进行二次封装
 * @FilePath: \vue3-ts-cms-02\src\components\page-content\src\page-content.vue
-->
<template>
  <div class="page-content" :key="key">
    <east-table
      :listData="list"
      v-bind="tableContentConfig"
      :dataCount="count"
      v-model:page="pageInfo"
    >
      <!-- header 部分 -->
      <template #rightHandler>
        <el-button
          size="mini"
          type="primary"
          v-if="isCreate"
          @click="handleCreateClick"
        >
          {{ addBtnLable }}
        </el-button>
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
        <div>
          <span v-time-format="{ data: slotProps.row.createAt }"></span>
        </div>
      </template>
      <template #updateAt="slotProps">
        <span v-time-format="{ data: slotProps.row.updateAt }"></span>
      </template>

      <template #handler="scope">
        <el-button
          type="text"
          size="mini"
          :icon="Edit"
          v-if="isEdit"
          @click="handleEditClick(scope.row)"
        >
          编辑
        </el-button>
        <el-popconfirm
          v-if="isDelete"
          confirm-button-text="确定"
          cancel-button-text="取消"
          :icon="InfoFilled"
          icon-color="red"
          title="确定要删除?"
          @confirm="handleDeleteClick(scope.row)"
        >
          <template #reference>
            <el-button type="text" size="mini" :icon="Delete">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </east-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref, watch } from 'vue'
import { Edit, Delete, InfoFilled } from '@element-plus/icons'

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
    },
    addBtnLable: {
      type: String,
      default: '新增'
    }
  },
  emits: ['createBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    // 权限
    const isList = usePermission(props.pageName, 'query')
    const isCreate = usePermission(props.pageName, 'create')
    const isEdit = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')

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

    const key = ref<any>()
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

    // 删除按钮点击操作
    const handleDeleteClick = (row: any) => {
      // 在 vuex 中进行删除操作
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: row.id,
        queryInfo: {
          offset: 0,
          size: pageInfo.value.pageSize
        }
      })
    }

    // 新增事件
    const handleCreateClick = () => {
      emit('createBtnClick')
    }

    // 编辑事件：向父组件传递，让它去解决 page-modal 的问题
    const handleEditClick = (row: any) => {
      emit('editBtnClick', row)
    }

    return {
      pageInfo,
      list,
      count,

      Edit,
      Delete,

      getPageData,
      propList,
      isCreate,
      isEdit,
      isDelete,

      handleDeleteClick,
      InfoFilled,
      handleCreateClick,
      handleEditClick,
      key
    }
  }
})
</script>

<style scoped lang="less"></style>
