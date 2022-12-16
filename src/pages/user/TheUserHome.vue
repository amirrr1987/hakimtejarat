<template>
  <main :class="[`the-user-home`]">
    <TheUserHomeAbout />

    <TheSection>
      <TheContainer>
        <div class="grid grid-cols-12">
          <div
            class="col-start-1 col-end-13 md:col-start-3 md:col-end-11 grid grid-cols-6 gap-4"
          >
            <div class="col-span-6 mb-4">
              <h3 class="text-4xl font-medium capitalize text-center mb-4">
                دسته بندی محصولات
              </h3>
              <hr class="border-green-600 border-b-2 rounded-full" />
            </div>
            <template v-for="category in categories" :key="category">
              <div class="flex flex-col items-center gap-y-2">
                <img
                  :src="category.img"
                  :title="category.label"
                  :alt="category.label"
                />
                <RouterLink to="">{{ category.label }}</RouterLink>
              </div>
            </template>
          </div>
        </div>
      </TheContainer>
    </TheSection>

    <TheSection class="bg-green-200 bg">
      <TheContainer>
        <div class="grid lg:grid-cols-2">
          <div class="lg:col-start-2">
            <h4>title</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              accusantium ab excepturi, totam id itaque aperiam doloremque
              officia laudantium esse iure. Vero perferendis enim rem sint ipsa
              quasi dignissimos odit.
            </p>
          </div>
        </div>
      </TheContainer>
    </TheSection>

    <TheSection>
      <TheContainer>
        <h4>افتخارات</h4>
      </TheContainer>
    </TheSection>

    <TheSection class="bg-green-200">
      <TheContainer> sdfsdf </TheContainer>
    </TheSection>

    <TheSection>
      <TheContainer> sdfsdf </TheContainer>
    </TheSection>

    <TheSection class="bg-green-200">
      <TheContainer> sdfsdf </TheContainer>
    </TheSection>

    <TheSection>
      <TheContainer>
        <div class="mb-8">
          <h3 class="text-4xl font-medium capitalize text-center mb-4">
            products category
          </h3>
          <hr class="border-green-600 rounded-full" />
        </div>
        <div
          class="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-8 md:gap-y-0 xl:gap-x-12 mb-8"
        >
          <template v-for="article in articles" :key="article">
            <figure>
              <img
                class="w-full mb-4 rounded-t"
                :src="article.img"
                :title="article.label"
                :alt="article.label"
              />
              <figcaption class="">
                <h4 class="font-bold mb-2">{{ article.label }}</h4>
                <p>{{ article.description }}</p>
              </figcaption>
            </figure>
          </template>
        </div>

        <div class="flex justify-center items-center">
          <Button type="primary">More</Button>
        </div>
      </TheContainer>
    </TheSection>
  </main>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
import TheUserHomeAbout from "@/components/TheUserHome/About.vue";
import { reactive } from "vue";
import { Button } from "ant-design-vue/es";

const categories = reactive([
  {
    img: "https://www.irandarouk.com/sites/default/files/liver.png",
    label: "گوارش و کبد",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/cardiovascular-supportive_0_0.png",
    label: "قلب و عروق",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/respiratory_0_0.png",
    label: "سیستم تنفسی",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/neurology_0_0.png",
    label: "سیستم عصبی",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/urology_0_0.png",
    label: "کلیه و مجاری ادرار",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/taghviat.png",
    label: "تقویت کننده و انرژی زا",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/musculoskeletal_0_0.png",
    label: "عضلانی - اسکلتی",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/post.png",
    label: "پوست و مو",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/anti-diabetes_0_0.png",
    label: "دیابت",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/sexual-enhancement_0.png",
    label: "تقویت قوای جنسی",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/women3.png",
    label: "زنان",
  },
  {
    img: "https://www.irandarouk.com/sites/default/files/child0.png",
    label: "اطفال",
  },
]);

const articles = reactive([
  {
    img: "https://api.lorem.space/image/furniture?w=450&h=268",
    label: "درمان یبوست بر اثر مصرف داروهای یبوست زا",
    description:
      "یکی از عوارض جانبی شایع برخی از داروها، یبوست است. داروهای ضد افسردگی، برخی مسکن ها، برخی داروهای دیگر هستند که یبوست جزو عوارض ناشی از مصرف بی رویه ی آن هاست. حال برای درمان یبوست بر اثر مصرف",
  },
  {
    img: "https://api.lorem.space/image/furniture?w=450&h=268",
    label: "درمان یبوست بر اثر مصرف داروهای یبوست زا",
    description:
      "یکی از عوارض جانبی شایع برخی از داروها، یبوست است. داروهای ضد افسردگی، برخی مسکن ها، برخی داروهای دیگر هستند که یبوست جزو عوارض ناشی از مصرف بی رویه ی آن هاست. حال برای درمان یبوست بر اثر مصرف",
  },
  {
    img: "https://api.lorem.space/image/furniture?w=450&h=268",
    label: "درمان یبوست بر اثر مصرف داروهای یبوست زا",
    description:
      "یکی از عوارض جانبی شایع برخی از داروها، یبوست است. داروهای ضد افسردگی، برخی مسکن ها، برخی داروهای دیگر هستند که یبوست جزو عوارض ناشی از مصرف بی رویه ی آن هاست. حال برای درمان یبوست بر اثر مصرف",
  },
  {
    img: "https://api.lorem.space/image/furniture?w=450&h=268",
    label: "درمان یبوست بر اثر مصرف داروهای یبوست زا",
    description:
      "یکی از عوارض جانبی شایع برخی از داروها، یبوست است. داروهای ضد افسردگی، برخی مسکن ها، برخی داروهای دیگر هستند که یبوست جزو عوارض ناشی از مصرف بی رویه ی آن هاست. حال برای درمان یبوست بر اثر مصرف",
  },
]);
</script>

<style lang="less">
@prefix: ~"the-user-home";
.@{prefix} {
  .bg {
    background-image: url("https://www.irandarouk.com/sites/all/themes/pourateb/assets/images/a1.jpg");
    height: 600px;
  }
}
</style>
