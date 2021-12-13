<!--
 * @Author: East
 * @Date: 2021-12-13 17:14:35
 * @LastEditTime: 2021-12-13 17:51:44
 * @LastEditors: Please set LastEditors
 * @Description: 模态框 -- 弹出 新建 or 编辑
 * @FilePath: \vue3-ts-cms-02\src\components\page-modal\src\page-modal.vue
-->
<template>
  <el-dialog v-model="dialogVisible" :title="title" width="30%" center>
    <east-form
      :colLayout="colLayout"
      :itemStyle="itemStyle"
      :formItems="modalConfig"
      v-model="formData"
    ></east-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">Cancel</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'

import EastForm, { IFormItems } from '@/base-ui/form'

export default defineComponent({
  components: {
    EastForm
  },
  props: {
    title: {
      type: String,
      default: '新建'
    },
    modalConfig: {
      type: Array as PropType<IFormItems[]>,
      required: true
    }
  },
  setup() {
    const dialogVisible = ref(true)

    // 模态框的 form 布局
    const colLayout = { span: 24 }
    const itemStyle = { padding: '0px 10px' }

    // form 的数据
    const formData = ref<any>({})

    return {
      dialogVisible,
      colLayout,
      itemStyle,
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>
