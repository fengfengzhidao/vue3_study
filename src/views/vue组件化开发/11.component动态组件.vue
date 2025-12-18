<script setup lang="ts">
import {computed, ref} from "vue";
import C1 from "@/components/c1.vue";
import C2 from "@/components/c2.vue";

const visible = ref(false)

const conObj = computed(()=>{
  return visible.value ? C1 : C2
})

</script>

<template>
  <div>
    component 动态组件

    <div>
      <button @click="visible = !visible">切换动态组件</button>
    </div>
    <div>
      <c1 v-if="visible"></c1>
      <c2 v-else></c2>
    </div>

    <div>
      <component :is="conObj"></component>
    </div>
  </div>
</template>