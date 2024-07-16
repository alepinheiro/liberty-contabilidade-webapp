<template>
  <header
    class="bg-mirage backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-800 h-14"
  >
    <div
      class="flex flex-row items-center justify-between h-full px-4 max-w-7xl mx-auto"
    >
      <div class="flex flex-row items-center">
        <UAvatar
          src="/images/logo.webp"
          size="lg"
          alt="Contabilidade Liberty"
        />
        <h1 class="font-Cinzel text-2xl text-primary">
          {{ $t("title") }}
        </h1>
      </div>
      <UPopover
        :ui="{
          wrapper: 'lg:hidden',
          background: 'bg-mirage',
          ring: 'ring-1 ring-mirage-900 dark:ring-mirage-800',
        }"
      >
        <UButton color="primary" variant="ghost">
          <Icon icon="eva:menu-fill" name="menu" class="text-white size-6" />
        </UButton>

        <template #panel>
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-primary">Serviços</h3>
            <UDivider class="mb-2" />
            <div class="flex flex-col gap-2">
              <UButton
                v-for="item in services"
                :key="item"
                color="primary"
                variant="ghost"
                @click="$emit('select', item)"
              >
                <div class="flex flex-row gap-2 text-white items-center">
                  <Icon
                    :icon="$t(`pages.home.services.${item}.icon`)"
                    :name="item"
                    class="h-5 w-5 text-white"
                  />
                  {{ $t(`pages.home.services.${item}.title`) }}
                </div>
              </UButton>
            </div>

            <h3 class="text-primary">Contato</h3>
            <UDivider class="mb-2" />
            <div class="flex flex-col gap-2">
              <UButton
                v-for="item in contacts"
                :key="item"
                color="primary"
                variant="ghost"
              >
                <div class="flex flex-row gap-2 text-white items-center">
                  <Icon
                    :icon="
                      $t(`pages.home.contact.channels.buttons.${item}.icon`)
                    "
                    :name="item"
                    class="h-5 w-5 text-white"
                  />
                  {{ $t(`pages.home.contact.channels.buttons.${item}.text`) }}
                </div>
              </UButton>
            </div>
          </div>
        </template>
      </UPopover>

      <ul class="hidden lg:flex flex-row gap-2">
        <li v-for="item of services" :key="item">
          <UButton
            color="primary"
            variant="ghost"
            @click="$emit('select', item)"
          >
            <div class="flex flex-row gap-2 items-center">
              <!-- <Icon
                :icon="$t(`pages.home.services.${item}.icon`)"
                :name="item"
                class="h-5 w-5 text-white"
              /> -->
              {{ $t(`pages.home.services.${item}.title`) }}
            </div>
          </UButton>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import type { Services } from "~/app.vue";

const contacts = ["whatsApp", "email", "instagram"];
const services: Array<Services> = [
  "newCompany",
  "changeOffice",
  "changeStatus",
];
defineEmits<{
  select: [value: Services];
}>();
</script>
