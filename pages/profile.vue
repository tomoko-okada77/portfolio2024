<script setup lang="ts">
import data from '../data/profile.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'プロフィール'">
        <DescriptionLists :lists="data.lists" />
      </PageTemplate>
    </div>
  </Transition>
</template>