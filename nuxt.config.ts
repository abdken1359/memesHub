// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:["~/assets/css/app.css"],
  vite:{
    plugins:[
      tailwindcss(),
    ]
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@vueuse/nuxt',
    'magic-regexp/nuxt',
    '@nuxtjs/seo'
  ],
  socialShare:{
    baseUrl:'https://memeshub.vercel.app'
  }
})