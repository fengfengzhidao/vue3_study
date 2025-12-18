<script setup lang="ts">
import {onMounted, ref} from "vue";
import Ref1 from "@/components/ref1.vue";
const domRef = ref()
const listRef = ref([])
const sRef = ref([])
const ref1 = ref()

onMounted(()=>{
  console.log(document.getElementById("dom"))
  console.log(domRef.value)
  console.log(listRef.value)
  console.log(sRef.value)
  console.log(ref1.value)
})

function sendMsg(){
  ref1.value.revMsg("你好")
}

const iptRef =ref()

function focus(){
  // const dom = document.getElementById("ipt") as HTMLInputElement
  // dom.focus()
  iptRef.value.focus()
}

</script>

<template>
  <div>
    <div ref="domRef" id="dom">dom</div>

    <div>
      <span v-for="item in 3" ref="listRef">{{ item }}</span>
    </div>

    <div>
      <span ref="sRef">10</span>
      <span ref="sRef">20</span>
      <span ref="sRef">30</span>
    </div>

    <div>
      <button @click="sendMsg">向ref1组件传递数据</button>
      <ref1 ref="ref1"></ref1>
    </div>

    <div>
      <button @click="focus">触发焦点</button>
      <input id="ipt" placeholder="输入..." ref="iptRef">
    </div>
  </div>
</template>