<template>
  <main :class="[`the-user-home`]">
    <TheUserHomeAbout />

    <TheUserHomeCategory />
    
    <TheUserHomeBlogs />

    

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

    
  </main>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
import TheUserHomeAbout from "@/components/TheUserHome/About.vue";
import TheUserHomeCategory from "@/components/TheUserHome/Category.vue";
import TheUserHomeBlogs from "@/components/TheUserHome/Blogs.vue";
import { reactive } from "vue";
import { Button } from "ant-design-vue/es";



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
