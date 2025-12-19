<script setup lang="ts">
import C3 from "@/components/c3.vue";
import {ref} from "vue";

const visible = ref(false)

</script>

<template>
  <div>
    <div>
      <button @click="visible = !visible">显示/隐藏</button>
    </div>
    <div>
      <keep-alive exclude="c3">
        <c3 v-if="visible"></c3>
      </keep-alive>
    </div>

  </div>
</template>