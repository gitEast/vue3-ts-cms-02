<!--
 * @Author: East
 * @Date: 2021-12-07 17:40:19
 * @LastEditTime: 2021-12-08 11:16:04
 * @LastEditors: Please set LastEditors
 * @Description: 封装 form
 * @FilePath: \vue3-ts-cms-02\src\base-ui\form\src\form.vue
-->
<template>
  <div class="form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :prop="item.prop"
              :rules="item.rules"
              :style="itemStyle"
            >
              <el-input
                v-if="item.type === 'input' || item.type === 'password'"
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
                v-model="form[item.prop]"
              >
              </el-input>

              <el-select
                v-else-if="item.type === 'select'"
                :placeholder="item.placeholder"
                style="width: 100%"
                v-model="form[item.prop]"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.label"
                  :value="option.value"
                  :label="option.label"
                >
                </el-option>
              </el-select>

              <el-date-picker
                v-else-if="item.type === 'datePicker'"
                type="daterange"
                :start-placeholder="item.otherOptions.placeholders[0]"
                :end-placeholder="item.otherOptions.placeholders[1]"
                v-model="form[item.prop]"
                style="width: 100%"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

import { IFormItems } from '../type'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItems[]>
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '5px 20px' })
    }
  },
  setup() {
    const form = reactive({})

    return {
      form
    }
  }
})
</script>

<style scoped lang="less">
.form {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  padding-bottom: 0;
}
</style>
