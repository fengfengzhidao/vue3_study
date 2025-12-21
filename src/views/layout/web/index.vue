<script setup lang="ts">

import router from "@/router";

function goRouter(){
  router.push({name: "home"})
}

function goBilibil(){
  window.open("https://space.bilibili.com/359151217?spm_id_from=333.1007.0.0")
}

</script>

<template>
  <div class="index_view">
    <div class="title">Vu3零基础入门</div>
    <div class="action">
      <a-button type="primary" @click="goRouter">去后台</a-button>
      <a-button type="primary" status="success"  @click="goBilibil">去学习</a-button>
    </div>
  </div>
</template>

<style scoped>
.index_view{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .title{
    font-size: 30px;
    color: var(--color-text-2);
  }

  .action{
    margin-top: 20px;
    >button{
      margin-right: 10px;

      &:last-child{
        margin-right: 0;
      }
    }
  }
}
</style>