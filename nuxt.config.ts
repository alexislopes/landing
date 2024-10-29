// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/icon',
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@vee-validate/nuxt'
  ]
})