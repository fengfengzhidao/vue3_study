<script setup lang="ts">
import {useRoute} from "vue-router";
import {watch} from "vue";
import {onBeforeRouteUpdate, onBeforeRouteLeave} from "vue-router";

const route = useRoute()


watch(()=>route.params, ()=>{
  console.log("路由路径发生了变化")
})

onBeforeRouteUpdate((to, from, next) => {
  console.log("onBeforeRouteUpdate to", to.params.id)
  next()
})
onBeforeRouteLeave((to, from, next) => {
  console.log("onBeforeRouteLeave to", to)
  const confirmLeave = confirm('是否确定离开？')
  next(confirmLeave) // 直接传布尔值，true=跳转，false=取消
})


</script>

<template>
  <div>article detail {{ route.params.id }}</div>
</template>

<style scoped>

</style>