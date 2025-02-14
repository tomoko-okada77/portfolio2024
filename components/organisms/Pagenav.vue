<script setup lang="ts">
import { useRoute } from 'vue-router';
import data from '../../data/nav.json'

const route = useRoute();
const router = useRouter();
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
  if (page.value === 1) return
  page.value--
  const path = getPath(page.value)
  if (path) {
    router.push(path)
  }
}
const next = () => {
  if (maxPage === page.value) return
  page.value++
  const path = getPath(page.value)
  if (path) {
    router.push(path)
  }
}
</script>

<template>
  <div class="relative z-10">
    <NavButtons :has-prev="page === 1 ? false : true" :has-next="page === maxPage ? false : true" @onClickPrev="prev" @onClickNext="next"  />
  </div>
</template>