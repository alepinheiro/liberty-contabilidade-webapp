// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
