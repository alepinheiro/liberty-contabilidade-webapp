<template>
  <section>
    <div class="absolute inset-0 -z-10 flex justify-end overflow-hidden">
      <BrandIcon class="h-[48em] w-[48em] text-primary opacity-30" />
    </div>
    <div class="flex flex-col gap-4 max-w-5xl mx-auto lg:pt-14 lg:pb-24">
      <h1
        class="text-5xl font-bold lg:w-3/4"
        :class="[activeStyle === 'dark' ? 'text-white' : '']"
      >
        {{ $t("pages.home.heroSection.title") }}
      </h1>
      <p
        class="text-2xl lg:w-3/5"
        :class="[activeStyle === 'dark' ? 'text-white' : '']"
      >
        {{ $t("pages.home.heroSection.description") }}
      </p>

      <div class="flex flex-row gap-2 max-w-xl">
        <div
          v-for="item in payload"
          :key="item"
          class="flex flex-col gap-1 flex-1"
        >
          <Icon
            width="36"
            height="36"
            :name="item"
            class="text-mirage-900"
            :icon="$t('pages.home.heroSection.benefits.' + item + '.icon')"
          />
          <span
            class="text-sm"
            :class="[activeStyle === 'dark' ? 'text-white' : '']"
          >
            {{ $t("pages.home.heroSection.benefits." + item + ".text") }}
          </span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-2 w-full">
        <NuxtLink to="#contactForm">
          <UButton
            color="primary"
            variant="solid"
            class="font-bold w-full flex"
            size="xl"
          >
            <span class="mx-auto uppercase">
              {{ $t("pages.home.heroSection.buttons.newBusiness") }}
            </span>
          </UButton>
        </NuxtLink>

        <NuxtLink to="#contactForm">
          <UButton
            color="primary"
            variant="solid"
            class="font-bold w-full"
            size="xl"
          >
            <span class="mx-auto uppercase">
              {{ $t("pages.home.heroSection.buttons.changeOffice") }}
            </span>
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
defineProps<{
  activeStyle: "light" | "dark";
}>();
const payload = ["clock", "tax", "country"];
</script>
