<template>
  <section id="contactForm" class="px-5">
    <UCard>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-bold text-white">
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
            name="fullName"
          >
            <UInput v-model="state.fullName" />
          </UFormGroup>

          <UFormGroup
            :label="$t('pages.home.contact.form.cellphone.label')"
            :placeholder="$t('pages.home.contact.form.cellphone.placeholder')"
            name="cellphone"
          >
            <UInput v-model="state.cellphone" />
          </UFormGroup>

          <UFormGroup
            :label="$t('pages.home.contact.form.email.label')"
            :placeholder="$t('pages.home.contact.form.email.placeholder')"
            name="email"
          >
            <UInput v-model="state.email" />
          </UFormGroup>

          <UButton color="primary" type="submit">
            {{ $t("pages.home.contact.form.send") }}
          </UButton>
        </UForm>
      </div>
    </UCard>
  </section>
</template>
<script lang="ts" setup>
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const { t } = useI18n();
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
