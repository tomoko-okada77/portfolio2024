<script setup lang="ts">
import data from '../data/skills.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'スキル'">
        <div class="mt-10">
          <DescriptionLists :lists="data.lists" />
        </div>
      </PageTemplate>
    </div>
  </Transition>
</template>