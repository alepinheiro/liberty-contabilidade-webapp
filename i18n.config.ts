import br from "@/locales/br.json";
// import en from "@/locales/br.json";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "br",
  messages: {
    en: br,
    br,
  },
}));
