<script setup lang="ts">
interface Props {
  hasPrev: boolean
  hasNext: boolean
}
const props = defineProps<Props>();
interface Emits {
  (event: "onClickPrev"): void;
  (event: "onClickNext"): void;
}
const emit = defineEmits<Emits>();
</script>

<template>
  <NavButton v-if="hasPrev" @onClick="emit('onClickPrev')" class="prev" />
  <NavButton v-if="hasNext" @onClick="emit('onClickNext')" class="next" />
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