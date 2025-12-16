<script setup lang="ts">
interface UserType {
  name: string
  age: number
}

interface Props {
  name: string
  gender?: boolean
  age?: number
  user?: UserType
  status?: 'success' | 'error' | 'warning'
}

const props = defineProps<Props>()
const {age = 18} = props

</script>

<template>
  <div>子组件2{{ props }} age:{{ age }}</div>
</template>

<style scoped>

</style>