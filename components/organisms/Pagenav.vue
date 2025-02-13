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

const maxPage = nav.value.reduce((max, item) => (item.page > max ? item.page : max), 0);

const getPath = (page: number) => {
  const target = nav.value.find(item => 
    item.page === page
  )
  return target?.to
}

const prev = (): void => {
  if(page.value === 1) return
  page.value --
}
const next = () => {
  if (maxPage === page.value) return
  page.value ++
}

const prevTo = computed(() => {
  return getPath(page.value)
})
const nextTo = computed(() => {
  return getPath(page.value)
})
</script>

<template>
  <div>
    <NavButtons :prevTo="prevTo" :nextTo="nextTo" @onClickPrev="prev" @onClickNext="next"  />
  </div>
</template>