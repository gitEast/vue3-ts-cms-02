<!--
 * @Author: East
 * @Date: 2021-11-29 10:28:05
 * @LastEditTime: 2021-12-01 16:57:37
 * @LastEditors: Please set LastEditors
 * @Description: login - 账号登录
 * @FilePath: \vue3-ts-cms-02\src\views\login\cpns\login-account.vue
-->
<template>
  <div class="login-account">
    <el-form
      :model="account"
      :rules="formRules"
      ref="ElFormRef"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'

import localCache from '../../../utils/cache'

export default defineComponent({
  setup() {
    const ElFormRef = ref<InstanceType<typeof ElForm>>()
    const formRules = {
      name: [
        { required: true, message: '用户名是必传内容哦', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '密码是必传内容哦', trigger: 'blur' }
      ]
    }
    const account = reactive({
      name: localCache.getCache('name'),
      password: localCache.getCache('password')
    })
    const store = useStore()
    const loginAction = (isKeepPwd: boolean) => {
      ElFormRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPwd) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          console.log('真正的登录逻辑', account.name, account.password)
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      ElFormRef,
      formRules,
      account,
      loginAction
    }
  }
})
</script>

<style lang="less"></style>
