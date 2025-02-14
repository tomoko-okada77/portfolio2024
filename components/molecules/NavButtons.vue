<script setup lang="ts">
interface Props {
  prevTo: string | undefined;
  nextTo: string | undefined;
}
const props = defineProps<Props>();
interface Emits {
  (event: "onClickPrev"): void;
  (event: "onClickNext"): void;
}
const emit = defineEmits<Emits>();
</script>

<template>
  <NavButton v-if="prevTo" :to="prevTo" @onClick="emit('onClickPrev')" class="prev" />
  <NavButton v-if="nextTo" :to="nextTo" @onClick="emit('onClickNext')" class="next" />
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/_settings';

  .prev{
    left: 50px;
    transform: rotate(-180deg);
    @include media-sp {
      left: 28px;
    }
  }
  .next {
    right: 50px;
    @include media-sp {
      right: 28px;
    }
  }
</style>