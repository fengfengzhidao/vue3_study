<script setup lang="ts">
const name = "枫枫"
const age = 12
const gender = true
const list = [1, 2, 3]
const obj = {name: name}

</script>

<template>
  <div>
    <div>
      插值表达式
      <div>name: {{ name }}</div>
      <div>age: {{ age }}</div>
      <div>age: {{ age + 18 }}</div>
      <div>gender: {{ gender }}</div>
      <div>gender: {{ gender ? '男' : '女' }}</div>
      <div>list: {{ list }}</div>
      <div>obj: {{ obj }}</div>
      <div>obj.name: {{ obj.name }}</div>
    </div>
  </div>
</template>