// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      JAILSINHO_API_KEY: process.env.JAILSINHO_API_KEY,
      JAILSINHO_API_URL: process.env.JAILSINHO_API_URL,
    },
  },

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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    vueI18n: "~/i18n.config.ts", // if you are using custom path, default
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

  colorMode: {
    preference: "light",
  },

  nitro: {
    preset: "vercel-static",
  },

  compatibilityDate: "2024-10-23",

  sitemap: {
    exclude: [
      "/404",
      "/404.html",
      "/500",
      "/500.html",
      "/503",
      "/503.html",
      "/504",
      "/504.html",
      "/505",
      "/505.html",
      "/506",
      "/506.html",
      "/507",
      "/507.html",
      "/508",
      "/508.html",
      "/509",
      "/509.html",
      "/510",
      "/510.html",
      "/511",
      "/511.html",
      "/512",
      "/512.html",
      "/513",
      "/513.html",
      "/514",
      "/514.html",
      "/515",
    ],
  },
});
