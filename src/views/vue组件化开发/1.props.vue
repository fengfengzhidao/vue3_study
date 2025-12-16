<script setup lang="ts">
import Props1 from "@/components/props1.vue";
import Props from "@/components/props.vue";
import Props2 from "@/components/props2.vue";
import {ref} from "vue";

const user = {
  name: "xxx", age: 11
}

const age = ref()
</script>

<template>
  <div>
    父组件
    <div>
      <props></props>
    </div>
    <div>
      <props1 name="xxx" :age="21" :user="user" status="success"></props1>
    </div>
    <div>
      <input placeholder="输入年龄" v-model="age" type="number">
      <props2 name="xxx" :age="age" status="success"></props2>
      <props2 name="xxx" :age="age"></props2>
    </div>
  </div>
</template>
