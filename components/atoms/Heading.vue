<script setup lang="ts">
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>

<template>
  <h2 class="heading mb-10 pt-4 md:pt-8 pb-8 font-bold text-secondary text-4xl tracking-wide">{{ text }}</h2>
</template>

<style lang="scss" scoped>
.heading {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 2rem;
    height: 1px;
    background: #000;
  }
}
</style>