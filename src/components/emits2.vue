<script setup lang="ts">
const emits = defineEmits<{
  (e: "submit", val: string): void
  (e: "muti-submit", val: string, name: string): void
}>()
function handler(e: Event){
    const val = (e.target as HTMLInputElement).value
    emits("submit", val)
    emits("muti-submit", val, "xxx")
}
</script>

<template>
<div>
  子组件2
  <input placeholder="输入" @keyup.enter="handler">
</div>
</template>

<style scoped>

</style>