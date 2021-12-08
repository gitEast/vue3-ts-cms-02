<!--
 * @Author: East
 * @Date: 2021-12-05 11:33:48
 * @LastEditTime: 2021-12-08 15:59:52
 * @LastEditors: Please set LastEditors
 * @Description: 顶栏
 * @FilePath: \vue3-ts-cms-02\src\components\nav-header\src\nav-header.vue
-->
<template>
  <div class="nav-header">
    <el-icon size="20" class="icon" @click="handleFoldClick">
      <expand v-if="fold" />
      <fold v-else />
    </el-icon>
    <!-- <el-icon><fold /></el-icon> -->
    <div class="content">
      <east-breadcrumb :breadcrumbs="breadcrumbs"></east-breadcrumb>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Expand, Fold } from '@element-plus/icons'

import UserInfo from './user-info.vue'
import EastBreadcrumb from '@/base-ui/breadcrumb'
import { getBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    Expand,
    Fold,
    UserInfo,
    EastBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    // 折叠
    const fold = ref(false)
    const handleFoldClick = () => {
      fold.value = !fold.value
      emit('foldChange', fold.value)
    }

    // 面包屑
    const breadcrumbs = computed(() => {
      const store = useStore()
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      return getBreadcrumbs(userMenus, route.path)
    })

    return {
      fold,
      handleFoldClick,

      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  .icon {
    cursor: pointer;
  }

  .content {
    flex: 1; // 占据剩下的所有宽度
    margin-left: 10px;
    cursor: default;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
