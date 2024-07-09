<template>
  <section class="py-10 px-5">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-24 lg:gap-3">
        <UCard
          v-for="item in payload"
          :key="item"
          :ui="{
            background: 'bg-white dark:bg-white',
            ring: 'ring-1 ring-gray-200 dark:ring-gray-200',
          }"
          class="flex flex-col gap-3 lg:flex-1"
        >
          <Icon
            :icon="$t(`pages.home.benefits.${item}.icon`)"
            :name="item"
            class="h-16 w-16 text-torea-bay-900"
          />
          <h1 class="text-3xl font-bold lg:w-4/5 py-2">
            {{ $t(`pages.home.benefits.${item}.title`) }}
          </h1>
          <p>
            {{ $t(`pages.home.benefits.${item}.description`) }}
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const payload = ["security", "costsReduction", "stayFocused", "support"];
</script>
