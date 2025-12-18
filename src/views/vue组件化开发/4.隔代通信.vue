<script setup lang="ts">
import Middle1 from "@/components/middle1.vue";
import {provide, ref} from "vue";
import bus from "@/utils/bus.ts";
function emit(name: string){
  alert(name)
}
provide("msg", "fengfeng")

const name = ref("")
provide("name", name)

bus.on("rev-msg", (data: string)=>{
  console.log("rev-msg", data)
})

function sendMsg(){
  bus.emit("s-msg", {name: "app"})
}


</script>

<template>
  <div>
    App
    <middle1 name="fengfeng" @emit="emit"></middle1>
    <br>
    name: {{ name }}

    <br>
    通过mitt发送消息到sub1
    <button @click="sendMsg">发送消息</button>
  </div>
</template>