<script setup lang="ts">
const emits = defineEmits(["submit", "muti-submit"])
function handler(e: Event){
    const val = (e.target as HTMLInputElement).value
    emits("submit", val)
    emits("muti-submit", val, "xxx")
}
</script>

<template>
<div>
  子组件1
  <input placeholder="输入" @keyup.enter="handler">
</div>
</template>

<style scoped>

</style>