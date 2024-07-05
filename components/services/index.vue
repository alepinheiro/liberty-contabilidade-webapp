<template>
  <section class="px-5">
    <UCard class="flex flex-col gap-5">
      <NuxtImg
        src="/images/services.png"
        class="h-96 w-full object-cover mb-5"
      />
      <div class="flex flex-col gap-5">
        <div v-for="item in services" :key="item" class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold text-white">
            {{ $t(`pages.home.services.${item}.title`) }}
          </h1>
          <p class="text-white">
            {{ $t(`pages.home.services.${item}.description`) }}
          </p>
          <NuxtLink to="#contactForm">
            <UButton
              color="primary"
              variant="solid"
              class="font-bold text-xl"
              size="lg"
            >
              {{ $t(`pages.home.services.${item}.button`) }}
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </UCard>
  </section>
</template>
<script lang="ts" setup>
const services = ["newCompany", "changeOffice", "changeStatus"];
</script>
