<script setup lang="ts">

import {reactive} from "vue";
import type {carItemType} from "@/stores/shopping.ts";
import {useShoppingCarStore} from "@/stores/shopping.ts";

const data = reactive<carItemType>({
  title: "",
  price: 0
})

const store = useShoppingCarStore()
function addCar(){
  store.addItemByCar({
    title: data.title,
    price: data.price,
  })
  data.title = ""
  data.price = 0
}

</script>

<template>
  <div>
    加入购物车组件

    <div>
      <div>
        <input placeholder="输入商品名称" v-model="data.title">
      </div>
      <div>
        <input type="number" placeholder="输入商品价格" v-model.number="data.price">
      </div>
    </div>
    <button @click="addCar">加入购物车</button>
  </div>
</template>

<style scoped>

</style>