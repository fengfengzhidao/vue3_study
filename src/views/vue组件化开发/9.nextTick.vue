<script setup lang="ts">
import {nextTick, ref} from "vue";

const number = ref(0)
const spanRef = ref()

function numberPlus(){
  number.value ++
  console.log("old spanRef", spanRef.value.innerText)
  nextTick(()=>{
    console.log("new spanRef", spanRef.value.innerText)
  })
}

</script>

<template>
  <div>
    <button @click="numberPlus">number++</button>
    number: <span ref="spanRef">{{ number }}</span>
  </div>
</template>