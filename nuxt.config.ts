import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // Simple usage
    "@pinia/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "nuxt-delay-hydration",
    "nuxt-swiper",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "pt",
        iso: "pt-BR",
      },
      {
        code: "cn",
        iso: "zh-CN",
      },
    ],
    defaultLocale: "pt",
    vueI18n: "./i18n.config.ts",
  },
});
