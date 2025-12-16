<script setup lang="ts">
import Props from "@/components/props.vue";
import {ref} from "vue";
import Props1 from "@/components/props1.vue";
import Props2 from "@/components/props2.vue";

const name = ref("")

const obj = {
  name: "xxx",age: 12
}


</script>

<template>
  <div>
    父组件
    <input placeholder="输入name" v-model="name">
    <props :name="name" age="12"></props>

    <props1 name="1" :age="1" :user="obj" status="success"></props1>

    <props2 name="xxx"  status="warning"></props2>
  </div>
</template>


<style scoped>

</style>