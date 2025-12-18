<script setup lang="ts">

import Sub1 from "@/components/sub1.vue";

interface Props {
  name: string
}

const props = defineProps<Props>()
const emits = defineEmits(["emit"])

function emit(name: string, x: string){
    // 中间组件也可以包装一下
    console.log(x)
    emits("emit", name)
}

</script>

<template>
  <div>
    中间组件
<!--    <sub1 :name="props.name" @emit="emits('emit', $event)"></sub1>-->
    <sub1 :name="props.name" @emit="emit($event, 'xxx')"></sub1>
  </div>
</template>

<style scoped>

</style>