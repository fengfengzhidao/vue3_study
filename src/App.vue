<script setup lang="ts">
function clickHandler() {
  console.log("点击事件")
}
</script>

<template>
  <div>
    <button @click="clickHandler">不带防抖</button>
    <button v-debounce="clickHandler">带防抖 500</button>
    <button v-debounce:1000="clickHandler">带防抖 1000</button>
  </div>
</template>