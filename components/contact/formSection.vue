<template>
  <section id="contactForm" class="p-5">
    <UCard
      :ui="{
        base: 'max-w-6xl mx-auto w-fit',
      }"
    >
      <div class="flex lg:flex-row gap-5 items-center">
        <div class="w-1/2 hidden lg:flex">
          <NuxtImg src="/images/og-image.png" class="rounded" />
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl font-bold text-white dark:text-white">
              {{ $t("pages.home.contact.form.title") }}
            </h1>
            <p class="text-white dark:text-white">
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
              :label="$t('pages.home.contact.form.service.label')"
              :placeholder="$t('pages.home.contact.form.service.placeholder')"
              :ui="labelUi"
              name="service"
            >
              <USelect v-model="state.service" :options="selectOptions" />
            </UFormGroup>

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

            <UButton
              color="primary"
              variant="solid"
              type="submit"
              class="flex ml-auto"
              :loading="isLoading"
            >
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
import type { Services } from "~/app.vue";

const toast = useToast();
const { t } = useI18n();
const props = defineProps<{
  service: Services;
}>();

const labelUi = {
  label: {
    base: "text-white",
  },
};

const services = ["newCompany", "changeOffice", "changeStatus"] as const;
const schema = z.object({
  fullName: z
    .string()
    .min(3, { message: "O nome completo deve ter no mínimo 3 caracteres" })
    .max(50, { message: "O nome completo deve ter no máximo 50 caracteres" })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, {
      message: "O nome deve conter apenas letras, espaços, hífens e apóstrofos",
    }),

  cellphone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Número de celular inválido" })
    .refine(
      (value) => {
        const numericValue = value.replace(/\D/g, "");
        return numericValue.length >= 10 && numericValue.length <= 15;
      },
      { message: "O número de celular deve ter entre 10 e 15 dígitos" }
    ),

  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .max(254, { message: "O e-mail deve ter no máximo 254 caracteres" })
    .refine(
      (value) => {
        const parts = value.split("@");
        if (parts.length !== 2) return false;
        const [localPart, domain] = parts;
        return localPart.length <= 64 && domain.length <= 255;
      },
      { message: "E-mail inválido: parte local ou domínio muito longo" }
    ),

  service: z
    .enum(services, {
      errorMap: () => ({ message: "Serviço inválido" }),
    })
    .describe("Tipo de serviço solicitado"),
});

export type ContactSchema = z.infer<typeof schema>;
const selectedService = computed(() => props.service);

const state = reactive<ContactSchema>({
  service: selectedService.value,
  fullName: "",
  cellphone: "",
  email: "",
});

const isLoading = ref(false);

// Watch for changes in props.service and update state.service accordingly
watch(
  () => props.service,
  (newService) => {
    state.service = newService;
  }
);

const selectOptions: Array<{ label: string; value: ContactSchema["service"] }> =
  services.map((service) => {
    return {
      label: t("pages.home.services." + service + ".title"),
      value: service,
    };
  });

async function onSubmit(event: FormSubmitEvent<ContactSchema>) {
  isLoading.value = true;
  try {
    const { message } = await $fetch("/api/contact", {
      method: "POST",
      body: event,
    });
    toast.add({
      title: message,
      id: "modal-success",
    });
    state.fullName = "";
    state.cellphone = "";
    state.email = "";
  } catch (error) {
    toast.add({
      title: "Erro",
      description: "Não foi possível salvar o formulário",
      id: "modal-error",
    });
  } finally {
    isLoading.value = false;
  }
}
</script>
