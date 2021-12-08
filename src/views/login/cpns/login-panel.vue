<!--
 * @Author: your name
 * @Date: 2021-11-29 10:24:35
 * @LastEditTime: 2021-12-07 09:37:02
 * @LastEditors: Please set LastEditors
 * @Description: tabs 组件
 * @FilePath: \vue3-ts-cms-02\src\views\login\cpns\login-tabs.vue
-->
<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <el-tabs v-model="currentTab" type="border-card" stretch>
      <el-tab-pane :name="accountTab">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon> 账号登录
          </span>
        </template>
        <login-account ref="AccountRef" />
      </el-tab-pane>
      <el-tab-pane :name="phoneTab">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon> 手机登录
          </span>
        </template>
        <login-phone ref="PhoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="addition">
      <el-checkbox v-model="ifKeepPwd">记住密码</el-checkbox>
      <el-link>忘记密码？</el-link>
    </div>
    <el-button type="primary" class="submit-btn" @click="handleLogin">
      登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    Avatar,
    Iphone,
    LoginAccount,
    LoginPhone
  },
  setup() {
    const ifKeepPwd = ref(true)
    const accountTab = 'account'
    const phoneTab = 'phone'
    const currentTab = ref<string>(accountTab)
    const AccountRef = ref<InstanceType<typeof LoginAccount>>()
    const PhoneRef = ref<InstanceType<typeof LoginPhone>>()
    const handleLogin = () => {
      if (currentTab.value === accountTab) {
        AccountRef.value?.loginAction(ifKeepPwd.value)
      } else {
        PhoneRef.value?.loginAction()
      }
    }
    return {
      ifKeepPwd,
      currentTab,
      accountTab,
      phoneTab,
      AccountRef,
      PhoneRef,
      handleLogin
    }
  }
})
</script>

<style lang="less">
.login-panel {
  text-align: center;
  margin-bottom: 120px;

  // 记住密码 与 忘记密码
  .addition {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  // 登录按钮
  .submit-btn {
    width: 100%;
  }
}
</style>
