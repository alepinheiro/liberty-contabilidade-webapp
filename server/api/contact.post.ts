import { ContactSchema } from "~/components/contact/formSection.vue";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const payload = await readBody<ContactSchema>(event);
  console.log({ payload: config.private.JAILSINHO_API_URL });

  const request = await $fetch<{ success: boolean }>("/send-message/group", {
    method: "POST",
    baseURL: config.private.JAILSINHO_API_URL as string,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": config.private.JAILSINHO_API_KEY as string,
    },
    body: payload,
  });
  return {
    message: request.success
      ? "Mensagem enviada com sucesso!"
      : "Erro ao enviar mensagem!",
  };
});
