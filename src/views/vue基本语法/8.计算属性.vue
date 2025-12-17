<script setup lang="ts">
import {ref} from "vue";
import {computed} from "vue";

const list = ref([{done: true}, {done: false}, {done: true}])
const doneCount = computed(()=>{
  console.log("doneCount")
  return list.value.filter((item)=>item.done).length
})

function doneCount2() {
  console.log("doneCount2")
  return list.value.filter((item)=>item.done).length
}

const menuList = [
  {name: "首页"},
  {name: "新闻"}
]
const menu = computed(()=>{
  return (index: number)=>{
    return menuList[index].name
  }
})


const msg1 = computed(()=>{
  return "xxx"
})

const firstName = ref("")
const lastName = ref("")

const fullName = computed({
  get(){
    return firstName.value + lastName.value
  },
  set(value: string){
    const [n1, n2] = value.split(" ")
    firstName.value = n1 || ""
    lastName.value = n2 || ""
  }
})


</script>

<template>
  <div>
    任务完成数量： {{ list.filter((item)=>item.done).length }}
    <br>
    任务完成数量（计算属性） ： {{ doneCount }} - {{ doneCount }}
    <br>
    任务完成数量（函数） ： {{ doneCount2() }} - {{ doneCount2() }}
    <br>
    菜单1 （计算属性带参数） {{ menu(0) }}
    <br>
    菜单2 （计算属性带参数） {{ menu(1) }}
    <br>
    尝试写计算属性 <input v-model="msg1">
    <br>
    输入姓名：<input v-model="fullName"> 完整名字 {{ fullName }}
  </div>
</template>