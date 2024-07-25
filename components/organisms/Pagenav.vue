<script setup lang="ts">
import { useRoute } from 'vue-router';
import data from '../../data/nav.json'

const route = useRoute();
const nav = ref(data.lists)

const getPage = (path: string) => {
  const target = nav.value.find(item => 
    item.to === path
  )
  return target?.page
}

let page = ref(getPage(route.path) || 1)
// let page = ref(1)

const maxPage = nav.value.reduce((max, item) => (item.page > max ? item.page : max), 0);

const getPath = (page: number) => {
  const target = nav.value.find(item => 
    item.page === page
  )
  return target?.to
}

const prev = (): void => {
  if(page.value <= 1) return
  page.value --
}
const next = () => {
  if(page.value >= maxPage) return
  page.value ++
}
</script>

<template>
  <div>
    <!-- page: {{ page }}
    prev:{{ getPath(page - 1) }}
    next:{{ getPath(page + 1) }} -->
    <NavButtons :prevTo="getPath(page - 1)" :nextTo="getPath(page)" @onClickPrev="prev" @onClickNext="next"  />
  </div>
</template>