<script setup lang="ts">
import bus from "@/utils/bus.ts";
import {ref} from "vue";
interface Props {
  msg: string
}

const props = defineProps<Props>()

const revMsg = ref("")
bus.on("rev", (msg)=>{
  console.log(msg)
  revMsg.value = msg
})

</script>

<template>
<div>
  兄弟2
  <br>
  来自b1的数据 {{ props.msg }}
  <br>
  通过mitt接收的数据 {{ revMsg }}
</div>
</template>

<style scoped>

</style>