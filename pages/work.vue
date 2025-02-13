<script setup lang="ts">
import data from '../data/work.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'作品1'">
        <DescriptionLists :lists="data.lists" />
        <ul class="grid grid-cols-2 gap-x-4 mt-15 text-gray">
          <li><p class="label">商品一覧</p><img src="~/assets/images/marketit-1.png" class="w-full" alt=""></li>
          <li><p class="label">商品詳細</p><img src="~/assets/images/marketit-2.png" alt=""></li>
          <!-- <li><p class="label">マイページ</p><img src="~/assets/images/marketit-3.png" alt=""></li> -->
        </ul>
        <div class="text-center mt-8">
          <a href="https://github.com/tomoko-okada77/marketit" target="_blank" class="inline-flex items-center text-lg font-bold">Githubでコードを見る<img src="~/assets/images/icon_arrow.svg" width="16" alt=">" class="ml-2"></a>
        </div>
      </PageTemplate>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.label {
  width: 60%;
  margin: 0 auto 1rem;
  padding: 0.3rem 0;
  background: #ddd;
  border-radius: 2rem;
  text-align: center;
  font-size: 0.85rem;
  font-weight: bold;
}
</style>