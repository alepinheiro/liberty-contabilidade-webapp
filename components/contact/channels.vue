<template>
  <section class="py-10 px-5">
    <UCard
      :ui="{
        background: 'bg-white dark:bg-white',
        ring: 'ring-1 ring-gray-200 dark:ring-gray-200',
      }"
    >
      <div class="flex flex-col gap-5">
        <h1 class="text-3xl font-bold text-center text-secondary">
          {{ $t("pages.home.contact.channels.title") }}
        </h1>
        <p class="">
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
