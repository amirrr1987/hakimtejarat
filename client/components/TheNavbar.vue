<template>
  <div>
    <h1>Menu List</h1>
    <ul>
      <template v-for="menu in menus" :key="menu.id">
        <li>
          <NuxtLink :to="menu.url">{{ menu.name }}</NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import axios from "axios";

interface Menu {
  id: number;
  name: string;
  url: string;
  icon?: string;
}

const menus = reactive<Menu[]>([]);

onMounted(async () => {
  const { data } = await axios.get("http://localhost:5000/api/menus");
  // menus.value = data;
  Object.assign(menus, data.data);
});
</script>
