<script setup lang="ts">
  const nav = [
    {
      label: 'Home',
      to: '/',
      page: 1
    },
    {
      label: 'プロフィール',
      to: '/profile',
      page: 2
    },
    {
      label: '経歴概要',
      to: '/career',
      page: 3
    },
    {
      label: 'スキル',
      to: '/skills',
      page: 4
    },
    {
      label: 'ツール',
      to: '/tools',
      page: 5
    },
    {
      label: '強み',
      to: '/strengths',
      page: 6
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
