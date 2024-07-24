<script setup lang="ts">
import data from '../data/tools.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'ツール'">
        <ul class="flex flex-wrap">
          <li v-for="(tool, i) in data.lists" :key="tool.name" class="mb-10 font-semibold text-2xl tracking-wider">
            {{ tool.name }}
            <template v-if="i + 1 < data.lists.length">/</template>
          </li>
        </ul>
      </PageTemplate>
    </div>
  </Transition>
</template>

<style scoped>
.flex-wrap {
  flex-wrap: wrap;
}
</style>