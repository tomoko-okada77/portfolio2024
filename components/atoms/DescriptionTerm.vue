<script setup lang="ts">
interface Props {
  text: string;
  minWidth?: string;
}
const props = withDefaults(defineProps<Props>(), { minWidth: "18rem" });

</script>

<template>
  <dt :style="{ minWidth }" class="font-semibold text-secondary text-2xl tracking-wider">{{ text }}</dt>
</template>