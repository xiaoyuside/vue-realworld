<script setup lang="ts">
import { onMounted } from 'vue'

// import Hello from '@/components/Hello.vue'
import request from './utils/request'

onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((resp) => {
    console.log(resp)
  })
})
</script>

<template>
  <div class="box">
    <Hello />
    <h2>test sass</h2>
  </div>
</template>

<style scoped lang="scss">
.box {
  border: 2px solid greenyellow;
}

div {
  h2 {
    color: $color;
  }
}
</style>
