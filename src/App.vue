<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <div class="box">
    <el-button
      type="primary"
      size="default"
      @click="
        () => {
          console.log('hello')
        }
      "
      :icon="Edit"
    >
      hello
    </el-button>
  </div>
</template>

<style scoped>
.box {
  border: 2px solid greenyellow;
}
</style>
