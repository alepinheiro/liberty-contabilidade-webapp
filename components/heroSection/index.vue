<template>
  <section class="py-10 px-5f flex">
    <div class="flex flex-col gap-12 max-w-6xl mx-auto pt-14 pb-48">
      <h1 class="text-5xl font-bold w-3/4">
        {{ $t("pages.home.heroSection.title") }}
      </h1>
      <p class="text-2xl w-3/5">
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
