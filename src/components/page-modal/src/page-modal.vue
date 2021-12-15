<!--
 * @Author: East
 * @Date: 2021-12-13 17:14:35
 * @LastEditTime: 2021-12-15 14:23:56
 * @LastEditors: Please set LastEditors
 * @Description: 模态框 -- 弹出 新建 or 编辑
 * @FilePath: \vue3-ts-cms-02\src\components\page-modal\src\page-modal.vue
-->
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="30%"
    center
    destroy-on-close
  >
    <east-form v-bind="modalConfig" v-model="formData"></east-form>

    <!-- 另外的插槽，定制化模态框的东西，如菜单权限树等 -->
    <slot></slot>

    <template #footer>
      <span class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">Cancel</el-button>
        <el-button size="mini" type="primary" @click="handleComfirmClick">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from 'vue'

import EastForm, { IFormItems, IForm } from '@/base-ui/form'

import { useStore } from '@/store'

export default defineComponent({
  components: {
    EastForm
  },
  props: {
    title: {
      type: String,
      default: '新建'
    },
    modalFormConfig: {
      type: Array as PropType<IFormItems[]>,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['refleshPageList'],
  setup(props, { emit }) {
    const dialogVisible = ref(false)

    // 模态框的 form 布局
    const modalConfig: IForm = {
      formItems: props.modalFormConfig,
      itemStyle: { padding: '0px 10px' },
      colLayout: { span: 24 }
    }

    // form 的数据
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalFormConfig) {
          formData.value[item.field] = newValue[item.field]
        }
      }
    )

    // 提交事件
    const store = useStore()
    const handleComfirmClick = async () => {
      console.log(props.otherInfo)
      if (props.defaultInfo.id) {
        // 修改
        await store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新增
        await store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          createData: { ...formData.value, ...props.otherInfo }
        })
      }
      dialogVisible.value = false
      emit('refleshPageList')
    }

    return {
      dialogVisible,
      modalConfig,
      formData,
      handleComfirmClick
    }
  }
})
</script>

<style scoped lang="less"></style>
<style>
.el-dialog--center .el-dialog__body {
  padding: 0 20px 0 0;
}
</style>
