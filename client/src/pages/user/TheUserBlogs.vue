<template>
  <main :class="[`the-user-products`]">
    <TheSection>
      <TheContainer>
        <div class="">
          <div class="font-bold text-4xl">Blogs</div>
          <Divider />
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <template v-for="(blog, index) in blogs" :key="index">
            <Card>
              <template #cover>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </template>

              <CardMeta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </CardMeta>
            </Card>
          </template>
        </div>
      </TheContainer>
    </TheSection>
  </main>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
import { Card, CardMeta, Divider } from "ant-design-vue/es";
import { reactive } from "vue";

const blogs = reactive([
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
  {
    title: "sdf",
  },
]);
</script>

<style lang="less">
@prefix: ~"the-user-products";
.@{prefix} {
}
</style>
