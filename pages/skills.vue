<script setup lang="ts">
import data from '../data/skills.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'スキル'">
        <DescriptionLists :lists="data.lists" />
      </PageTemplate>
    </div>
  </Transition>
</template>