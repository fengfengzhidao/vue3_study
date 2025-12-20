<template>

</template>

<script lang="ts" setup>
const websocket = new WebSocket("wss://www.fengfengzhidao.com/ws/api/chat_groups")
websocket.onopen = function (){
  console.log("连接成功")

  // 发送消息
  // const msg = JSON.stringify({content: "113",  msg_type: 2})
  // websocket.send(msg)
  // console.log("发送消息成功", msg)
}
websocket.onerror = function (ev){
  console.log("连接失败", ev)
}
websocket.onclose = function (ev){
  console.log("服务端断开", ev)
}

websocket.onmessage = function (ev){
  console.log("收到消息", ev)
}



</script>
