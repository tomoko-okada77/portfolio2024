<script setup lang="ts">
  const nav = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'プロフィール',
      to: '/profile',
    },
    {
      label: 'スキル',
      to: '/skills',
    },
  ]
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* transform: translateX(-100%); */
}
</style>
