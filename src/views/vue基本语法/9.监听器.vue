<script setup lang="ts">
import {reactive, ref, watch, watchEffect} from "vue";

const msg = ref("")

watch(msg, (newValue, oldValue)=>{
  console.log("单个数据", newValue, oldValue)
})

const name = ref("")
const age = ref(0)
watch([name, age], (newValue, oldValue)=>{
  // 这里的value就是 [name, age] 对应的列表数据
  console.log("多个数据", newValue, oldValue)
})


const data = reactive({
  name: "",
  user: {
    info: ""
  }
})

watch(data, (newVal, oldVal)=>{
  console.log("监听对象", newVal, oldVal)
})

watch(()=>data.user.info, (newValue, oldValue)=>{
  console.log("监听info", newValue, oldValue)
})

watch(data, (newVal, oldVal)=>{
  console.log("监听对象1", newVal, oldVal)
}, {deep: false})

watch(data, (newVal, oldVal)=>{
  console.log("监听对象2", newVal, oldVal)
}, {immediate: true})

const we = ref("")
const handler = watchEffect(()=>{
  console.log("we:", we.value)
})


</script>

<template>
  <div>
    监听器
    <br>
    监听单个数据
    <input placeholder="输入" v-model="msg">
    <br>
    监听多个数据
    <input v-model="name">
    <input type="number" v-model.number="age">
    <br>
    监听reactive对象
    <input placeholder="修改name" v-model="data.name">
    <input placeholder="修改info" v-model="data.user.info">
    <br>
    watchEffect
    <input v-model="we">
    <button @click="handler.pause">暂停监听</button>
    <button @click="handler.resume">恢复监听</button>
  </div>
</template>