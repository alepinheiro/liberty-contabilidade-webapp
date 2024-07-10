<template>
  <section id="contactForm" class="p-5">
    <UCard
      :ui="{
        base: 'max-w-6xl mx-auto',
      }"
    >
      <div class="flex lg:flex-row gap-5 items-center">
        <div class="w-1/2 hidden lg:flex">
          <NuxtImg src="/images/og-image.png" class="rounded" />
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl font-bold text-primary">
              {{ $t("pages.home.contact.form.title") }}
            </h1>
            <p class="text-white">
              {{ $t("pages.home.contact.form.description") }}
            </p>
          </div>
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormGroup
              :label="$t('pages.home.contact.form.fullName.label')"
              :placeholder="$t('pages.home.contact.form.fullName.placeholder')"
              :ui="labelUi"
              name="fullName"
            >
              <UInput v-model="state.fullName" />
            </UFormGroup>

            <UFormGroup
              :label="$t('pages.home.contact.form.cellphone.label')"
              :placeholder="$t('pages.home.contact.form.cellphone.placeholder')"
              :ui="labelUi"
              name="cellphone"
            >
              <UInput v-model="state.cellphone" />
            </UFormGroup>

            <UFormGroup
              :label="$t('pages.home.contact.form.email.label')"
              :placeholder="$t('pages.home.contact.form.email.placeholder')"
              :ui="labelUi"
              name="email"
            >
              <UInput v-model="state.email" />
            </UFormGroup>

            <UButton color="primary" type="submit">
              {{ $t("pages.home.contact.form.send") }}
            </UButton>
          </UForm>
        </div>
      </div>
    </UCard>
  </section>
</template>
<script lang="ts" setup>
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const { t } = useI18n();

const labelUi = {
  label: {
    base: "text-white",
  },
};
const schema = z.object({
  fullName: z
    .string()
    .min(3, { message: t("pages.home.contact.form.fullName.minLength") })
    .max(50, { message: t("pages.home.contact.form.fullName.maxLength") }),
  cellphone: z.string(),
  email: z
    .string()
    .email({ message: t("pages.home.contact.form.email.invalid") }),
});

type Schema = z.output<typeof schema>;

const state = reactive<Schema>({
  fullName: "",
  cellphone: "",
  email: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>
