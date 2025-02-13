<script setup lang="ts">
interface List {
  label: string;
  text: string;
  note?: string
}
interface Props {
  lists: List[];
}
const props = defineProps<Props>();
</script>

<template>
  <DescriptionList v-for="list in lists" :key="list.label" :term="list.label" :definition="list.text" :note="list.note" class="mb-10" />
</template>