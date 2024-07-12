<script setup lang="ts">
import data from '../data/profile.json'
</script>

<template>
  <PageTemplate :heading="'プロフィール'">
    <DescriptionLists :lists="data.lists" />
  </PageTemplate>
</template>