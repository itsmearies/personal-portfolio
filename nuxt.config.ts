// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', 'nuxt-aos'],
  app: {
    head: {
      title: 'Personal Portfolio',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap' },
      ]
    }
  },
  
  colorMode: {
    preference: 'light'
  }
})