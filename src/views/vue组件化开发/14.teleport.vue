<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false)
</script>

<template>
  <div>
    <div class="box">
      <button @click="visible = !visible">弹窗显示和隐藏</button>
      <teleport to="body">
        <div class="modal" v-if="visible">
          <div class="modal_inner">
            <div class="header">
              <div class="title">弹窗标题</div>
              <div class="close" @click="visible=false">x</div>
            </div>
            <div class="body">
              我是弹窗内容
            </div>
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal_inner{
    background-color: white;
    border-radius: 5px;
    width: 300px;
    box-shadow: 2px 2px 3px 0 #57575766;

    .header{
      padding: 10px 20px;
      border-bottom: 1px solid #ebebeb;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .close{
        cursor: pointer;
      }
    }

    .body{
      padding: 10px 20px;
    }
  }
}
</style>