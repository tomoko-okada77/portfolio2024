<script setup lang="ts">
interface Props {
  text: string;
  note?: string
}
const props = defineProps<Props>();
</script>

<template>
  <dt class="font-semibold text-2xl tracking-wider">
    <span class="md:min-w-[8rem] inline-block">{{ text }}</span>
    <small v-if="note" class="ml-4 font-medium text-xl">{{ note }}</small>
  </dt>
</template>