<script setup lang="ts">
import data from '../data/skills.json'
</script>

<template>
  <PageTemplate :heading="'スキル'">
    <DescriptionLists :lists="data.lists" />
  </PageTemplate>
</template>