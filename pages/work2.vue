<script setup lang="ts">
import data from '../data/work2.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'作品2'">
        <div class="mt-9 mb-5">
          <DescriptionLists :lists="data.lists" />
          <ul class="flex gap-x-4">
            <li class="work-item1"><img src="~/assets/images/coffee-bean-1.png" class="w-full" alt=""></li>
            <li class="work-item2"><img src="~/assets/images/coffee-bean-2.png" alt=""></li>
          </ul>
          <div class="text-center mt-5">
            <a href="https://tomoko-okada77.github.io/coffee-bean/" target="_blank" class="inline-flex items-center text-lg font-bold">サイトを見る<img src="~/assets/images/icon_arrow.svg" width="16" alt=">" class="ml-2"></a>
          </div>
        </div>
      </PageTemplate>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.work-item1 {
  width: 60%;
}
.work-item2 {
  width: 25%;
}
.label {
  width: 80%;
  margin: 0 auto 1rem;
  padding: 0.3rem 0;
  background: #ddd;
  border-radius: 2rem;
  text-align: center;
  font-size: 0.85rem;
}
</style>