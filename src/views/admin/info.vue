<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
console.log("admin info", route.meta)
</script>

<template>
  <div>
    info
  </div>
</template>

<style scoped>

</style>