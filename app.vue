<script setup lang="ts">
  const nav = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'External',
      to: '/external',
    },
    {
      label: 'Component',
      to: '/component',
    },
  ]
</script>

<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
