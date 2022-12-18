<template>
  <nav class="py-4 text-gray-100 bg-primary text-lg">
    <TheContainer>
      <div class="flex items-start gap-x-4 relative">
        <RouterLink to="/" class="absolute z-10 -top-2">
          <img class="h-20" src="@/assets/images/logo.png" alt="" />
        </RouterLink>
        <ul class="flex gap-x-4 ml-32">
          <NavItem route="TheUserHome" :name="$t('home')" />
          <NavItem route="TheUserAbout" :name="$t('about')" />
          <NavItem route="TheUserProducts" :name="$t('products')" />
          <NavItem route="TheUserBlogs" :name="$t('blogs')" />
          <NavItem route="TheUserContact" :name="$t('contact')" />
        </ul>
      </div>
    </TheContainer>
  </nav>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";

import NavItem from "./NavItem.vue";
</script>
