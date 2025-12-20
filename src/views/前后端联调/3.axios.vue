<template>
  <div>
    <div v-for="item in data">
      <div>name: {{item.name}}</div>
      <div>addr: {{item.addr}}</div>
      <div>avatar: <img :src="item.avatar" :width="20" alt=""></div>
      <div>ip: {{item.ip}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {type dataType, getDataApi} from "@/api/data_api.ts";
import {ref} from "vue";
const data = ref<dataType[]>([])

async function getData(){
  const res = await getDataApi()
  if (res.code){
    return
  }
  // 如果是ref类型
  data.value = res.data

  // 如果是reactive类型
  // Object.assign(data, res.data)
}

getData()

</script>
