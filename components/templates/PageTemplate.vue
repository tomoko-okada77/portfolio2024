<script setup lang="ts">
interface Props {
  heading: string;
}
const props = defineProps<Props>();
</script>

<template>
  <Heading :text="heading"></Heading>
  <div class="md:p-8 md:ml-12">
    <slot />
  </div>
</template>