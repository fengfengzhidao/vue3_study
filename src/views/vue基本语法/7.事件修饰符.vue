<script setup lang="ts">
function clickHandler(e: Event) {
  console.log("点击事件", e)
}

function handler(e: Event, name: string) {
  console.log(e.target, name)
}

function itemHandler(item: number){
  console.log(item)
}

function itemHandler1(e: Event){
  const target = e.target as HTMLDivElement
  if (target.classList.contains("item")){
    console.log(Number(target.dataset["item"]))
  }
}

</script>

<template>
  <div>
    事件修饰符
    <a href="https://www.fengfengzhidao.com" @click.prevent="clickHandler">枫枫知道</a>

    <br>
    <button @click.once="clickHandler">只触发一次</button>

    <br>
    有事件冒泡的
    <div class="A" @click="handler($event, 'A')">
      A
      <div class="B" @click="handler($event, 'B')">
        B
        <button @click="handler($event, 'Button')">点我</button>
      </div>
    </div>

    没有事件冒泡的
    <div class="A" @click.stop="handler($event, 'A')">
      A
      <div class="B" @click.stop="handler($event, 'B')">
        B
        <button @click.stop="handler($event, 'Button')">点我</button>
      </div>
    </div>

    self修饰符
    <div class="A" @click="handler($event, 'A')">
      A
      <div class="B" @click.self="handler($event, 'B')">
        B
        <button @click="handler($event, 'Button')">点我</button>
      </div>
    </div>

    没有事件委托
    <div class="list">
      <div @click="itemHandler(item)" class="item" v-for="item in 20">{{ item }}</div>
    </div>

    事件委托
    <div class="list" @click="itemHandler1" >
      <div class="item" :data-item="item" v-for="item in 20">{{ item }}</div>
    </div>

  </div>
</template>


<style scoped>
.A {
  background-color: brown;
  padding: 20px 40px;
  margin-top: 20px;
  color: white;

  .B {
    background-color: #222222;
    padding: 20px 40px;
    color: white;
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  color: white;
  background-color: brown;
  padding: 20px;

  .item {
    background-color: dodgerblue;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>