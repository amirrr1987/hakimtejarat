<template>
  <div>path: '/',</div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const dataStore = useDataStore()

onMounted(async () => {
  let temp = ''
  if (route.path === '/') {
    temp = 'home'
  }

  await dataStore.getPage(temp as string)
})
</script>

<style></style>
