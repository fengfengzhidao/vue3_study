<script setup lang="ts">
import B1 from "@/components/b1.vue";
import B2 from "@/components/b2.vue";
import {ref} from "vue";

const b1Msg = ref("")
function revHandler(data: string){
  b1Msg.value = data
}

</script>

<template>
  <div>
    <b1 @rev="revHandler"></b1>
    <b2 :msg="b1Msg"></b2>
  </div>
</template>