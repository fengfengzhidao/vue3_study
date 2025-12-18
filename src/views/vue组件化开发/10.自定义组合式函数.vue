<script setup lang="ts">
import {useCounter} from "@/use_tools/useCounter.ts";

const {
  count, reset, increment, decrement
} = useCounter(10)


</script>

<template>
  <div>
    <div>
      <button @click="increment">加1</button>
      <button @click="decrement">减1</button>
      <button @click="reset">重置</button>
    </div>
    <div>
      number: {{ count }}
    </div>

  </div>
</template>