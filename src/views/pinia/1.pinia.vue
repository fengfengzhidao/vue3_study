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
      <button @click="store.addAge()">age ++</button>
      <button @click="store.setName('张三')">修改名字</button>
      getters age: {{ store.getAge }}
    </div>

    <div>
      组合式API 购物车案例
    </div>
    <div>
      <p3></p3>
      <p4></p4>
    </div>

    <div>
      Store 实例内置方法
    </div>
    <div>
      <a-form>
        <a-form-item label="用户名">
          <a-input placeholder="用户名" v-model="formStore.user.name"></a-input>
        </a-form-item>
        <a-form-item label="地址">
          <a-input placeholder="地址" v-model="formStore.addr"></a-input>
        </a-form-item>
        <a-form-item label="年龄">
          <a-input-number placeholder="年龄" v-model="formStore.age"></a-input-number>
        </a-form-item>

        <a-button-group>
          <a-button @click="patch">$patch</a-button>
          <a-button @click="reset">$reset</a-button>
          <a-button @click="updateName">修改name</a-button>
        </a-button-group>
      </a-form>
    </div>
  </div>

</template>

<script lang="ts" setup>
import P1 from "@/components/p1.vue";
import P2 from "@/components/p2.vue";
import {useUserStore} from "@/stores/user.ts";
import P3 from "@/components/p3.vue";
import P4 from "@/components/p4.vue";
import {useFormStore} from "@/stores/form.ts";
import {onUnmounted, watch} from "vue";

const store = useUserStore()
const formStore = useFormStore()

function patch() {
  // 对象形式，适合批量修改
  formStore.$patch({
    // user: {
    //   name: "枫枫"
    // },
    // age: 18,
    addr: "湖南长沙"
  })

  // 函数形式，适合自修改等复杂的修改逻辑
  formStore.$patch((state) => {
    state.age++
    state.addr = "四川成都"
  })

}

function reset() {
  formStore.$reset()
}


const unsubscribe = formStore.$subscribe((mutation, state) => {
  // mutation：修改信息对象
  // mutation.type：修改类型（direct：直接赋值；patch object：$patch 对象；patch function：$patch 函数）
  // mutation.storeId：当前 Store 的唯一 ID
  // mutation.payload：修改的内容（仅 patch object 时有值）

  // state 修改之后的值
  console.log("$subscribe", {
    mutation,
    state,
  })
}, {immediate: true}) // 第二个参数和watch的第三个参数差不多


// watch可以实现监听某一个值的变化
const unWatch = watch(() => formStore.user.name, () => {
  console.log("formStore name 发生变化")
})

onUnmounted(() => {
  unsubscribe()
  unWatch.stop()
})

function updateName() {
  formStore.setName("张三")
}


formStore.$onAction(({
                       name, // Action 名称（如 'incrementAsync'）
                       args, // Action 调用时的参数数组
                       after, // Action 成功执行后的回调
                       onError, // Action 执行失败后的回调
                       store // 当前 Store 实例
                     }) => {
  console.log("action ", {name, args, store})
  after((resolvedReturn)=>{
    console.log("函数执行结果", resolvedReturn)
  })
})


</script>