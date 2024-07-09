<template>
  <section class="py-10 px-5 flex">
    <div class="flex flex-col gap-8 max-w-5xl mx-auto lg:pt-14 lg:pb-24">
      <h1 class="text-5xl font-bold lg:w-3/4">
        {{ $t("pages.home.heroSection.title") }}
      </h1>
      <p class="text-2xl lg:w-3/5">
        {{ $t("pages.home.heroSection.description") }}
      </p>
      <NuxtLink to="#contactForm">
        <UButton
          color="primary"
          variant="solid"
          class="font-bold text-xl"
          size="lg"
        >
          {{ $t("pages.home.heroSection.button") }}
        </UButton>
      </NuxtLink>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
