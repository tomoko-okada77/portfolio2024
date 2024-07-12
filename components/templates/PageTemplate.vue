<script setup lang="ts">
interface Props {
  heading: string;
}
const props = defineProps<Props>();
</script>

<template>
  <Heading :text="heading"></Heading>
  <div class="md:p-12 md:ml-16">
    <slot />
  </div>
</template>