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
    <div
      :class="[options.isOpen ? 'h-96' : 'h-10']"
      class="fixed bottom-0 left-24 z-10 overflow-hidden w-64 rounded-t-xl border border-b-0 border-mirage-900 transition-all ease-in-out"
    >
      <div class="bg-mirage text-white h-full relative">
        <button
          class="absolute top-0 right-0 p-2"
          @click="options.isOpen = !options.isOpen"
        >
          {{ options.isOpen ? "❎" : "⬆️" }}
        </button>
        <div class="flex flex-col w-full divide-y divide-mirage-900 pt-10 px-5">
          <div class="flex flex-row justify-between py-2">
            <div>Seção principal</div>
            <div>
              <UToggle v-model="heroSection" />
            </div>
          </div>
          <div class="flex flex-row justify-between py-2">
            <div>Serviços</div>
            <div>
              <UToggle v-model="services" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
