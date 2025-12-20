<template>
  <div>
    router-vue

    <div>
      路由跳转

      <div class="nav">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/admin">admin home</router-link>
        <router-link to="/admin/info">admin info</router-link>
        <router-link to="/admin1">admin1 info</router-link>
        <router-link to="/admin1/info">admin1 info</router-link>
      </div>
      <div class="nav">
        <router-link :to="{name: 'home'}">home</router-link>
        <router-link :to="{name: 'about'}">about</router-link>
        <router-link :to="{name: 'articleDetail', params: {id: 1}}">article 1</router-link>
        <router-link :to="{name: 'articleDetail', params: {id: 2}}">article 2</router-link>
        <router-link :to="{name: 'articleDetail', params: {id: 3}}">article 3</router-link>
      </div>

      <div class="nav">
        <a href="javascript:void 0" @click="goRouter1('home')">home</a>
        <a href="javascript:void 0" @click="goRouter2('/about')">about</a>
        <a href="javascript:void 0" @click="goRouter3('adminHome')">admin Home</a>
      </div>

      <div class="view">
        <router-view></router-view>
      </div>

    </div>



  </div>

</template>

<script lang="ts" setup>
import router from "@/router";
import {useRouter} from "vue-router";

const router1 = useRouter()


// 用路由名称跳
function goRouter1(name: string){
  router.push({name: name})
}

// 用路径跳转
function goRouter2(path: string){
  router.push(path)
}

// 使用useRouter实例跳
function goRouter3(name: string){
  router1.push({name: name})
}

</script>