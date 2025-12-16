<script setup lang="ts">
const props = defineProps({
  name: {
    required: true,
    type: String
  },
  age: {
    type: Number,
    default: 18
  },
  isMall: {
    type: Boolean,
  },
  user: {
    type: Object,
    default: () => ({name: '默认用户', age: 18})
  },
  // 自定义校验
  status: {
    type: String,
    validator: (value) => {
      return ['success', 'error', 'warning'].includes(value)
    }
  }
})

</script>

<template>
  <div>
    子组件1
    {{ props }}
  </div>
</template>

<style scoped>

</style>