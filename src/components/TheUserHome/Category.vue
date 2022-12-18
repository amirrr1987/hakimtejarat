<template>

  <TheSection :class="[`home-category`]">
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

</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
import { reactive } from "vue";
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

</script>

<style lang="less">

</style>
