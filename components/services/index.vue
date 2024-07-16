<template>
  <section class="px-5">
    <div class="lg:max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-stretch gap-5 w-full">
        <NuxtImg
          src="/images/services.png"
          class="h-96 lg:h-[36em] w-full lg:flex-1 object-cover mb-5 lg:mb-0 rounded"
        />
        <div class="flex flex-col justify-between gap-5 w-full flex-1">
          <div v-for="item in services" :key="item" class="flex flex-col gap-2">
            <Icon
              width="48"
              height="48"
              :name="item"
              class="text-mirage-900 dark:text-mirage-900"
              :icon="$t('pages.home.services.' + item + '.icon')"
            />
            <p
              class=""
              :class="[
                activeStyle === 'dark' ? 'text-white dark:text-white' : '',
              ]"
            >
              {{ $t(`pages.home.services.${item}.description`) }}
            </p>
            <NuxtLink to="#contactForm">
              <UButton
                color="primary"
                variant="solid"
                class="font-bold"
                size="lg"
              >
                {{ $t(`pages.home.services.${item}.title`) }}
                <Icon
                  width="20"
                  height="20"
                  :name="$t(`pages.home.services.${item}.title`)"
                  icon="ri:arrow-right-line"
                />
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
defineProps<{
  activeStyle: "light" | "dark";
}>();
const services = ["newCompany", "changeOffice", "changeStatus"];
</script>
