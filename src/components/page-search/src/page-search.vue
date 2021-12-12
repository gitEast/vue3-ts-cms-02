<!--
 * @Author: your name
 * @Date: 2021-12-09 14:22:37
 * @LastEditTime: 2021-12-12 15:49:24
 * @LastEditors: Please set LastEditors
 * @Description: 再对表格封装一层：title + east-form + buttons
 * @FilePath: \vue3-ts-cms-02\src\components\page-search\src\page-search.vue
-->
<template>
  <div>
    <east-form v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <el-button size="mini" :icon="Refresh" @click="handleResetClick">
          重置
        </el-button>
        <el-button size="mini" :icon="Search" @click="handleQueryClick">
          查询
        </el-button>
      </template>
    </east-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { Search, Refresh } from '@element-plus/icons'

import EastForm, { IForm } from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object as PropType<IForm>,
      required: true
    }
  },
  components: {
    EastForm
  },
  emits: ['queryBtnClick', 'resetBtnClick'],
  setup(props, { emit }) {
    // formData 不应该被写死，是要随着 form 的配置项改变而变的
    const formOriginData: any = {}
    for (const item of props.searchFormConfig.formItems) {
      formOriginData[item.field] = undefined
    }
    const formData = ref(formOriginData)

    // 重置按钮
    const handleResetClick = () => {
      for (const item in formOriginData) {
        formData.value[item] = formOriginData[item]
        emit('resetBtnClick')
      }
    }
    // 提交按钮
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      Search,
      Refresh,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less"></style>
