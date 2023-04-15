<template>
  <nav class="bg-blue text-white py-12">
    <ul class="flex">
      <template v-for="menu in dataStore.state.menus" :key="menu.id">
        <li><RouterLink :to="menu.url">{{ menu.name }}</RouterLink></li>
      </template>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores';
import { onMounted } from 'vue';

const dataStore = useDataStore()
onMounted(async ()=>{
  await dataStore.getMenus()
})

</script>

<style scoped>

</style>