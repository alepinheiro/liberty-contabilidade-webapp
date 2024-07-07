<template>
  <section class="py-10 px-5">
    <UCard>
      <div class="flex flex-col gap-5">
        <h1 class="text-3xl font-bold text-center">
          {{ $t("pages.home.contact.channels.title") }}
        </h1>
        <p>
          {{ $t("pages.home.contact.channels.description") }}
        </p>
        <div class="flex flex-row justify-between">
          <UTooltip
            v-for="item in payload"
            :key="item"
            :text="$t(`pages.home.contact.channels.buttons.${item}.text`)"
          >
            <UButton color="primary" size="lg" square>
              <Icon
                :icon="$t(`pages.home.contact.channels.buttons.${item}.icon`)"
                :name="item"
                class="h-12 w-12"
              />
            </UButton>
          </UTooltip>
        </div>
      </div>
    </UCard>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const payload = ["whatsApp", "email", "instagram"];
</script>
