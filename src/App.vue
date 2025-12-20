<template>

</template>

<script lang="ts" setup>
console.log(import.meta.env.VITE_SERVER_URL)
  fetch("http://127.0.0.1:4523/m1/7591032-7329491-default/api/get_data?token=jwtToken",).then(response=>{
    response.json().then(res=>{
      console.log(res)
    })
  })
</script>
