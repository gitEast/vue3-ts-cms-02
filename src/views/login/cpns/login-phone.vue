<!--
 * @Author: your name
 * @Date: 2021-11-29 10:28:14
 * @LastEditTime: 2021-11-29 10:55:20
 * @LastEditors: Please set LastEditors
 * @Description: login - 手机登录
 * @FilePath: \vue3-ts-cms-02\src\views\login\cpns\login-phone.vue
-->
<template>
  <div class="login-phone">
    <el-form :rules="formRules">
      <el-form-item label="手机号" prop="phone">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="validCode">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const formRules = {
      phone: [
        { required: true, message: '手机号是必传内容哦', trigger: 'blur' }
      ],
      validCode: [
        { required: true, message: '验证码是必传内容哦', trigger: 'blur' }
      ]
    }

    const loginAction = () => {
      console.log('phone 中的 loginAction')
    }

    return {
      formRules,
      loginAction
    }
  }
})
</script>

<style lang="less"></style>
