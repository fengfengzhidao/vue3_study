<script setup lang="ts">
import {ref} from "vue";
import {onActivated, onDeactivated} from "vue";

const number = ref(0)

onActivated(()=>{
  console.log("onActivated")
})
onDeactivated(()=>{
  console.log("onDeactivated")
})

defineOptions({
  name: "c3"
})

</script>

<template>
  <div>
    <button @click="number ++">number++</button> number: {{number }}
  </div>
</template>

<style scoped>

</style>