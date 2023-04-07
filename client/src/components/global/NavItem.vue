<template>
  <RouterLink :to="{ name: props.route }" class="capitalize">
    {{ props.name }}</RouterLink
  >
</template>
<script setup lang="ts">
interface Props {
  name: string;
  route: string;
}
const props = withDefaults(defineProps<Props>(), {
  name: "",
  route: "",
});
</script>
