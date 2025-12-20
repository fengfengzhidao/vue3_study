<script setup lang="ts">
import {useShoppingCarStore} from "@/stores/shopping.ts";
const store = useShoppingCarStore()


</script>

<template>
  <div>
    购物车展示组件

    <div>
      <div v-for="item in store.carItemList">
        <span>商品名称： {{ item.title }}</span>
        <span>商品价格： {{ item.price }}￥</span>
      </div>

      <div>总金额：{{ store.totalPrice }}￥</div>

    </div>
  </div>
</template>

<style scoped>

</style>