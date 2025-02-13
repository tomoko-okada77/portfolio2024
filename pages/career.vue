<script setup lang="ts">
import data from '../data/career.json'
</script>

<template>
  <Transition>
    <div>
      <PageTemplate :heading="'経歴概要'">
        <section v-for="(career, i) in data.lists" :key="i" class="section mb-12 flex text-2xl">
          <div class="date mr-8 font-semibold">
            {{ career.date }}
          </div>
          <div class="career pl-8">
            <h3 class="title mb-4 font-semibold">{{ career.title }}</h3>
            <p class="text-xl">{{ career.description }}</p>
            <div v-if="career.productions" class="mt-4 flex items-center text-xl">
              【制作実績】
              <ul class="flex">
                <li v-for="(product, j) in career.productions">
                  <template v-if="product.url">
                    <a :href="product.url" rel="nofollow noreferrer noopener" target="_blank" class="underline">
                      {{ product.name }}
                    </a>
                  </template>
                  <template v-else>
                    {{ product.name }}
                  </template>
                  <template v-if="j + 1 < career.productions.length">、</template>
                </li>
              </ul>
              など
            </div>
          </div>
        </section>
      </PageTemplate>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.section {
  &:not(:last-of-type) .career {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 16px;
      left: 0;
      width: 2px;
      height: calc(100% + 40px);
      background: #000;
    }
  } 
  .title {
    position: relative;
    &::before{
      content: "⚫︎";
      position: absolute;
      top: 0px;
      left: -48px;
      font-size: 36px;
      color: var(--color-primary);
      z-index: 1;
    }
  }
}
</style>