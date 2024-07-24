<script setup lang="ts">
import data from '../data/tools.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'強み'">
        <p class="mt-12 font-semibold text-2xl tracking-wider leading-10">
          多数のプロジェクトに携わった経験から、<br>
          様々なアプローチで<br>
          問題を解決する能力を身に付けてまいりました。<br>
          スピーディーにキャッチアップを行ない、<br>
          新しい環境に順応する事ができると自負しております。<br>
          <br>
          また、これまでに培ったコミュニケーション能力を活かし、<br>
          自発的にプロダクトの成長に携わってまいりたいと思います
        </p>
      </PageTemplate>
    </div>
  </Transition>
</template>

<style scoped>
.flex-wrap {
  flex-wrap: wrap;
}
</style>