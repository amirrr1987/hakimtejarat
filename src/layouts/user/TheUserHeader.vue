<template>
  <header :class="[`the-user-header`]">
    <nav class="py-4 text-green-50">
      <TheContainer>
        <ul class="flex gap-x-4">
          <RouterLink :to="{ name: 'TheUserHome' }">Home</RouterLink>
          <RouterLink :to="{ name: 'TheUserAbout' }">About</RouterLink>
          <RouterLink :to="{ name: 'TheUserProducts' }">Products</RouterLink>
          <RouterLink :to="{ name: 'TheUserContact' }">Contact</RouterLink>
        </ul>
      </TheContainer>
    </nav>
  </header>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
</script>

<style lang="less">
@prefix: ~"the-user-header";
.@{prefix} {
  @apply bg-green-600;
}
</style>
