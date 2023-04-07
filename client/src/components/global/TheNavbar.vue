<template>
  <nav class="py-4 text-gray-100 bg-primary text-lg">
    <TheContainer>
      <div class="flex items-start justify-between gap-x-4 relative">
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
        <ul>
          <!-- <Select
            class="w-full !bg-red-500"
            v-model:value="currentLanguage"
            @change="localeHandler"
          >
            <template v-for="(item, index) in items" :key="index">
              <SelectOption :value="item.value" class="!bg-transparent">
                <div class="flex items-center gap-x-2">
                  <Icon :icon="item.icon" />
                  <span>{{ item.label }}</span>
                </div>
              </SelectOption>
            </template>
          </Select> -->

          <!-- <select class="w-96" v-model="locale" @change="localeHandler">
            <template v-for="(item, index) in items" :key="index">
              <option :value="item.value">
                {{ item.label }}
              </option>
            </template>
          </select> -->

          <Dropdown class="w-full">
            <Button type="text" shape="circle">
              <template #icon>
                <Icon icon="icon-park-outline:translate" />
              </template>
            </Button>
            <template #overlay>
              <Menu>
                <template v-for="(item, index) in items" :key="index">
                  <MenuItem @click="getIndex(index)">
                    <Icon :icon="item.icon" />
                    {{ item.label }}
                  </MenuItem>
                </template>
              </Menu>
            </template>
          </Dropdown>
        </ul>
      </div>
    </TheContainer>
  </nav>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import NavItem from "@/components/global/NavItem.vue";
import { Dropdown, Button, Menu, MenuItem } from "ant-design-vue/es";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";
import { reactive } from "vue";

import { useAppConfigStore } from "@/stores/AppConfig";

const appConfigStore = useAppConfigStore();

const items = reactive([
  {
    key: 1,
    icon: "emojione:flag-for-united-kingdom",
    label: "english",
    value: "en",
  },
  {
    key: 2,
    icon: "emojione:flag-for-iran",
    label: "persian",
    value: "fa",
  },
  {
    key: 3,
    icon: "emojione:flag-for-iran",
    label: "kurdish",
    value: "ku",
  },
  {
    key: 4,
    icon: "emojione:flag-for-saudi-arabia",
    label: "arabic",
    value: "ar",
  },
  {
    key: 5,
    icon: "emojione:flag-for-turkey",
    label: "turkish",
    value: "tr",
  },
  {
    key: 6,
    icon: "emojione:flag-for-azerbaijan",
    label: "azeri",
    value: "az",
  },
]);

const { locale } = useI18n({ useScope: "global" });

const getIndex = (index: number) => {
  const singleItem = items[index];
  locale.value = singleItem.value;

  if (singleItem.value === "fa" || "ar") {
    appConfigStore.state.direction = "rtl";
  } else {
    appConfigStore.state.direction = "ltr";
  }
};
</script>
<style>

</style>

