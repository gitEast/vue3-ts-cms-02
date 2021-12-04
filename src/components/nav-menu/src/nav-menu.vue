<!--
 * @Author: East
 * @Date: 2021-12-04 14:02:51
 * @LastEditTime: 2021-12-04 14:54:31
 * @LastEditors: Please set LastEditors
 * @Description: 菜单
 * @FilePath: \vue3-ts-cms-02\src\components\nav-menu\src\nav-menu.vue
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span>Vue3 + TS</span>
    </div>
    <el-menu
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      class="el-menu-vertical"
    >
      <template v-for="subMenu in userMenus" :key="subMenu.id">
        <template v-if="subMenu.type === 1">
          <!-- 存在二级菜单 -->
          <el-sub-menu :index="subMenu.id + ''">
            <template #title>
              <span>{{ subMenu.name }}</span>
            </template>
            <!-- 二级菜单显示 -->
            <template v-for="menu in subMenu.children" :key="menu.id">
              <el-menu-item :index="menu.id + ''">{{ menu.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <template v-else>
          <!-- 不存在二级菜单 -->
          <el-menu-item :index="menu.id + ''">
            <span>{{ subMenu.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    console.log(userMenus.value)

    return {
      userMenus
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  background-color: #001529;

  .logo {
    height: 28px;
    display: flex;
    flex-direction: row;
    padding: 12px 0px 8px 20px;
    font-size: 16px;
    line-height: 28px;
    font-weight: bold;

    .img {
      height: 100%;
      margin-right: 10px;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
</style>
