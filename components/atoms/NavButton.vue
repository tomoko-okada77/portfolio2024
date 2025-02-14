<script setup lang="ts">
interface Emits {
  (event: "onClick"): void;
}
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="nav-link">
    <button @click="emit('onClick')" class="nav-button p-4 flex items-center justify-center">
      <img src="~/assets/images/icon_arrow.svg" alt=">">
    </button>
  </div>
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
  position: relative;
  z-index: 1;
}
</style>