<script setup lang="ts">

</script>

<template>
    <div>
      具名插槽

      <div class="item head">
        <slot name="head"></slot>
      </div>
      <div class="item body">
        <slot></slot>
      </div>
      <div class="item footer">
        <slot name="footer"></slot>
      </div>
    </div>
</template>

<style scoped>
.item{
  color: white;
  width: 200px;
  height: 50px;
}
.head{
  background-color: #ffae00;
}
.body{
  background-color: #d74492;
}
.footer{
  background-color: #e01cdd;
}
</style>