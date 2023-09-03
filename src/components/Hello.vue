<template>
  <div>
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
    <div>
      <svg-icon name="rain-cloud" color="red"></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped></style>
