<template>
  <RouterView />
</template>
<script setup lang="ts">
import { useAppConfigStore } from "@/stores/AppConfig";
const appConfigStore = useAppConfigStore();
</script>
<style>
html {
  direction: v-bind("appConfigStore.state.direction");
}
body {
  font-family: "Primary" !important;
}
</style>
