<template>
  <div class="bg-background relative">
    <NavBar @select="onSelect" />
    <HeroSection
      class="py-10 px-5 flex relative z-0"
      :class="[heroSection ? '' : 'heroSection']"
      :active-style="options.heroSection"
      @select="onSelect"
    />
    <Services
      class="py-10"
      :class="[services ? '' : 'bg-[#000916]']"
      :active-style="options.services"
      @select="onSelect"
    />
    <!-- <Testimonials /> -->
    <ContactChannels />
    <Benefits />
    <ContactFormSection id="contactForm" :service="activeService" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
//
import type { Services } from "~/app.vue";

const { $gsap: gsap } = useNuxtApp();
const heroSection = ref(false);
const services = ref(false);
const activeService = ref<Services>("newCompany");
const options = reactive({
  isOpen: true,
  activeStyle: 1,
  heroSection: computed(() => (heroSection.value === true ? "light" : "dark")),
  services: computed(() => (services.value === true ? "light" : "dark")),
});

const onSelect = (value: Services) => {
  activeService.value = value;
  gsap.to(window, { duration: 1, scrollTo: "#contactForm", ease: "power2" });
};
</script>

<style>
.heroSection {
  background: radial-gradient(
    81.95% 81.95% at 50% -2.73%,
    #011c44 0%,
    #000916 100%
  );
}
</style>
