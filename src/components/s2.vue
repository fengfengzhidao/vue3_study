<script setup lang="ts">
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";

const route = useRoute()
const router = useRouter()

function search(tag: string) {
  router.push({
    name: route.name, query: {
      tag: tag
    }
  })
}

</script>

<template>
  <div>
    标签云
    <div>
      <span @click="search('python')">python</span>
      <span @click="search('go')">go</span>
      <span @click="search('JavaScript')">JavaScript</span>
    </div>
  </div>
</template>

<style scoped>

</style>