<script setup lang="ts">
import {useCounterStore} from "@/stores/counter.ts";
const store = useCounterStore()
</script>

<template>
  <div>
    p2组件 <button @click="store.increment">number++</button>
  </div>
</template>

<style scoped>

</style>