import { ContactSchema } from "~/components/contact/formSection.vue";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { data } = await readBody<{ data: ContactSchema }>(event);

  const request = await $fetch<{ success: boolean }>("/send-message/group", {
    method: "POST",
    baseURL: config.private.JAILSINHO_API_URL as string,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": config.private.JAILSINHO_API_KEY as string,
    },
    body: data,
  });
  return {
    message: request.success
      ? "Mensagem enviada com sucesso!"
      : "Erro ao enviar mensagem!",
  };
});
