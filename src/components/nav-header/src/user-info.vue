<!--
 * @Author: East
 * @Date: 2021-12-07 11:05:03
 * @LastEditTime: 2021-12-15 10:34:51
 * @LastEditors: Please set LastEditors
 * @Description: 顶栏 - 用户信息
 * @FilePath: \vue3-ts-cms-02\src\components\nav-header\src\user-info.vue
-->
<template>
  <div class="user-info">
    <el-icon><avatar /></el-icon>
    <el-dropdown class="dropdown">
      <span class="el-dropdown-link">
        {{ userName }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Avatar } from '@element-plus/icons'

import { useStore } from '@/store'
import localCache from '@/utils/cache'

export default defineComponent({
  components: {
    Avatar
  },
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.login.userInfo.name)

    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    return {
      userName,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;

  .dropdown {
    margin-left: 5px;

    .el-dropdown-link {
      cursor: pointer;
    }
  }
}
</style>
