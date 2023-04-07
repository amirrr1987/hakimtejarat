<template>
  <main :class="[`the-user-about`]">
    <TheSection>
      <TheContainer>
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="col-span-2">
            <h4 class="text-xl font-bold tracking-normal leading-normal whitespace-normal text-gray-500 dark:text-gray-400">About us</h4>
            <Divider />
            <p
              class="text-lg font-normal tracking-normal leading-normal whitespace-normal text-gray-500 dark:text-gray-400"
            >
              Hakimrack work across the enterprise through an open,
              collaborative platform. Link issues across Jira and ingest data
              from other software development tools, so your IT support and
              operations teams have richer contextual information to rapidly
              respond to requests, incidents, and changes.
            </p>
            <p
              class="text-lg font-normal tracking-normal leading-normal whitespace-normal text-gray-500 dark:text-gray-400"
            >
              Hakimrack work across the enterprise through an open,
              collaborative platform. Link issues across Jira and ingest data
              from other software development tools, so your IT support and
              operations teams have richer contextual information to rapidly
              respond to requests, incidents, and changes.
            </p>
            <!-- <p class="font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p> -->
          </div>

          <img class="col-span-1" src="@/assets/images/slim-care.png" alt="" />
        </div>
      </TheContainer>
    </TheSection>
  </main>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
import { Divider } from "ant-design-vue/es";
</script>

<style lang="less">
@prefix: ~"the-user-about";
.@{prefix} {
}
</style>
