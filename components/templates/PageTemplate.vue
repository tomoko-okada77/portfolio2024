<script setup lang="ts">
interface Props {
  heading: string;
}
const props = defineProps<Props>();
</script>

<template>
  <Heading :text="heading"></Heading>
  <div class="page-wrapper flex justify-center items-center mx-auto">
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-wrapper {
    max-width: 980px;
    min-height: calc(100vh - 88px - 4rem);
  }
</style>