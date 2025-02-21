<script setup lang="ts">
import data from '../data/skills.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'スキル'">
        <div>
          <DescriptionLists :lists="data.lists" />
        </div>
      </PageTemplate>
    </div>
  </Transition>
</template>