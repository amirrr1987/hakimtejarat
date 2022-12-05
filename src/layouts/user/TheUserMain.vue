<template>
  <RouterView :class="[`the-main`]" />
</template>
<script setup lang="ts"></script>

<style lang="less">
@prefix: ~"the-main";
.@{prefix} {
}
</style>
