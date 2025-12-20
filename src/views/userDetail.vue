<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()

</script>

<template>
<div>用户详情 {{ route.params.id }}</div>
</template>

<style scoped>

</style>