<script setup lang="ts">
import Smzq from "@/components/smzq.vue";
import {ref} from "vue";

const visible = ref(false)

</script>

<template>
  <div>
    <button @click="visible = true">组件显示</button>
    <button @click="visible = false">组件销毁</button>

    <smzq v-if="visible"></smzq>
  </div>
</template>