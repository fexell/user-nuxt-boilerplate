import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@vesp/nuxt-fontawesome'],
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:5000/api'
    }
  },
  fontawesome: {
    icons: {
      solid: [
        'at',
        'lock',
      ],
    },
  },
})