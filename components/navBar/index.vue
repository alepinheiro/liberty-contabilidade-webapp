<template>
  <header
    class="bg-mirage backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-800 h-14"
  >
    <div
      class="flex flex-row items-center justify-between h-full px-4 text-primary"
    >
      <div class="flex flex-row items-center">
        <UAvatar
          src="/images/logo.webp"
          size="lg"
          alt="Contabilidade Liberty"
        />
        <h1 class="font-Cinzel text-2xl">
          {{ $t("title") }}
        </h1>
      </div>
      <UPopover
        color="mirage"
        :ui="{
          background: 'bg-mirage',
          ring: 'ring-1 ring-mirage-900 dark:ring-mirage-800',
        }"
      >
        <UButton color="ghost">
          <Icon icon="eva:menu-fill" :name="item" class="text-white size-6" />
        </UButton>

        <template #panel>
          <div class="p-4 flex flex-col gap-2">
            <h3>Serviços</h3>
            <UDivider class="mb-2" />
            <div class="flex flex-col gap-2">
              <UButton v-for="item in services" :key="item" color="ghost">
                <div class="flex flex-row gap-2 text-white items-center">
                  <Icon
                    :icon="$t(`pages.home.services.${item}.icon`)"
                    :name="item"
                    class="h-5 w-5"
                  />
                  {{ $t(`pages.home.services.${item}.title`) }}
                </div>
              </UButton>
            </div>

            <h3>Contato</h3>
            <UDivider class="mb-2" />
            <div class="flex flex-col gap-2">
              <UButton v-for="item in contacts" :key="item" color="ghost">
                <div class="flex flex-row gap-2 text-white items-center">
                  <Icon
                    :icon="
                      $t(`pages.home.contact.channels.buttons.${item}.icon`)
                    "
                    :name="item"
                    class="h-5 w-5"
                  />
                  {{ $t(`pages.home.contact.channels.buttons.${item}.text`) }}
                </div>
              </UButton>
            </div>
          </div>
        </template>
      </UPopover>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const contacts = ["whatsApp", "email", "instagram"];
const services = ["newCompany", "changeOffice", "changeStatus"];
</script>
