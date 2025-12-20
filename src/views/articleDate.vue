<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
<div>文章时间搜索 {{ route.params.date }}</div>
</template>

<style scoped>

</style>