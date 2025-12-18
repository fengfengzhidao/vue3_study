<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {onMounted} from "vue";
import {onBeforeUpdate} from "vue";
import {onUpdated} from "vue";
import {onBeforeUnmount} from "vue";
import {onUnmounted} from "vue";

const number = ref(0)
console.log("setup 1")

const timer = setInterval(()=>{
  console.log(new Date().toLocaleString())
}, 2000)

// 组件挂载之前
onBeforeMount(() => {
  console.log("onBeforeMount")
})
// 组件挂载之后，dom可用
onMounted(() => {
  console.log("onMounted")
  const dom = document.getElementById("dom")
  console.log(3, dom)
})
// 组件更新之前 在更新dom之前
onBeforeUpdate(() => {
  console.log("onBeforeUpdate number ", document.querySelector(".number").innerHTML)
})
// 组件更新之后 在更新dom之后
onUpdated(() => {
  console.log("onUpdated number ", document.querySelector(".number").innerHTML)
})
//组件销毁之前
onBeforeUnmount(() => {
  console.log("onBeforeUnmount")
})
//组件销毁之后
onUnmounted(() => {
  console.log("onUnmounted")
  clearInterval(timer)
})
console.log("setup 2")

</script>

<template>
  <div>
    <div id="dom">我是dom</div>
    <button @click="number++">点我num++</button>
    <br>
    number: <span class="number">{{ number }}</span>
  </div>
</template>

<style scoped>

</style>