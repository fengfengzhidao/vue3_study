<script setup lang="ts">
import {reactive, ref} from "vue";

const msg = ref("默认值")

const data = reactive({
  name: "",
  age: 18,
  gender: false,
  like: []
})

const text = ref("")
function inputHandler(e: InputEvent){
  text.value = (e.target as HTMLInputElement).value
}

</script>

<template>
  <div>
    双向数据绑定

    <div>
      <input placeholder="输入内容" v-model="msg">
      <br>
      输入的内容： {{ msg }}
    </div>

    <div>
      <input placeholder="输入名字" v-model="data.name">
      <br>
      <input placeholder="输入年龄" type="number" v-model.number="data.age">
      <br>
      选择性别
      <input type="radio" v-model="data.gender" :value="true">男
      <input type="radio" v-model="data.gender" :value="false">女

      <br>
      <input type="checkbox" v-model="data.like" value="羽毛球"> 羽毛球
      <input type="checkbox" v-model="data.like" value="篮球"> 篮球
      <input type="checkbox" v-model="data.like" value="足球"> 足球

      <div>
        输入的数据 {{ data }}
      </div>
    </div>

    v-model原理

    <div>
      <input placeholder="输入内容" @input="inputHandler" :value="text">
    </div>
    <div>
      输入的内容：{{ text }}
    </div>


  </div>
</template>


<style scoped>

</style>