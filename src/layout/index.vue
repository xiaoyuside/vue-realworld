<template>
  <div class="layout-container">
    <div class="layout-slider">
      <Logo></Logo>
      <ElScrollbar class="scroll-bar">
        <el-menu background-color="">
          <el-menu-item>首页</el-menu-item>
          <el-menu-item>大屏</el-menu-item>
        </el-menu>
      </ElScrollbar>
    </div>
    <div class="layout-tab">tab</div>
    <div class="layout-main">
      <p style="height: 10000px">ehll</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo/index.vue'
// import { ElScrollbar } from 'element-plus'
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;

  // background-color: $base-color;

  .layout-slider {
    width: $base-slider-width;
    height: 100vh;
    color: white;
    background-color: $base-slider-color;

    .scroll-bar {
      width: 100%;
      height: calc(100vh - $base-logo-height - 10px);
    }
  }

  .layout-tab {
    position: fixed;
    top: 0;
    left: $base-slider-width;
    width: calc(100% - $base-slider-width);
    height: $base-tab-height;
    background-color: gray;
  }

  .layout-main {
    position: absolute;
    top: $base-tab-height;
    left: $base-slider-width;
    width: calc(100% - $base-slider-width);
    height: calc(100vh - $base-tab-height);
    padding: 20px;

    // 防止内容溢出 (如果太多,会出现滚动条)
    overflow: auto;
    background-color: $base-color;
  }
}
</style>
