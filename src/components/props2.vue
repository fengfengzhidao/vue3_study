<script setup lang="ts">

interface Props {
  name: string
  age?: number
  isMall?: boolean
  user?: object
  status?: 'success' | 'error' | 'warning'
}


const props = withDefaults(defineProps<Props>(), {
  age: 18
})
const {age = 20} = props

</script>

<template>
  <div>
    子组件2
    {{ props }} age: {{ age }}
  </div>
</template>

<style scoped>

</style>