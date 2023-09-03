<template>
  <svg>
    <use xlink:href="{{ prefix + name }}" fill="{{ color }}"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
})
</script>

<style scoped></style>
