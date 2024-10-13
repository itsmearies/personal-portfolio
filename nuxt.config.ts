export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    [
      'nuxt-mail',
      {
        message: {
          to: process.env.SMTP_USER,
        },
        smtp: {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,  
          },
        },
      }
    ],
  ],
  app: {
    head: {
      title: 'Personal Portfolio',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap' },
      ]
    }
  },
  
  colorMode: {
    preference: 'light'
  }
})
