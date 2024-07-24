<script setup lang="ts">
definePageMeta({
  layout: 'top'
})
</script>

<template>
  <Transition>
    <div class="h-screen bg-primary flex items-center justify-center">
      <div>
        <h1 class="text-4xl md:text-7xl leading-10 font-black">Welcome to my Potfolio</h1>
        <!-- <p class="mt-12 text-center">画面をクリックしてください</p> -->
        <div class="mt-16 flex justify-center">
          <Button to="/profile" label="プロフィール" />
        </div>
      </div>
    </div>
  </Transition>
</template>