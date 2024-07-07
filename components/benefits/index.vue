<template>
  <section class="py-10 px-5">
    <div class="flex flex-col gap-24">
      <div v-for="item in payload" :key="item" class="flex flex-col gap-3">
        <Icon
          :icon="$t(`pages.home.benefits.${item}.icon`)"
          :name="item"
          class="h-16 w-16 text-torea-bay-900"
        />
        <h1 class="text-3xl font-bold">
          {{ $t(`pages.home.benefits.${item}.title`) }}
        </h1>
        <p>
          {{ $t(`pages.home.benefits.${item}.description`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const payload = ["security", "costsReduction", "stayFocused", "support"];
</script>
