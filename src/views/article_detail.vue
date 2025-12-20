<script setup lang="ts">
import {useRoute} from "vue-router";
import {watch} from "vue";

const route = useRoute()


watch(()=>route.params, ()=>{
  console.log("路由路径发生了变化")
})

console.log(route.hash) // 获取 #xxx

</script>

<template>
  <div>article detail {{ route.params.id }}</div>
</template>

<style scoped>

</style>