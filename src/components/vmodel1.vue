<script setup lang="ts">
interface Props {
  modelValue: string
}
const props = defineProps<Props>()
const emits = defineEmits(["update:modelValue"])

function iptHandler(e: Event){
  const val = (e.target as HTMLInputElement).value
  emits("update:modelValue", val)
}

</script>

<template>
<div>
  <input :value="props.modelValue" placeholder="请输入" @input="iptHandler">
  <br>
  输入的内容： {{ props.modelValue }}
</div>
</template>

<style scoped>

</style>