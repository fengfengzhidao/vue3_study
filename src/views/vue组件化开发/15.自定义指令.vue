<script setup lang="ts">
import {ref} from "vue";

function clickHandler() {
  console.log("点击事件")
}

const visible = ref(true)

defineOptions({
  directives: {
    focus: {
      mounted(el:HTMLInputElement){
        el.focus()
      }
    }
  }
})

</script>

<template>
  <div>
    <button @click="visible=!visible">显示/隐藏</button>
    <button @click="clickHandler">不带防抖</button>
    <button v-if="visible" v-debounce="clickHandler">带防抖 500</button>
    <button v-if="visible" v-debounce:1000="clickHandler">带防抖 1000</button>

    <div>
      <input placeholder="输入内容" v-focus>
    </div>
  </div>
</template>