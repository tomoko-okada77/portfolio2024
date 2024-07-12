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
