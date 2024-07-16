<template>
  <div class="bg-background relative">
    <NavBar />
    <HeroSection
      class="py-10 px-5 flex relative z-0"
      :class="[heroSection ? '' : 'heroSection']"
      :active-style="options.heroSection"
    />
    <Services
      class="py-10"
      :class="[services ? '' : 'bg-[#000916]']"
      :active-style="options.services"
    />
    <!-- <Testimonials /> -->
    <ContactChannels />
    <Benefits />
    <ContactFormSection />
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
const heroSection = ref(false);
const services = ref(false);
const options = reactive({
  isOpen: true,
  activeStyle: 1,
  heroSection: computed(() => (heroSection.value === true ? "light" : "dark")),
  services: computed(() => (services.value === true ? "light" : "dark")),
});
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
