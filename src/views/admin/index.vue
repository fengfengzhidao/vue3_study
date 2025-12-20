<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
console.log("admin base", route.meta)
</script>

<template>
  <div>
    <div>
      admin
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>