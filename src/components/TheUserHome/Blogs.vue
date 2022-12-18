<template>
  <TheSection>
    <TheContainer>
      <div class="mb-8">
        <h3 class="text-4xl font-medium capitalize text-center mb-4">
          articles category
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
        <Button type="primary" class="px-12 rounded">more..</Button>
      </div>
    </TheContainer>
  </TheSection>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
import { reactive } from "vue";
import { Button } from "ant-design-vue/es";
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
