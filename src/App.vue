<template>
  <div>
    pinia
    <div>
      计数器案例
    </div>
    <div>
      <p1></p1>
      <p2></p2>
    </div>

    <div>
      选项式API
    </div>
    <div>
      state: name:{{ store.user.name }}
      <button @click="store.addAge()">age ++ </button>
      <button @click="store.setName('张三')">修改名字 </button>
      getters age: {{ store.getAge }}
    </div>

    <div>
      组合式API 购物车案例
    </div>
    <div>
      <p3></p3>
      <p4></p4>
    </div>
  </div>

</template>

<script lang="ts" setup>
import P1 from "@/components/p1.vue";
import P2 from "@/components/p2.vue";
import {useUserStore} from "@/stores/user.ts";
import P3 from "@/components/p3.vue";
import P4 from "@/components/p4.vue";
const store = useUserStore()

</script>