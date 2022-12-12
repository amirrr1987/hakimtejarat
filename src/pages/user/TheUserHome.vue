<template>
  <main :class="[`the-user-home`]">

    <TheSection>
      <TheContainer> 
        <div class="flex">
          <div>
            <h4>title</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eveniet quod aut, quae labore maxime? Odio illum excepturi iste voluptatum. Rerum, architecto placeat. Asperiores delectus magnam vero rerum, aut veniam.
            </p>
          </div>
          <img src="https://dinehiran.ir/new-template4/assets/img/wiki/new/%D8%A2%D8%B1%D8%AA%DB%8C%D8%B4%D9%88.jpg" alt="">

        </div>
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
      <TheContainer> sdfsdf </TheContainer>
    </TheSection>

    <TheSection class="bg-green-200">
      <TheContainer> sdfsdf </TheContainer>
    </TheSection>

    <TheSection>
      <TheContainer> sdfsdf </TheContainer>
    </TheSection>

  </main>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
</script>

<style lang="less">
@prefix: ~"the-user-home";
.@{prefix} {
}
</style>
