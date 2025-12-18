<script setup lang="ts">
import Vmodel1 from "@/components/vmodel1.vue";
import {ref} from "vue";
import Vmodel2 from "@/components/vmodel2.vue";
const data = ref("")

const name = ref("")
const age = ref(0)

</script>

<template>
  <div>
    v-model单个值
    <vmodel1 v-model="data"></vmodel1>
    <br>
    data: {{ data }}
    <br>
    v-model多个值
    <vmodel2 v-model:name="name" v-model:age="age"></vmodel2>
    <br>
    name: {{ name }}
    age: {{ age }}
  </div>
</template>