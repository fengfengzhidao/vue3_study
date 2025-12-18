<script setup lang="ts">
const emits = defineEmits(["rev"])
import bus from "@/utils/bus.ts";


function sendB2(){
  emits("rev", "你好")
}

function sendB21(){
  bus.emit("rev", "你好")
}


</script>

<template>
<div>
  兄弟1
  <br>
  <button @click="sendB2">向兄弟2发消息</button>
  <button @click="sendB21">通过bus向兄弟2发消息</button>

</div>
</template>

<style scoped>

</style>