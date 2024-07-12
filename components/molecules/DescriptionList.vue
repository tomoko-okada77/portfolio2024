<script setup lang="ts">
interface Props {
  term: string;
  definition: string
  note?: string
}
const props = defineProps<Props>();
</script>

<template>
  <dl class="md:flex">
    <DescriptionTerm :text="term" class="mb-4 md:mb-0" />
    <DescriptionDefinition :text="definition" :note="note" />
  </dl>
</template>