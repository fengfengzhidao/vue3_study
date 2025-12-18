<script setup lang="ts">
interface Props {
  name: string
  age: number
}
const props = defineProps<Props>()
const emits = defineEmits(["update:name", "update:age"])

function iptHandler(e: Event){
  const val = (e.target as HTMLInputElement).value
  emits("update:name", val)
}
function ageHandler(e: Event){
  const val = Number((e.target as HTMLInputElement).value)
  emits("update:age", val)
}

</script>

<template>
<div>
  <input :value="props.name" placeholder="请输入name" @input="iptHandler">
  <input type="number" :value="props.age" placeholder="请输入age" @input="ageHandler">
  <br>
  输入的内容： {{ props }}
</div>
</template>

<style scoped>

</style>