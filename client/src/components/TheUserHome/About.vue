<template>
  <TheSection :class="[`home-about`]">
    <TheContainer>
      <div class="grid gap-y-12 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
        <img
          class="w-full object-cover lg:col-span-4"
          src="@/assets/images/slim-care.png"
          alt=""
        />
        <div
          class="lg:col-span-8"
        >
          <h4 class="text-4xl font-semibold capitalize">title</h4>
          <Divider />
          <p class="font-normal leading-8 text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque aspernatur consectetur tempore ipsam nisi aperiam,
            perspiciatis quas! Placeat ratione obcaecati dolore asperiores
            tempora culpa sit eos aliquid exercitationem in quod odio natus
            impedit eius dicta quae totam necessitatibus libero eum, nisi
            eveniet? Culpa consequuntur, error maxime dolores magnam distinctio
            similique, cum natus accusantium nihil assumenda officiis fugiat
            minus rem odio? Ipsam, doloremque iure placeat suscipit maiores
            fugit quam cum eos aut culpa dolores eum non dignissimos dolorum
            amet quod repudiandae voluptates eius, adipisci voluptatem maxime
            aliquam. Enim repudiandae error nam praesentium adipisci hic placeat
            excepturi sequi a labore quisquam, eos atque nihil eum totam aperiam
            fugit quidem cupiditate eveniet? Voluptates explicabo quos dolore
            itaque corporis asperiores officia rem voluptas.
          </p>
        </div>
      </div>
    </TheContainer>
  </TheSection>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
import { Divider } from "ant-design-vue/es";

</script>

<style lang="less"></style>
