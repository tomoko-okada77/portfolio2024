<script setup lang="ts">
import data from '../data/profile.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'プロフィール'">
        <div>
          <DescriptionLists :lists="data.lists" />
        </div>
      </PageTemplate>
    </div>
  </Transition>
</template>