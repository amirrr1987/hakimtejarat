<template>
  <nav class="py-4 text-gray-900 text-lg">
    <TheContainer>
      <ul class="flex gap-x-4">
        <NavItem route="TheUserHome" :name="$t('home')" />
        <NavItem route="TheUserAbout" :name="$t('about')" />
        <NavItem route="TheUserProducts" :name="$t('products')" />
        <NavItem route="TheUserBlogs" :name="$t('blogs')" />
        <NavItem route="TheUserContact" :name="$t('contact')" />
      </ul>
    </TheContainer>
  </nav>
</template>
<script setup lang="ts">
// import { Menu, MenuItemGroup, MenuItem, SubMenu } from "ant-design-vue/es";
// import { Icon } from "@iconify/vue";
import TheContainer from "@/components/global/TheContainer.vue";
import { ref } from "vue";
import NavItem from "./NavItem.vue";

// const current = ref(["home"]);
</script>
