<template>
  <div>
    <a-form>
      <a-form-item label="name">
        <a-input v-model="store.name"></a-input>
      </a-form-item>
      <a-form-item label="addr">
        <a-textarea v-model="store.addr"></a-textarea>
      </a-form-item>
    </a-form>
  </div>

</template>

<script lang="ts" setup>
import {useLocal1Store} from "@/stores/local1.ts";

const store = useLocal1Store()

</script>