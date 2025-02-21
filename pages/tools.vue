<script setup lang="ts">
import data from '../data/tools.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'ツール'">
        <DescriptionLists :lists="data.lists" />
      </PageTemplate>
    </div>
  </Transition>
</template>

<style scoped>
.flex-wrap {
  flex-wrap: wrap;
}
</style>