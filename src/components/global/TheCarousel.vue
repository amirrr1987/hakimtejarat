<template>
  <div :class="[`the-user-carousel`]">
    <TheContainer>

      <Carousel autoplay>

        <div class="!flex justify-between items-center">
          <div>
            <h3>sdfsdf</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <Button type="primary">
              more
            </Button>
          </div>
          <img src="https://dinehiran.ir/new-template4/assets/img/specia-banner/ghalb-va-oroogh.png" alt="" />
        </div>

        <div class="!flex justify-between items-center">
          <div>
            <h3>sdfsdf</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <Button type="primary">
              more
            </Button>
          </div>
          <img src="https://dinehiran.ir/new-template4/assets/img/specia-banner/ghalb-va-oroogh.png" alt="" />
        </div>

        <div class="!flex justify-between items-center">
          <div>
            <h3>sdfsdf</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <Button type="primary">
              more
            </Button>
          </div>
          <img src="https://dinehiran.ir/new-template4/assets/img/specia-banner/ghalb-va-oroogh.png" alt="" />
        </div>


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

<style>
.the-user-carousel {

  background-image: url('https://dinehiran.ir/new-template4/assets/img/specia-banner/bg2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 721px;
  width: 100%;
}

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
