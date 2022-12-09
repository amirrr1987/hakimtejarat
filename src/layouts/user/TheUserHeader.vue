<template>
  <header :class="[`the-user-header`]">
    <TheNavbar />
    <TheCarousel />
  </header>
</template>
<script setup lang="ts">
import TheNavbar from "@/components/global/TheNavbar.vue";
import TheCarousel from "@/components/global/TheCarousel.vue";
</script>

<style lang="less">
@prefix: ~"the-user-header";
.@{prefix} {
 
}
</style>
