<script setup lang="ts">
import {onBeforeRouteUpdate} from "vue-router";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const tag = ref("")

// 刷新的时候不会调这个回调
// onBeforeRouteUpdate((to, from, next)=>{
//   const t = to.query.tag
//   if (t){
//     tag.value = t
//   }
//   next()
// })

watch(()=>route.query.tag, (newValue, oldValue)=>{
  tag.value = newValue
}, {immediate: true})


</script>

<template>
  <div>
    文章列表 搜索的内容是： {{ tag }}
  </div>
</template>

<style scoped>

</style>