// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Na Contabilidade Liberty você encontra suporte especializado livre de complicações e adaptada às suas necessidades pessoais e profissionais.",
        },
        {
          name: "robots",
          content:
            "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        {
          name: "googlebot",
          content: "index, follow, all",
        },
        {
          name: "author",
          content: "Liberty Contabilidade",
        },
        {
          name: "publisher",
          content: "Liberty Contabilidade",
        },
        {
          name: "webmaster",
          content: "@alepslx",
        },
        {
          name: "og:locale",
          content: "pt_BR",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:title",
          content: "Liberty Contabilidade",
        },
        {
          name: "og:description",
          content:
            "Na Contabilidade Liberty você encontra suporte especializado livre de complicações e adaptada às suas necessidades pessoais e profissionais.",
        },
        {
          name: "og:url",
          content: "https://libertycontabilidade.com.br",
        },
        {
          name: "og:image",
          content: "/images/og-image.png",
        },
        {
          name: "og:image:type",
          content: "image/png",
        },
        {
          name: "og:image:width",
          content: "1000",
        },
        {
          name: "og:image:height",
          content: "1000",
        },
      ],
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-fonts",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: ["en", "br"],
    strategy: "no_prefix",
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  googleFonts: {
    families: {
      Cinzel: "200..900",
      Petrona: "200..900",
      Monda: "200..900",
    },
  },
});
