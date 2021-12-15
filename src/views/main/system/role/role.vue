<!--
 * @Author: East
 * @Date: 2021-12-11 14:23:08
 * @LastEditTime: 2021-12-15 14:24:08
 * @LastEditors: Please set LastEditors
 * @Description: role 页面
 * @FilePath: \vue3-ts-cms-02\src\views\main\system\role\role.vue
-->
<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>
    <page-content
      pageName="role"
      :tableContentConfig="tableContentConfig"
      ref="pageContentRef"
      @createBtnClick="handleCreateData"
      @editBtnClick="handleEditData"
    >
    </page-content>
    <page-modal
      :modalFormConfig="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="role"
      @refleshPageList="handleResetClick"
      :otherInfo="otherInfo"
    >
      <!-- 是时候在 默认插槽 放我的 菜单权限树了 -->
      <div class="menu-tree">
        <el-tree
          ref="treeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          highlight-current
          :props="treeProps"
          @check="handleCheck"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from 'vue'
import { ElTree } from 'element-plus'

import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

import PageContent from '@/components/page-content'
import { tableContentConfig } from './config/content.config'

import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

import { usePageSearch, usePageModal } from '@/hooks'
import { useStore } from '@/store'
import { mapMenusToLeafKeys } from '@/utils/map-menus'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // 菜单权限树
    const treeRef = ref<InstanceType<typeof ElTree>>()
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    const treeProps = {
      children: 'children',
      label: 'name'
    }
    // 要把菜单权限传给 page-modal，因为提交操作在那边
    const otherInfo = ref<any>({})
    const handleCheck = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      otherInfo.value = {
        menuList: [...checkedKeys, ...halfCheckedKeys]
      }
    }

    const createCallback = () => {
      // 空 der!
    }
    const editCallback = (row: any) => {
      // 编辑职位时，已有的菜单回显
      const leafKeys = mapMenusToLeafKeys(row.menuList)
      nextTick(() => {
        treeRef.value?.setCheckedKeys(leafKeys, true)
      })
    }
    const [pageModalRef, defaultInfo, handleCreateData, handleEditData] =
      usePageModal(createCallback, editCallback)

    return {
      searchFormConfig,
      tableContentConfig,
      modalConfig,

      treeRef,
      menus,
      treeProps,
      otherInfo,
      handleCheck,

      pageContentRef,
      handleResetClick,
      handleQueryClick,

      pageModalRef,
      defaultInfo,
      handleCreateData,
      handleEditData
    }
  }
})
</script>

<style lang="less" scoped>
.menu-tree {
  padding-left: 90px;
  margin-top: -25px;
  margin-bottom: 10px;
}
</style>
