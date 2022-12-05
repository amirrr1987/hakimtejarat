<template>
  <TheUserHeader />
  <TheUserMain />
  <TheUserFooter />
</template>
<script setup lang="ts">
import TheUserFooter from "@/layouts/user/TheUserFooter.vue";
import TheUserHeader from "@/layouts/user/TheUserHeader.vue";
import TheUserMain from "@/layouts/user/TheUserMain.vue";
</script>

<style lang="less">
#app{
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    min-height: 100vh;
}
</style>
