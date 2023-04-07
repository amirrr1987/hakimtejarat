<template>
  <div :class="[`the-user-carousel`]">
    <TheContainer>
      <Carousel autoplay class="hidden lg:block w-2/3 mx-auto" effect="fade">
        <template v-for="item in items" :key="item.order">
          <div class="!grid grid-cols-3 items-center">
            <div class="col-span-2">
              <h3>{{ item.label }}</h3>
              <p>
                {{ item.content }}
              </p>
              <Button type="primary"> more </Button>
            </div>
            <img :src="item.url" alt="" />
          </div>
        </template>
      </Carousel>

      

      <!-- <Carousel :items-to-show="1.5">
      <Slide class="w-full" v-for="(item,index) in items" :key="index">
        <img  :src="item.url" alt="" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel> -->
    </TheContainer>
  </div>
</template>
<script setup lang="ts">
// import { Carousel } from "ant-design-vue";
import CarouselSocial from "./CarouselSocial.vue";
import TheContainer from "./TheContainer.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Button } from "ant-design-vue/es";
import { reactive } from "vue";

const items = reactive([
  {
    order: 1,
    label: 'title',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum, dolor odit tenetur libero laborum fuga, totam eligendi sequi illo sed aspernatur veniam? Velit molestiae qui quaerat? Aperiam, hic sequi?",

    url: "./images/01.png",
  },
  {
    order:2,
    label: 'title',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum, dolor odit tenetur libero laborum fuga, totam eligendi sequi illo sed aspernatur veniam? Velit molestiae qui quaerat? Aperiam, hic sequi?",
    url: "./images/02.png",
  },
  {
    order:3,
    label: 'title',
    content: "asdasd",
    url: "",
  },
]);
</script>

<style>
.the-user-carousel {
  background-image: url("https://dinehiran.ir/new-template4/assets/img/specia-banner/bg2.jpg");
  aspect-ratio: 1920 / 500;
  @apply flex items-end bg-cover bg-no-repeat w-full relative;
}
.the-user-carousel::after{
  content: '';
  /* content: '';
  
  @apply w-full h-20 absolute -bottom-20;
  background-image: linear-gradient(to bottom, #eeeff1, #f2f3f4, #f7f7f8, #fbfbfb, #ffffff); */
}
</style>
