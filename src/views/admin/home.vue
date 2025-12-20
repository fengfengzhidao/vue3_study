<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
console.log("admin home", route.meta)
</script>

<template>
  <div>
    home
  </div>
</template>

<style scoped>

</style>