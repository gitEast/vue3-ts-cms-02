<!--
 * @Author: your name
 * @Date: 2021-12-09 14:22:37
 * @LastEditTime: 2021-12-09 14:23:25
 * @LastEditors: Please set LastEditors
 * @Description: 再对表格封装一层：title + east-form + buttons
 * @FilePath: \vue3-ts-cms-02\src\components\page-search\src\page-search.vue
-->
<template>
  <div>
    <east-form v-bind="searchFormConfig" v-model="formData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import EastForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    EastForm
  },
  setup() {
    const formData = ref({
      userId: '',
      formName: '',
      formPwd: '',
      sport: '',
      time: []
    })

    return { formData }
  }
})
</script>

<style scoped lang="less"></style>
