<template>
  <div :class="props.full ? 'w-screen' : 'container mx-auto' ">
     <slot></slot>
  </div>
</template>
<script setup lang="ts">
interface Props {
  full: boolean
}
const props = withDefaults(defineProps<Props>(), {
  full: false,
})
</script>
