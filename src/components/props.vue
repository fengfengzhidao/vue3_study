<script setup lang="ts">
const props = defineProps({
  name: {}, age: {}
})
function handler(){
  console.log(props)
  props.name = "xxx"
}
</script>

<template>
  <div>
    子组件
    name： {{ props.name }}
    age： {{ props.age }}

    <button @click="handler">获取最新的数据</button>
  </div>
</template>

<style scoped>

</style>