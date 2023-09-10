<template>
  <div class="logo" v-if="!settings.logoHide">
    <!-- 图片资源建议放在 public, 不经打包器处理直接复制, assets 中的资源会经打包器处理 -->
    <img :src="settings.logoPath" alt="logo" />
    <p>{{ settings.title }}</p>
  </div>
</template>

<script setup lang="ts">
import settings from '../../settings.ts'
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-logo-height;
  padding: 30px 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  p {
    margin-left: 10px;
    font-size: 20px;
  }
}
</style>
