<script setup lang="ts">
import {ref} from "vue";

const msg = ref("")

function revMsg(data: string){
  msg.value = data
}

defineExpose({
  revMsg
})

</script>

<template>
  <div>
    通过ref调用方法传递来的数据： {{ msg}}
  </div>
</template>

<style scoped>

</style>