<template>
  <section class="py-24 px-5">
    <UCard
      :ui="{
        base: 'max-w-5xl mx-auto',
        background: 'bg-white dark:bg-white',
        ring: 'ring-1 ring-gray-200 dark:ring-gray-200',
      }"
    >
      <div class="flex flex-col lg:flex-row gap-5 lg:justify-between">
        <div class="flex flex-col gap-1 lg:w-2/3 items-start">
          <h1
            class="text-3xl font-bold text-center text-secondary lg:text-left lg:w-2/3"
          >
            {{ $t("pages.home.contact.channels.title") }}
          </h1>
          <p class="">
            {{ $t("pages.home.contact.channels.description") }}
          </p>
        </div>
        <div class="flex flex-row items-center justify-between lg:w-1/3">
          <UTooltip
            v-for="item in payload"
            :key="item"
            :text="$t(`pages.home.contact.channels.buttons.${item}.text`)"
          >
            <UButton
              square
              color="primary"
              variant="solid"
              size="lg"
              :to="$t(`pages.home.contact.channels.buttons.${item}.link`)"
              target="_blank"
            >
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
