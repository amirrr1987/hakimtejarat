<template>
  <footer :class="[`the-user-footer`]">
    <div class="footer-top">
      <TheContainer>
        <div class="grid lg:grid-cols-4 gap-y-4 lg:gap-y-0 lg:gap-x-4">
          <div>
            <img
            class="mb-4"
              src="https://www.irandarouk.com/sites/all/themes/pourateb/assets/images/logo-f.png"
              alt=""
            />
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              quaerat vel dignissimos delectus voluptate, fugit quisquam fugiat
              eos, fuga rem, doloribus placeat quo? Aliquid deleniti suscipit
              facere natus ut sit?
            </p>
            <div class="flex justify-between text-2xl">
              <Icon icon="icon-park-outline:instagram" />
              <Icon icon="icon-park-outline:telegram" />
              <Icon icon="icon-park-outline:skating" />
              <Icon icon="icon-park-outline:instagram" />
            </div>
          </div>
          <div class="">
            <h4 class="text-li">sdfsd</h4>
            <Divider class="border-t-red-400"  />
            <ul>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
          </ul>
          </div>
          <div class="">
            <h4 class="text-li">sdfsd</h4>
            <Divider class="border-t-red-400"  />
            <ul>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
          </ul>
          </div>
          <div class="">
            <h4 class="text-li">sdfsd</h4>
            <Divider class="border-t-red-400"  />
            <ul>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
            <li class="flex gap-x-1 items-center">
              <Icon icon="mdi-light:home" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </li>
          </ul>
          </div>
        </div>
      </TheContainer>
    </div>
    <div class="footer-bottom">
      copyright Lorem, ipsum dolor sit amet consectetur adipisicing.
    </div>
  </footer>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import { Icon } from '@iconify/vue';
import { Divider } from "ant-design-vue/es";
</script>

<style lang="less">
@prefix: ~"the-user-footer";
.@{prefix} {
  .footer-top {
    @apply bg-gray-800 text-green-50 py-12 flex;
  }
  .footer-bottom {
    @apply bg-gray-900 text-green-50 py-4 text-center;
  }
}
</style>
