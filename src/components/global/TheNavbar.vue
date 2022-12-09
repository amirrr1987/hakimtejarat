<template>
    <nav class="py-4 text-gray-900 bg-gray-300 text-lg">
      <TheContainer>
        <ul class="flex gap-x-4 capitalize">
          <RouterLink :to="{ name: 'TheUserHome' }"> {{ $t("home") }}</RouterLink>
          <RouterLink :to="{ name: 'TheUserAbout' }">{{ $t("about") }}</RouterLink>
          <RouterLink :to="{ name: 'TheUserProducts' }">{{ $t("products") }}</RouterLink>
          <RouterLink :to="{ name: 'TheUserBlogs' }">{{ $t("blogs") }}</RouterLink>
          <RouterLink :to="{ name: 'TheUserContact' }">{{ $t("contact") }}</RouterLink>
        </ul>
      </TheContainer>
    </nav>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
</script>
