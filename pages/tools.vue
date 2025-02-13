<script setup lang="ts">
import data from '../data/tools.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'ツール'">
        <div class="mt-12">
          <DescriptionLists :lists="data.lists" />
        </div>
      </PageTemplate>
    </div>
  </Transition>
</template>

<style scoped>
.flex-wrap {
  flex-wrap: wrap;
}
</style>