<script setup lang="ts">
interface Props {
  label: string;
  to: string;
  width?: string;
  fontSize?: string;
}
const props = withDefaults(defineProps<Props>(), { width: "16rem", fontSize: "1.2rem" });
</script>

<template>
  <button :style="{ width, fontSize }" class="bg-white rounded-4xl font-bold">
    <NuxtLink :to="to" class="py-3 px-8 block">{{ label }}</NuxtLink>
  </button>
</template>