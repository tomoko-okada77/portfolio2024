<script setup lang="ts">
interface Props {
  to: string | undefined;
}
const props = defineProps<Props>();
interface Emits {
  (event: "onClick"): void;
}
const emit = defineEmits<Emits>();
</script>

<template>
  <NuxtLink :to="to" class="nav-link">
    <button @click="emit('onClick')" class="nav-button p-4 flex items-center justify-center">
      <img src="~/assets/images/icon_arrow.svg" alt=">">
    </button>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.nav-link {
  position: fixed;
  top: 50%;
}
.nav-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #000;
}
</style>