<template>

</template>

<script lang="ts" setup>
fetch("http://127.0.0.1:4523/m1/7591032-7329491-default/api/get_data?token=jwtToken",).then(response=>{
  response.json().then(res=>{
    console.log(res)
  })
})
// 会跨域
fetch("https://www.fengfengzhidao.com/api/settings/site",).then(response=>{
  response.json().then(res=>{
    console.log(res)
  })
})
// 请求自己的路径，配置了代理就不会跨域
fetch("/api/settings/site",).then(response=>{
  response.json().then(res=>{
    console.log(res)
  })
})
fetch("/xxx/api/settings/site",).then(response=>{
  response.json().then(res=>{
    console.log(res)
  })
})
</script>
