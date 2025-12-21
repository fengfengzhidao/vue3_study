<script setup lang="ts">
const gender = false
const age = 12

</script>

<template>
  <div>
    条件渲染
    <div>
      v-if v-else
      <span v-if="gender">男</span>
      <span v-else>女</span>

      <br>
      v-if v-else-if v-else
      <span v-if="age >= 35">被优化</span>
      <span v-else-if="age >= 18">已成年</span>
      <span v-else>未成年</span>
    </div>

    <div>
      v-show
      <div>
        <span v-show="gender">男</span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.active {
  color: red;
}
</style>
