<script setup lang="ts">
import {ref} from "vue";

const list = ref([
  {name: "枫枫", age: 12},
  {name: "zhangsan", age: 22},
])
</script>

<template>
    <div>
      作用域插槽
      <div class="ul">
        <div class="item" v-for="item in list">
          <slot :data="item">
            <span class="name">name: {{item.name }}</span>
            <span>age: {{ item.age }}</span>
          </slot>
        </div>
      </div>
    </div>
</template>

<style scoped>
.name{
  color: red;
}
</style>