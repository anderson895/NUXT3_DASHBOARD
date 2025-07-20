// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    '~/plugins/chartjs.client.ts',
    '~/plugins/chartjs-gradient.client.ts',
    '~/plugins/chartjs-labels.client.ts'
  ]
})
