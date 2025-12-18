<script setup lang="ts">

import Slot1 from "@/components/slot1.vue";
import Slot2 from "@/components/slot2.vue";
import Slot3 from "@/components/slot3.vue";
</script>

<template>
  <div>
    <slot1>1111</slot1>
    <slot2>只替换默认的</slot2>
    <slot2>
      <template #head>head</template>
      <template #footer>footer</template>
      <template #default>body</template>
    </slot2>
    <slot3></slot3>
    <slot3>
      <template #default="slotData">
        <div>
          <b class="name">name: {{slotData.data.name}}</b>
        </div>
      </template>
    </slot3>
  </div>
</template>

<style scoped>
.name{
  color: #d74492;
}
</style>