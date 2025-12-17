<script setup lang="ts">
import Emits1 from "@/components/emits1.vue";
import Emits2 from "@/components/emits2.vue";

function submit(val: string) {
  console.log(val)
}

function mutiSubmit(val: string, name: string) {
  console.log(val, name)
}
</script>

<template>
  <div>
    父组件
    <div>
      <emits1 @submit="submit" @muti-submit="mutiSubmit"></emits1>
    </div>
    <div>
      <emits2 @submit="submit" @muti-submit="mutiSubmit"></emits2>
    </div>
  </div>
</template>
