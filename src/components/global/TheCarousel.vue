<template>
  <TheContainer full>
    <!-- <div class="absolute z-10">
      <CarouselSocial />
    </div> -->
    <!-- <Carousel autoplay>
     
        <img src="https://dinehiran.ir/new-template4/assets/img/01.jpg" alt="" />
      
        <img src="https://dinehiran.ir/new-template4/assets/img/02.jpg" alt="" />
    
        <img src="https://dinehiran.ir/new-template4/assets/img/03.jpg" alt="" />
      
    </Carousel> -->

    <Carousel :items-to-show="1.5">
      <Slide class="w-full" v-for="(item,index) in items" :key="index">
        <img  :src="item.url" alt="" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </TheContainer>
</template>
<script setup lang="ts">
// import { Carousel } from "ant-design-vue";
import CarouselSocial from "./CarouselSocial.vue";
import TheContainer from "./TheContainer.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { reactive } from "vue";

const items = reactive([
  {
    content: '',
    url: "https://dinehiran.ir/new-template4/assets/img/01.jpg",
  },
  {
    content: '',
    url: "https://dinehiran.ir/new-template4/assets/img/02.jpg",
  },
  {
    content: '',
    url: "https://dinehiran.ir/new-template4/assets/img/03.jpg",
  },
]);
</script>

<style scoped>
/* For demo */
/* .ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 450px;
  line-height: 450px;
  background: #364d79;
  overflow: hidden;
  width: 100vw !important;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
} */
</style>
