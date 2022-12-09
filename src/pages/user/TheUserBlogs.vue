<template>
  <main :class="[`the-user-products`]">
  
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
@prefix: ~"the-user-products";
.@{prefix} {
}
</style>
