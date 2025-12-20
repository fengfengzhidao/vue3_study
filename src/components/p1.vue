<script setup lang="ts">
import {useCounterStore} from "@/stores/counter.ts";

const store = useCounterStore()

</script>

<template>
  <div>
    p1组件 number: {{ store.count }}
  </div>
</template>

<style scoped>

</style>