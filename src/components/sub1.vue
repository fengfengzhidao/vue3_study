<script setup lang="ts">
import {inject} from "vue";
import bus from "@/utils/bus.ts";

interface Props {
  name: string
}

const props = defineProps<Props>()
const emits = defineEmits(["emit"])

function emit(name: string){
  emits("emit", name)
}

const msg = inject("msg")
const name = inject("name")

function sendMsg(){
  bus.emit("rev-msg", "消息内容")
}

bus.on("s-msg", (data: object)=>{
  console.log("s-msg", data)
})


</script>

<template>
<div>
  孙子组件

  name: {{ props.name }}
  <button @click="emit('sun')">告诉App组件</button>

  <br>
  通过inject拿到的数据： {{ msg }}
  <br>
  通过inject拿到的响应式数据
  <input v-model="name">
  name: {{ name }}

  <br>
  通过mitt发送消息到app
  <button @click="sendMsg">发送消息</button>
</div>
</template>

<style scoped>

</style>