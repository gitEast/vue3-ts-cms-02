<!--
 * @Author: your name
 * @Date: 2021-11-25 14:03:31
 * @LastEditTime: 2021-11-30 14:42:41
 * @LastEditors: Please set LastEditors
 * @Description: login 页面
 * @FilePath: \vue3-ts-cms-02\src\views\login\login.vue
-->
<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less">
.login {
  background-image: url('~assets/img/login-bg.svg');
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
