<template>
  <div>
    v-text和v-html
    <div>{{ msg }}</div>
    <div>{{ msg + "xxx"}}</div>
    v-text
    <div v-text="msg"></div>
    <div v-text="'xxxx' + msg"></div>
    <div v-text="`|${msg}|`"></div>
    <div v-text="html"></div>
    v-html
    <div v-html="msg"></div>
    <div v-html="html"></div>
  </div>

</template>

<script lang="ts" setup>
const msg = "枫枫知道"
const html = `<span style="color: #00bd7e">你好</span>`
</script>