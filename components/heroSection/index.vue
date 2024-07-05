<template>
  <section class="py-10 px-5">
    <div class="flex flex-col gap-5">
      <h1 class="text-5xl font-bold">
        {{ $t("pages.home.heroSection.title") }}
      </h1>
      <p class="text-2xl">{{ $t("pages.home.heroSection.description") }}</p>
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
