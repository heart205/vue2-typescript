<script setup lang="ts">
import { ElSelect, ElOption } from 'element-plus'
import { useAttrs } from 'vue'
import type { Options } from '../helper'

defineOptions({ name: 'SelectWrapper' })
const modalValue = defineModel<string | number | Record<string, unknown>>()

const { options, ...attr } = useAttrs() as { options: Options }
</script>

<template>
  <ElSelect v-model="modalValue" v-bind="attr">
    <ElOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></ElOption>
  </ElSelect>
</template>
