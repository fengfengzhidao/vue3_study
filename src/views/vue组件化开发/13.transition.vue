<script setup lang="ts">
import {ref} from "vue";

const visible = ref(true)
</script>

<template>
  <div>
    <button @click="visible = !visible">显示/隐藏</button>
    <transition appear name="fade">
      <div v-if="visible" class="box"></div>
    </transition>
  </div>
</template>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: #d74492;
}

/* 1. 进入/离开的初始状态 */
.fade-enter-from {
  opacity: 0; /* 透明 */
  transform: translateX(-20px); /* 左移20px */
}
.fade-leave-to {
  opacity: 0; /* 透明 */
  transform: translateX(20px); /* 右移20px */
}

/* 2. 进入/离开的动画过程 */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease; /* 动画时长0.5s，缓动 */
}

/* 3. 进入完成的状态（可选，默认继承原样式） */
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>