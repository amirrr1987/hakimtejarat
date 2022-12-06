<template>
  <footer :class="[`the-user-footer`]">
    <div class="footer-top">
      <TheContainer>
        <ul>
          <li>sdf</li>
          <li>sdf</li>
          <li>sdf</li>
        </ul>
      </TheContainer>
    </div>
    <div class="footer-bottom">copyright</div>
  </footer>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
</script>

<style lang="less">
@prefix: ~"the-user-footer";
.@{prefix} {
  .footer-top {
    @apply bg-green-500 text-green-50 py-12 flex;
  }
  .footer-bottom {
    @apply bg-green-800 text-green-50 py-4 text-center;
  }
}
</style>
