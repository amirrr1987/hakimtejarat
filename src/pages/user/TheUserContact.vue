<template>
  <main :class="[`the-user-contact`]">
    <TheSection>
      <TheContainer>
        <div class="grid lg:grid-cols-2 gap-8">
          <Card class="rounded">
            <Form layout="vertical">
            <legend>Contact us</legend>
            <div class="grid grid-cols-2 gap-x-4">
              <FormItem label="Your name">
                <Input type="text" />
              </FormItem>
              <FormItem label="Your email">
                <Input type="email" />
              </FormItem>
            </div>

            <FormItem label="Your subject">
              <Input />
            </FormItem>
            <FormItem label="Your message">
              <Textarea :rows="10" />
            </FormItem>
            <Button type="primary" class="rounded-full h-12 px-12"
              >Send message</Button
            >
          </Form>
          </Card>
          <Card class="rounded">
            <div class="flex items-center mb-4">
              <Button type="text" shape="circle" size="large"  >
                <template #icon>
                  <Icon icon="icon-park-outline:local"  />
                </template>
              </Button>
              <div>
                <div>Location:</div>
                <div>A108 Adam Street, New York, NY 535022</div>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <Button type="text" shape="circle" size="large"  >
                <template #icon>
                  <Icon icon="icon-park-outline:local"  />
                </template>
              </Button>
              <div>
                <div>Email:</div>
                <div>info@example.com</div>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <Button type="text" shape="circle" size="large"  >
                <template #icon>
                  <Icon icon="icon-park-outline:local"  />
                </template>
              </Button>
              <div>
                <div>Call:</div>
                <div>+1 5589 55488 55s</div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.58779165133!2d51.43404113964297!3d35.736354952088384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a46ab8c9a65a926!2zMzXCsDQ0JzEwLjkiTiA1McKwMjYnMTMuNiJF!5e0!3m2!1sen!2s!4v1671314487176!5m2!1sen!2s"
              width="100%"
              height="auto"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </TheContainer>
    </TheSection>
  </main>
</template>
<script setup lang="ts">
import TheContainer from "@/components/global/TheContainer.vue";
import TheSection from "@/components/global/TheSection.vue";
import {
  Card,
  Form,
  FormItem,
  Input,
  Textarea,
  Button,
} from "ant-design-vue/es";
import { Icon } from "@iconify/vue";
</script>

<style lang="less">
@prefix: ~"the-user-contact";
.@{prefix} {
  iframe {
    aspect-ratio: 2 / 1;
  }
}
</style>
